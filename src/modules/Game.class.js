'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {

  constructor(initialState) {
    this.board = initialState || [
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0]
    ]

    this.score = 0;
    this.status = 'idle';
  }

  moveLeft() {}
  moveRight() {}
  moveUp() {}
  moveDown() {}


  getScore() {
    return this.score;
  }


  getState() {
    return this.board;
  }


  getStatus() {}


  start() {
    this.status = 'playing';
    this.AddloopclearRandomAdd();
    this.AddloopclearRandomAdd();


  }


  restart() {}

  AddloopclearRandomAdd () {
const emptyCells = [];
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (this.board[y][x] === 0) { emptyCells.push({ y, x }) };
    }
  }

  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const targetCell = emptyCells[randomIndex];
    const y = targetCell.y;
    const x = targetCell.x;
    this.board[y][x] = Math.random() < 0.9 ? 2 : 4;
  }

  //  if (Emptycells.length > 0) {
  //    const randomIndex = Math.floor(Math.random() * Emptycells.length);
  //    const targetcell = Emptycells[randomIndex];
  //    const rnumber = Math.random();
  //    const randomnumber = rnumber <= 0.1 ? 4 : (rnumber > 0.1 ? 2 : 2);
//
  //    this.board[targetcell.y][targetcell.x] = randomnumber;
  //  }
  }
}

export default Game;

//module.exports = Game;
