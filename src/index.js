import readlineSync from 'readline-sync';

const rounds = 3;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

function basement(rulesGame, checkGame) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rulesGame}`);

  for (let i = 0; i < rounds; i += 1) {
    const [questionValue, answerValue] = checkGame[i];
    console.log(`Question: ${questionValue}`);
    const askAnswer = readlineSync.question('Your answer: ');
    if (askAnswer !== answerValue.toString()) {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${answerValue}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export { rounds, getRandomNumber, basement };
