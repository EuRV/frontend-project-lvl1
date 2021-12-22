import { rounds, getRandomNumber, basement } from '../index.js';

const rulesGame = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const calculate = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function calculateExpression() {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    const firstNumber = getRandomNumber(1, 25);
    const secondNumber = getRandomNumber(1, 25);
    const index = getRandomNumber(0, operations.length);
    const randomOperator = operations[index];
    const questionValue = `${firstNumber} ${randomOperator} ${secondNumber}`;
    const answerValue = calculate[randomOperator](firstNumber, secondNumber);
    result.push([questionValue, answerValue]);
  }
  return result;
}

const calculateExpressionGame = () => basement(rulesGame, calculateExpression());

export default calculateExpressionGame;
