import basement from '../index.js';

const rounds = 3;
const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const checkGame = () => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const hasEvenNumber = isEvenNumber(randomNumber) ? 'yes' : 'no';
    result.push([randomNumber, hasEvenNumber]);
  }
  return result;
};

const checkEvenNumbers = () => basement(rounds, rulesGame, checkGame());

export default checkEvenNumbers;
