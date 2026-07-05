'use strict';

// Uncomment the next lines to use your game instance in the browser

import Game from '../modules/Game.class.js';
// const Game = require('../modules/Game.class.js');
 const game = new Game();

// Write your code here

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
  const thing = document.querySelectorAll('.field-cell');

  for (let y = 0; y < 4; y++) {
    for(let x = 0; x < 4; x++) {
      const anotherthing = board[y][x];
      const value = y * 4 + x;

      let randomcell = 0;

      if (Math.random() < 0.2) {
         randomcell = Math.floor(Math.random() * value);
      }

      const currentthing = thing[value];

      const newcell = thing[randomcell];



      if (value > 0 && currentthing.textContent === '') {
        newcell.textContent = 2;
        newcell.classList.add = ('field-cell--2');
      }

    }
  }
}

