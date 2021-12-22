import { rounds, getRandomNumber, basement } from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;

function checkEvenNumbers() {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const hasEvenNumber = isEvenNumber(randomNumber) ? 'yes' : 'no';
    result.push([randomNumber, hasEvenNumber]);
  }
  return result;
}

const checkEvenNumbersGame = () => basement(rulesGame, checkEvenNumbers());

export default checkEvenNumbersGame;
