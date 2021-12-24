import { rounds, getRandomNumber, basement } from '../index.js';
import generateQuestionAnswer from '../utility.js';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getNumber = generateQuestionAnswer(isPrime, getRandomNumber, rounds);

const checkPrimeNumberGame = () => basement(rulesGame, getNumber);

export default checkPrimeNumberGame;
