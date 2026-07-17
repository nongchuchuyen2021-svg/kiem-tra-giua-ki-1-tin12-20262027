import { MCQ_COUNT } from "./shuffle";

// Thang điểm 4 - 3 - 3: Trắc nghiệm 16 câu x 0.25đ = 4.0đ;
// Đúng/Sai 3 câu (luỹ tiến theo số ý đúng) tối đa 3.0đ; Tự luận giáo viên
// chấm riêng, không tính tự động (khoảng 3.0đ còn lại).
export const MCQ_TOTAL_POINTS = 4.0;
export const MCQ_POINT_PER_QUESTION = MCQ_TOTAL_POINTS / MCQ_COUNT;

export const TF_KEYS = ["a", "b", "c", "d"];
export const TF_POINTS_BY_CORRECT_COUNT = { 1: 0.1, 2: 0.25, 3: 0.5, 4: 1.0 };

export const calculateScore = (quizData, mcqAnswers, tfAnswers) => {
  let mcqScore = 0;
  quizData.mcq.forEach((q) => {
    if (mcqAnswers[q.id] === q.correct) {
      mcqScore += MCQ_POINT_PER_QUESTION;
    }
  });

  let tfScore = 0;
  quizData.tf.forEach((q) => {
    const userAns = tfAnswers[q.id] || {};
    let correctCount = 0;
    TF_KEYS.forEach((key) => {
      if (userAns[key] === q.correct[key]) correctCount++;
    });
    tfScore += TF_POINTS_BY_CORRECT_COUNT[correctCount] || 0;
  });

  return { mcq: mcqScore, tf: tfScore, total: mcqScore + tfScore };
};
