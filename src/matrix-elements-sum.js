const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    arr[i] = [];
  }

  for (let j = 0; j < matrix[0].length; j += 1) {
    for (let i = 0; i < matrix.length; i += 1) {
      arr[j].push(matrix[i][j]);
    }  
  }
 
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] == 0) {
        arr[i].splice(j+1);
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      sum += arr[i][j];   }
  }

  return sum;
  
}

module.exports = {
  getMatrixElementsSum
};
