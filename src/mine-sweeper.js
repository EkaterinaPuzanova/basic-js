const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrBomb = [];
  
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1){
      if (matrix[i][j] == true) {
        arrBomb.push([i, j]);
      }
    }
  }

  if (arrBomb.length == 0) {
    for (let i = 0; i < matrix.length; i += 1) {
      for (let j = 0; j < matrix[i].length; j += 1){
        matrix[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < arrBomb.length; i += 1) {
    let x = arrBomb[i][0];
    let y = arrBomb[i][1];
    let arrXY = [x-1, y-1, x-1, y, x-1, y+1, x, y-1,  x, y+1, x+1, y-1, x+1, y, x+1, y+1];
    
    for (let c = 0; c < arrXY.length - 1; c += 2) {
      if ((arrXY[c] >= 0) && (arrXY[c+1] >= 0)) {
        if (typeof matrix[arrXY[c]][arrXY[c+1]] === 'number')  {
          matrix[arrXY[c]][arrXY[c+1]] += 1;
        } else {
          matrix[arrXY[c]][arrXY[c+1]] = 1;
        }
        
      }
    }
    
  }
  return matrix;
}

module.exports = {
  minesweeper
};
