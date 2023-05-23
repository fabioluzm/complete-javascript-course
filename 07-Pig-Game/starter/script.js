'use strict';

// define elements
const playerSection = document.querySelectorAll('.player');

const player0 = document.getElementById('name--0');
const player1 = document.getElementById('name--0');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const diceImg = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  for (let i = 0; i < playerSection.length; i++) {
    playerSection[i].classList.remove('player--active', 'player--winner');
  }
  document.querySelector('.player--0').classList.add('player--active');

  diceImg.classList.add('hidden');

  score0.textContent = '0';
  score1.textContent = '0';
  current0.textContent = '0';
  current1.textContent = '0';
};
init();

const switchPlayer = function () {
  // reset current score
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // switch player side
  for (let i = 0; i < playerSection.length; i++) {
    playerSection[i].classList.toggle('player--active');
  }
};

// roll dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // define random number for dice face
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display the dice
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;

    // check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // change later to active player
    } else {
      // reset current score and switch player
      switchPlayer();
    }
  }
});

// hold functionality
btnHold.addEventListener('click', () => {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if score is >=100 to finish the game
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      document.getElementById(`score--${activePlayer}`).textContent = 100;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      diceImg.classList.add('hidden');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// new game / reset
btnNew.addEventListener('click', init);
