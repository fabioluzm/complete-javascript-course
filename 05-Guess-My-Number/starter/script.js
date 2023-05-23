'use strict';

// console.log(document.querySelector('.message').textContent);

// DOM MANIPULATION

// messageText( 'Correct Number!!');
// numberText('13')

// document.querySelector('.guess').value = '23';
// console.log((document.querySelector('.guess').value = '23'));

const messageText = (message) =>
  (document.querySelector('.message').textContent = message);
const scoreText = (score) =>
  (document.querySelector('.score').textContent = score);
const numberText = (number) =>
  (document.querySelector('.number').textContent = number);

const bodyStyle = (style) =>
  (document.querySelector('body').style.backgroundColor = style);
const numberStyle = (style) =>
  (document.querySelector('.number').style.width = style);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// EVENT LISTENERS
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess || guess > 20) {
    messageText('Please enter a number between 1 and 20!');
    // when guess is diferent from the secret number
    // refactored code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageText(
        guess < secretNumber ? 'Number is to low!' : 'Number is to high!'
      );
      score--;
      scoreText(score);
    } else {
      scoreText(0);
      messageText('You lost the game!');
      numberText('😵');
      // MANIPULATE STYLES
      bodyStyle('#F03030');
      numberStyle('30rem');
    }
    //   // when guess is to low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     messageText('Number is to low!');
    //     score--;
    //     scoreText(score);
    //   } else {
    //     scoreText(0);
    //     messageText('You lost the game!');
    //     numberText('😵');
    //     // MANIPULATE STYLES
    //     bodyStyle('#F03030');
    //     numberStyle('30rem');
    //   }
    //   // when guess is to high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     messageText('Number is to high!');
    //     score--;
    //     scoreText(score);
    //   } else {
    //     messageText('You lost the game!');
    //   }
    //   if (score === 0) {
    //     scoreText(0);
    //     messageText('You lost the game!');
    //   }
    // when player wins
  } else if (guess === secretNumber) {
    messageText('Correct Number!!');
    numberText(secretNumber);

    // MANIPULATE STYLES
    bodyStyle('#60b347');
    numberStyle('30rem');

    // set highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  // CODING CHALLENGE #1
  // Implement reset functionality
  document.querySelector('.again').addEventListener('click', function () {
    // restore initial variables values
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // MANIPULATE DOM
    // restore initial conditions of message, number, score, and guess input
    numberText('?');
    messageText('Start guessing...');
    scoreText(score);
    document.querySelector('.guess').value = '';

    // MANIPULATE STYLES
    // restore original styles
    bodyStyle('#222');
    numberStyle('15rem');
  });
});
