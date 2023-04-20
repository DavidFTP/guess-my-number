'use strict';

// document.querySelector('.number').textContent = number;
let number = Math.trunc(Math.random() * 50) + 1;
let guess;
let past;
let HighScore = 0;

const checkGuess = function (guess) {
  let score = Number(document.querySelector('.score').textContent);
  if (!guess) {
    return '⛔ No Number!';
  } else if (guess === past) {
    return '!? Same Guess !?';
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = number;
    if (score > HighScore) HighScore = score;
    document.querySelector('.highscore').textContent = HighScore;
    return '🎉 Correct Number!!';
  } else {
    document.querySelector('.score').textContent = --score;
    return guess > number ? '📈 Too High!' : '📉 Too Low!';
  }
};

const gameplay = function () {
  guess = Number(document.querySelector('.guess').value);
  // console.log(`current guess: ${guess ? guess : 'no guess'}, last guess: ${past ? past : 'no guess'}`);
  document.querySelector('.message').textContent = checkGuess(guess);
  past = guess;
};

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 50) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 50;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  gameplay();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    gameplay();
  }
});
