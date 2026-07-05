'use strict';

// Uncomment the next lines to use your game instance in the browser

import Game from '../modules/Game.class.js';
// const Game = require('../modules/Game.class.js');
 const game = new Game();
const start1 = document.querySelector('.button');

start1.addEventListener('click', () => {


  if (game.status !== 'playing') {
    game.start();
    likeloop();
  }  else {
    console.log('working');
  }


})



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

