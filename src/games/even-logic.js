import readlineSync from 'readline-sync';
import sayUserName from '../cli.js';

const rounds = 3;
const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

function checkEvenNumbers() {
  const userName = sayUserName();
  console.log(`${rulesGame}`);

  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const askAnswer = readlineSync.question('Your answer: ');
    const hasEvenNumber = isEvenNumber(randomNumber) ? 'yes' : 'no';
    if (askAnswer !== hasEvenNumber) {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${hasEvenNumber}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export default checkEvenNumbers;
