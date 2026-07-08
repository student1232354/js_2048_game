'use strict';

/**
 * This class represents the game.
 */
class Game {

  constructor(initialState) {
    this.board = initialState || [
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0]
    ]
    this.highscore = 0;
    this.score = 0;
    this.status = 'idle';
  }

  moveLeft() {
for (let y = 0; y < 4; y++) {
    for (let x = 1; x < 4; x++) {

      if (this.board[y][x] !== 0) {
        let currentX = x;


        while (currentX > 0 && this.board[y][currentX - 1] === 0) {

          this.board[y][currentX - 1] = this.board[y][currentX];
          this.board[y][currentX] = 0;


          currentX--;
        }


        if (currentX > 0 && this.board[y][currentX - 1] === this.board[y][currentX]) {
          this.board[y][currentX - 1] = this.board[y][currentX] * 2;
          this.board[y][currentX] = 0;
        }
      }

    }
  }
    this.AddloopclearRandomAdd();
    this.Victory();
    this.Gameover();
    this.getStatus();
    this.getScore();
  }

  moveRight() {
    for (let y = 0; y < 4; y++) {
      for (let x = 2; x >= 0; x--) {
        if (this.status !== 'playing') {
          console.log('no errors - chaaama');
          return;
        }

        if (this.board[y][x] !== 0 && this.status === 'playing') {
          let currentX = x;

          while (currentX < 3 && this.board[y][currentX + 1] === 0) {
            this.board[y][currentX + 1] = this.board[y][currentX];
            this.board[y][currentX] = 0;
            currentX++;
          }

          if (currentX < 3 && this.board[y][currentX + 1] === this.board[y][currentX]) {
            const newValue = this.board[y][currentX] * 2;
            this.board[y][currentX + 1] = newValue;
            this.board[y][currentX] = 0;
          }
        }
      }
    }
    this.AddloopclearRandomAdd();
    this.Victory();
    this.Gameover();
    this.getStatus();
    this.getScore();
  }

  moveUp() {
for (let y = 1; y < 4; y++) {
    for (let x = 0; x < 4; x++) {

      if (this.board[y][x] !== 0) {
        let currentY = y;
        while (currentY > 0 && this.board[currentY - 1][x] === 0) {
          this.board[currentY - 1][x] = this.board[currentY][x];
          this.board[currentY][x] = 0;

          currentY--;
        }


        if (currentY > 0 && this.board[currentY - 1][x] === this.board[currentY][x]) {
          this.board[currentY - 1][x] = this.board[currentY][x] * 2;
          this.board[currentY][x] = 0;
        }
      }

    }
  }

      this.AddloopclearRandomAdd();
      this.Victory();
      this.Gameover();
    this.getStatus();
    this.getScore();
  }

  moveDown() {
for (let y = 2; y >= 0; y--) {
    for (let x = 0; x < 4; x++) {

      if (this.board[y][x] !== 0) {
        let currentY = y;


        while (currentY < 3 && this.board[currentY + 1][x] === 0) {
          this.board[currentY + 1][x] = this.board[currentY][x];
          this.board[currentY][x] = 0;

          currentY++;
        }

        if (currentY < 3 && this.board[currentY + 1][x] === this.board[currentY][x]) {
          this.board[currentY + 1][x] = this.board[currentY][x] * 2;
          this.board[currentY][x] = 0;
        }
      }

    }
  }
      this.AddloopclearRandomAdd();
      this.Victory();
      this.Gameover();
    this.getStatus();
    this.getScore();
  }


  getScore() {
    let currenttable = 0;
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        currenttable += this.board[y][x];
      }
    }
    this.score = currenttable;

    if (this.score > this.highscore) {
      this.highscore = this.score;
    }
    return this.score;
  }

  getState() {
    return this.board;
  }

  getStatus() {
    console.log(this.status);
    return this.status;
  }

  start() {
    if (this.status === 'stop') {
      return 'restart the game';
    } else {
      this.status = 'playing';
      this.AddloopclearRandomAdd();
      this.AddloopclearRandomAdd();
      this.getScore();
    }
  }

  restart() {
    this.status = 'playing';
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        this.board[y][x] = 0;
      }
    }
    this.AddloopclearRandomAdd();
    this.AddloopclearRandomAdd();
    this.getScore();
  }

  AddloopclearRandomAdd() {
    const emptyCells = [];
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (this.board[y][x] === 0) {
          emptyCells.push({ y, x });
        }
      }
    }

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const targetCell = emptyCells[randomIndex];
      const y = targetCell.y;
      const x = targetCell.x;
      this.board[y][x] = Math.random() <= 0.1 ? 4 : 2;
    }
  }

  Victory() {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const current = this.board[y][x];
        if (current >= 2048) {
          this.status = 'victory';
          console.log('victory');
        }
      }
    }
  }

  Gameover() {
    let zeros = 0;
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const current = this.board[y][x];

        if (current === 0) {
          zeros += 1;
        }
        if (x < 3 && current === this.board[y][x + 1]) {
          return;
        }
        if (y < 3 && current === this.board[y + 1][x]) {
          return;
        }
      }
    }

    if (zeros > 0) {
      return;
    } else {
      console.log('Lose');
      this.status = 'stop';
      return true;
    }
  }
}

export default Game;

//module.exports = Game;
