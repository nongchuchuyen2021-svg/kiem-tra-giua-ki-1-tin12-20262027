import mcqBank from "../data/mcqData";
import tfBank from "../data/tfData";
import essayBank from "../data/essayData";

export const MCQ_COUNT = 16;
export const TF_COUNT = 3;
export const ESSAY_MIN = 2;
export const ESSAY_MAX = 3;

export const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const shuffleMcqOptions = (q) => {
  const correctValue = q.options[q.correct];
  const shuffledValues = shuffleArray(Object.values(q.options));

  const newOptions = {};
  let newCorrect = "";
  const labels = ["A", "B", "C", "D"];

  shuffledValues.forEach((val, index) => {
    newOptions[labels[index]] = val;
    if (val === correctValue) {
      newCorrect = labels[index];
    }
  });
  return { ...q, options: newOptions, correct: newCorrect };
};

const shuffleTfStatements = (q) => {
  const shuffledEntries = shuffleArray(Object.entries(q.statements));

  const newStatements = {};
  const newCorrect = {};
  const labels = ["a", "b", "c", "d"];

  shuffledEntries.forEach(([oldKey, statementText], index) => {
    const newLabel = labels[index];
    newStatements[newLabel] = statementText;
    newCorrect[newLabel] = q.correct[oldKey];
  });

  return { ...q, statements: newStatements, correct: newCorrect };
};

// Mỗi lần vào làm bài (hoặc làm lại), rút ngẫu nhiên một đề con từ kho câu
// hỏi lớn: 16 trắc nghiệm, 3 đúng/sai, 2 hoặc 3 tự luận - đồng thời đảo
// ngẫu nhiên thứ tự câu hỏi và đáp án bên trong mỗi câu.
export const generateQuiz = () => {
  const mcq = shuffleArray(mcqBank)
    .slice(0, MCQ_COUNT)
    .map(shuffleMcqOptions);

  const tf = shuffleArray(tfBank).slice(0, TF_COUNT).map(shuffleTfStatements);

  const essayCount =
    ESSAY_MIN + Math.floor(Math.random() * (ESSAY_MAX - ESSAY_MIN + 1));
  const essay = shuffleArray(essayBank).slice(0, essayCount);

  return { mcq, tf, essay };
};
