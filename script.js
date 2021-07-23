'use strict';

// Random number generated (1-20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Set initial score to 20
let score = 20;
// Set initial highscore to 0
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

// Event listener for the check button
document.querySelector('.check').addEventListener('click', function() {
  // Gets the value that the user entered
  const guess = Number(document.querySelector('.guess').value);

  // Checks to see whether a # was entered
  // A falsy value will invert to true
  if (!guess) {
    displayMessage('⛔️ No number!');

    // What happens if the guess is right
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // What happens if the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!')
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Event listener for the again button
document.querySelector('.again').addEventListener('click', function() {
  // Restore variables to original values
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Restore messages/content
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // Restore styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});