import { rounds, getRandomNumber, basement } from '../index.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

function getGcd() {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    const firstNumber = getRandomNumber(1, 25);
    const secondNumber = getRandomNumber(1, 25);
    const randomNumbers = `${firstNumber} ${secondNumber}`;
    const divisor = gcd(firstNumber, secondNumber);
    result.push([randomNumbers, divisor]);
  }
  return result;
}

const gsdGame = () => basement(rulesGame, getGcd());

export default gsdGame;
