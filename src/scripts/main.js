'use strict';

// Uncomment the next lines to use your game instance in the browser

import Game from '../modules/Game.class.js';
 const Game = require('../modules/Game.class.js');
 const game = new Game();
const start1 = document.querySelector('.button');
const start2 = document.querySelector('.button1');

function updateUI() {
  const currentStatus = game.getStatus();
  const table = document.querySelector('.showtable');
  const title = document.querySelector('.title');
  const anothertitle = document.querySelector('.anothertitle');

  if (currentStatus === 'stop') {
    start1.textContent = 'Restart';
    table.classList.add('showtableon');
    title.textContent = 'Game Over!';
    anothertitle.textContent = 'Please restart the game';
    likeloop();
    score();
    game.score = 0;
  } else if (currentStatus === 'victory') {
    table.classList.add('showtableon');
    title.textContent = 'Victory!';
    anothertitle.textContent = 'Please restart the game';
    likeloop();
    score();
    game.score = 0;
  } else {
    table.classList.remove('showtableon');

    if (currentStatus === 'playing') {
      start1.textContent = 'Playing';
    } else {
      start1.textContent = 'Start Game';
    }
  }

start2.addEventListener('click', () => {

  if (game.status === 'stop' || game.status === 'victory') {
    game.score = 0;
    game.restart();
  }


  likeloop();
  score();
  updateUI();
});

};

start1.addEventListener('click', () => {
  const currentStatus = game.getStatus();
  updateUI();
  if (game.status === 'stop' || game.status === 'victory') {
    game.score = 0;
    game.restart();
    likeloop();
  }

  if (game.status !== 'playing') {
    game.start();
    score();
    likeloop();
  } else if (game.status === 'stop' || game.status === 'victory') {
    game.restart();
    likeloop();
  }

likeloop();
  score();
  updateUI();

});

window.addEventListener('keydown', (event => {
  updateUI();
  if (game.status !== 'playing') return;

  if (event.key === 'a' || event.key === 'A' || event.key === 'ф' || event.key === 'Ф' && game.status === 'playing') {


    game.moveLeft();
    likeloop();
    score();
    highscore();
    game.Gameover();
    game.getStatus();
  }
}));

window.addEventListener('keydown', (event => {
    updateUI();
  if (game.status !== 'playing') return;

  if (event.key === 'в' || event.key === 'В' || event.key === 'd' || event.key === 'D' && game.status === 'playing') {


    game.moveRight();
    likeloop();
    score();
    highscore();
    game.Gameover();
    game.getStatus();
  }
}));

window.addEventListener('keydown', (event => {
    updateUI();
  if (game.status !== 'playing') return;

  if (event.key === 's' || event.key === 'S' || event.key === 'і' || event.key === 'І' && game.status === 'playing') {
;

    game.moveDown();
    likeloop();
    score();
    highscore();
    game.Gameover();
    game.getStatus();
  }
}));

window.addEventListener('keydown', (event => {
    updateUI();
  if (game.status !== 'playing') return;

  if (event.key === 'w' || event.key === 'W' || event.key === 'ц' || event.key === 'Ц' && game.status === 'playing') {


    game.moveUp();
    likeloop();
    score();
    highscore();
    game.Gameover();
    game.getStatus();
  }
}));

function score () {
  const scorething  = game.getScore();
  const score = document.querySelector('.game-score');
  score.textContent = scorething;

}

function highscore () {
  const scorething = game.highscore;
  const highscore = document.querySelector('.game-highscore');
  highscore.textContent = game.highscore;
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
