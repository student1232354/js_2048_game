'use strict';

// Uncomment the next lines to use your game instance in the browser

import Game from '../modules/Game.class.js';

// const Game = require('../modules/Game.class.js');

const game = new Game();
const start1 = document.querySelector('.button');

function updateUI() {
  const currentStatus = game.getStatus();

  const messagestart = document.querySelector('.message-start');

  const loseMessage = document.querySelector('.message-lose');
  const winmessage = document.querySelector('.message-win');

  if (currentStatus === 'playing') {
    messagestart.classList.add('hidden');
    winmessage.classList.add('hidden');
    loseMessage.classList.add('hidden');
  }

  if (currentStatus === 'lose') {
    start1.textContent = 'Restart';

    if (loseMessage) {
      loseMessage.classList.remove('hidden');
    }

    likeloop();
    score();
  } else if (currentStatus === 'win') {
    start1.textContent = 'Restart';
    winmessage.classList.remove('hidden');
    likeloop();
  } else {
    if (loseMessage) {
      loseMessage.classList.add('hidden');
    }

    if (currentStatus === 'playing') {
      start1.textContent = 'Playing';
    } else {
      start1.textContent = 'Start Game';
    }
  }
}

start1.addEventListener('click', () => {
  updateUI();

  if (
    game.status === 'lose' ||
    game.status === 'win' ||
    game.status === 'idle'
  ) {
    game.score = 0;
    game.restart();
    likeloop();
  }

  if (game.status !== 'playing') {
    game.start();
    score();
    likeloop();
  } else if (game.status === 'lose' || game.status === 'win') {
    game.restart();
    likeloop();
  }

  likeloop();
  score();
  updateUI();
});

window.addEventListener('keydown', () => {
  updateUI();

  if (game.status !== 'playing') {
    return;
  }

  if (
    event.key === 'a' ||
    event.key === 'A' ||
    event.key === 'ф' ||
    (event.key === 'Ф' && game.status === 'playing')
  ) {
    game.moveLeft();
    likeloop();
    score();
    highscore();
    game.Gameover();
    game.getStatus();
  }
});

window.addEventListener('keydown', () => {
  updateUI();

  if (
    event.key === 'в' ||
    event.key === 'В' ||
    event.key === 'd' ||
    (event.key === 'D' && game.status === 'playing')
  ) {
    game.moveRight();
    likeloop();
    score();
    highscore();
    game.Gameover();
    game.getStatus();
  }
});

window.addEventListener('keydown', () => {
  updateUI();

  if (game.status !== 'playing') {
    return;
  }

  if (
    event.key === 's' ||
    event.key === 'S' ||
    event.key === 'і' ||
    (event.key === 'І' && game.status === 'playing')
  ) {
    game.moveDown();
    likeloop();
    score();
    highscore();
    game.Gameover();
    game.getStatus();
  }
});

window.addEventListener('keydown', () => {
  updateUI();

  if (game.status !== 'playing') {
    return;
  }

  if (
    event.key === 'w' ||
    event.key === 'W' ||
    event.key === 'ц' ||
    (event.key === 'Ц' && game.status === 'playing')
  ) {
    game.moveUp();
    likeloop();
    score();
    highscore();
    game.Gameover();
    game.getStatus();
  }
});

function score() {
  const scorething = game.getScore();

  const scoreElement = document.querySelector('.game-score');

  if (scoreElement) {
    scoreElement.textContent = scorething;
  }
}

function highscore() {
  const highscoreElement = document.querySelector('.game-highscore');

  if (highscoreElement) {
    highscoreElement.textContent = game.highscore;
  }
}

function likeloop() {
  const board = game.getState();
  const cells = document.querySelectorAll('.field-cell');

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const value = board[y][x];
      const cellIndex = y * 4 + x;
      const currentCell = cells[cellIndex];

      if (value === 0) {
        currentCell.textContent = '';
        currentCell.className = 'field-cell';
      } else {
        currentCell.textContent = value;
        currentCell.className = `field-cell field-cell--${value}`;
      }
    }
  }
}

updateUI();
