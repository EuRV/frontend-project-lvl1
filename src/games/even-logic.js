import { rounds, getRandomNumber, basement } from '../index.js';
import generateQuestionAnswer from '../utility.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;

const checkEvenNumbers = generateQuestionAnswer(isEvenNumber, getRandomNumber, rounds);
const checkEvenNumbersGame = () => basement(rulesGame, checkEvenNumbers);

export default checkEvenNumbersGame;
