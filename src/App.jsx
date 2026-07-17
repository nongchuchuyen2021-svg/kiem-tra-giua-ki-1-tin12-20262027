import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import Toolbar from "./components/Toolbar";
import ResultsBanner from "./components/ResultsBanner";
import TabsNav from "./components/TabsNav";
import McqSection from "./components/McqSection";
import TfSection from "./components/TfSection";
import EssaySection from "./components/EssaySection";
import ConfirmModal from "./components/ConfirmModal";
import { generateQuiz } from "./utils/shuffle";
import { calculateScore } from "./utils/scoring";
import { loadResultHistory, saveResultToHistory } from "./utils/resultHistory";
import { sendResultToSheet, flushQueuedResults } from "./utils/sheetSync";

const EXAM_DURATION_MS = 45 * 60 * 1000;

export default function App() {
  const [studentInfo, setStudentInfo] = useState({ name: "", class: "" });
  const [activeTab, setActiveTab] = useState("mcq");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showTabSwitchNotice, setShowTabSwitchNotice] = useState(false);
  const [scores, setScores] = useState({ mcq: 0, tf: 0, total: 0 });
  const [history, setHistory] = useState(() => loadResultHistory());
  const [sheetSyncStatus, setSheetSyncStatus] = useState("idle");

  const [quizData, setQuizData] = useState(() => generateQuiz());
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});
  const [essayAnswers, setEssayAnswers] = useState({});

  // Mốc thời gian kết thúc bài (thời gian thực), không phải bộ đếm số tick.
  // Chỉ set một lần khi vào bài - bài kiểm tra chỉ làm và nộp một lần duy
  // nhất, không có tính năng làm lại.
  const [examEndTime] = useState(() => Date.now() + EXAM_DURATION_MS);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_MS / 1000);

  const handleMcqChange = (qId, option) => {
    if (isSubmitted) return;
    setMcqAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleTfChange = (qId, statementKey, value) => {
    if (isSubmitted) return;
    setTfAnswers((prev) => ({
      ...prev,
      [qId]: { ...(prev[qId] || {}), [statementKey]: value },
    }));
  };

  const handleEssayChange = (qId, text) => {
    if (isSubmitted) return;
    setEssayAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  const executeSubmit = async (submitName, submitClass) => {
    const currentScores = calculateScore(quizData, mcqAnswers, tfAnswers);
    setScores(currentScores);
    setShowConfirmModal(false);
    setIsSubmitted(true);
    setActiveTab("mcq");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const resultData = {
      name: submitName,
      class: submitClass,
      mcqScore: currentScores.mcq,
      tfScore: currentScores.tf,
      totalScore: currentScores.total,
    };

    saveResultToHistory(resultData);
    setHistory(loadResultHistory());

    setSheetSyncStatus("sending");
    const status = await sendResultToSheet({
      ...resultData,
      essayAnswers: quizData.essay.map((q) => ({
        question: q.text,
        answer: essayAnswers[q.id] || "",
      })),
    });
    setSheetSyncStatus(status);
  };

  const handleForceSubmit = () => {
    const finalName = studentInfo.name.trim() || "Không ghi tên (Hết giờ)";
    const finalClass = studentInfo.class.trim() || "Không rõ";
    setStudentInfo({ name: finalName, class: finalClass });
    executeSubmit(finalName, finalClass);
  };

  const handleSubmit = () => {
    if (!studentInfo.name.trim() || !studentInfo.class.trim()) {
      setShowConfirmModal("info_missing");
      return;
    }
    setShowConfirmModal("confirm");
  };

  const confirmSubmit = () => {
    executeSubmit(studentInfo.name, studentInfo.class);
  };

  // Đếm ngược theo mốc thời gian thực: mỗi lần tick (hoặc khi tab được mở
  // lại) đều tính lại thời gian còn lại từ Date.now(), nên trình duyệt di
  // động "ghìm" bộ đếm khi chuyển sang app khác không giúp kéo dài giờ làm bài.
  useEffect(() => {
    if (isSubmitted) return undefined;

    const tick = () => {
      const remainingSeconds = Math.max(
        0,
        Math.ceil((examEndTime - Date.now()) / 1000),
      );
      setTimeLeft(remainingSeconds);
      if (remainingSeconds === 0) {
        handleForceSubmit();
      }
    };

    tick();
    const intervalId = setInterval(tick, 1000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", tick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examEndTime, isSubmitted]);

  // Chống rời trang tra cứu AI: khi học sinh chuyển sang tab/ứng dụng khác
  // rồi quay lại trong lúc đang làm bài, tự động đổi sang một bộ câu hỏi
  // mới và xoá hết đáp án đã chọn. Đồng hồ đếm ngược KHÔNG bị ảnh hưởng
  // (vẫn tính theo Date.now() ở effect phía trên) nên không có lợi ích gì
  // về mặt thời gian khi rời trang.
  useEffect(() => {
    if (isSubmitted) return undefined;

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") return;
      setQuizData(generateQuiz());
      setMcqAnswers({});
      setTfAnswers({});
      setEssayAnswers({});
      setActiveTab("mcq");
      setShowConfirmModal(false);
      setShowTabSwitchNotice(true);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
  }, [isSubmitted]);

  // Gửi lại các kết quả chưa lên được Google Sheet (do mất mạng lúc nộp
  // bài) - thử ngay khi mở trang và mỗi khi trình duyệt báo có mạng trở lại.
  useEffect(() => {
    flushQueuedResults();
    window.addEventListener("online", flushQueuedResults);
    return () => window.removeEventListener("online", flushQueuedResults);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-12">
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white py-12 px-4 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full -ml-24 -mb-24 blur-2xl"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight drop-shadow-md">
            KIỂM TRA GIỮA KÌ 1 TIN HỌC 12
          </h1>
          <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-xl md:text-2xl font-bold text-blue-100 uppercase tracking-widest">
            TRƯỜNG THPT NA RÌ
          </p>
        </div>
      </div>

      <Toolbar
        studentInfo={studentInfo}
        onStudentInfoChange={(patch) =>
          setStudentInfo((prev) => ({ ...prev, ...patch }))
        }
        timeLeft={timeLeft}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
      />

      <main className="max-w-5xl mx-auto px-4 mt-6">
        {!isSubmitted && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded text-sm text-amber-800 mb-6 flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Lưu ý:</strong> Nếu chuyển sang tab hoặc ứng dụng khác
              trong lúc làm bài (ví dụ để tra cứu AI), hệ thống sẽ tự động đổi
              sang một bộ câu hỏi mới và xoá đáp án đã chọn khi quay lại.
              Đồng hồ đếm giờ không dừng lại.
            </span>
          </div>
        )}

        {showTabSwitchNotice && !isSubmitted && (
          <div className="bg-red-50 border border-red-300 rounded-xl p-4 mb-6 shadow-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-red-800 font-semibold text-sm">
                Đã phát hiện bạn rời khỏi trang làm bài.
              </p>
              <p className="text-red-700 text-sm mt-0.5">
                Đề đã được đổi sang bộ câu hỏi mới và đáp án đã chọn trước đó
                đã bị xoá. Đồng hồ vẫn tiếp tục chạy.
              </p>
            </div>
            <button
              onClick={() => setShowTabSwitchNotice(false)}
              className="text-red-600 hover:text-red-800 font-bold text-sm flex-shrink-0"
            >
              Đã hiểu
            </button>
          </div>
        )}

        {isSubmitted && (
          <ResultsBanner
            studentInfo={studentInfo}
            scores={scores}
            history={history}
            syncStatus={sheetSyncStatus}
          />
        )}

        <TabsNav activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === "mcq" && (
          <McqSection
            questions={quizData.mcq}
            answers={mcqAnswers}
            isSubmitted={isSubmitted}
            onChange={handleMcqChange}
          />
        )}

        {activeTab === "tf" && (
          <TfSection
            questions={quizData.tf}
            answers={tfAnswers}
            isSubmitted={isSubmitted}
            onChange={handleTfChange}
          />
        )}

        {activeTab === "essay" && (
          <EssaySection
            questions={quizData.essay}
            answers={essayAnswers}
            isSubmitted={isSubmitted}
            onChange={handleEssayChange}
          />
        )}
      </main>

      <ConfirmModal
        mode={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={confirmSubmit}
      />
    </div>
  );
}
