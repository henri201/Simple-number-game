'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  /////////////////////////// when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number!';
    displayMessage('No number!');
    ////////////////////////////when th player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    //////////////////////////////Changing CSS color and size of an element
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!' : 'too low!');
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'too high!' : 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*////////////////////////////////// when the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //////////////////////when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score = 20;
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
