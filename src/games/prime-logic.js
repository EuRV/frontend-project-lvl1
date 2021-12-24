import { rounds, getRandomNumber, basement } from '../index.js';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getNumber = () => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const hasPrime = isPrime(randomNumber) ? 'yes' : 'no';
    result.push([randomNumber, hasPrime]);
  }
  return result;
};

const checkPrimeNumberGame = () => basement(rulesGame, getNumber());

export default checkPrimeNumberGame;
