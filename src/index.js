import readlineSync from 'readline-sync';
import sayUserName from './cli.js';

const basement = (rounds, rulesGame, checkGame) => {
  const userName = sayUserName();
  console.log(`${rulesGame}`);

  for (let i = 0; i < rounds; i += 1) {
    const [randomNumbers, hasEvenNumber] = checkGame[i];
    console.log(`Question: ${randomNumbers}`);
    const askAnswer = readlineSync.question('Your answer: ');
    if (askAnswer !== hasEvenNumber) {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${hasEvenNumber}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default basement;
