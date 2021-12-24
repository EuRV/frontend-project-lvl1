const generateQuestionAnswer = (isCorrectAnswer, getRandomNumber, rounds) => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isCorrectAnswer(question) ? 'yes' : 'no';
    result.push([question, correctAnswer]);
  }
  return result;
};

export default generateQuestionAnswer;
