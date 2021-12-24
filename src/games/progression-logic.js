import { rounds, getRandomNumber, basement } from '../index.js';

const rulesGame = 'What number is missing in the progression?';

function getProgression(step, number, length) {
  const progression = [number];
  let nextNumber = number;
  for (let i = 1; i <= length; i += 1) {
    nextNumber += step;
    progression.push(nextNumber);
  }
  return progression;
}

function getProgressionNumber() {
  const result = [];
  const lengthProgression = getRandomNumber(5, 11);
  for (let i = 0; i < rounds; i += 1) {
    const stepProgression = getRandomNumber(1, 5);
    const firstNumber = getRandomNumber(1, 50);
    const progression = getProgression(stepProgression, firstNumber, lengthProgression);
    const randomIndex = getRandomNumber(0, progression.length);
    const randomNumbersProgression = progression[randomIndex];
    progression[randomIndex] = '..';
    const progressionWithoutNumber = progression.join(' ');
    result.push([progressionWithoutNumber, randomNumbersProgression]);
  }
  return result;
}

const progressionGame = () => basement(rulesGame, getProgressionNumber());

export default progressionGame;
