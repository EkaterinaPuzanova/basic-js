const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arrIndexOne = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] == -1) {
      arrIndexOne.push(i); 
    };
  };
  
  let deleteOne = [];
  for (let i = 0; i < arrIndexOne.length; i += 1) {
    deleteOne.push(arrIndexOne[i] - i);
  };

  for (let i = 0; i < deleteOne.length; i += 1) {
    arr.splice(deleteOne[i], 1);
  };

  arr.sort(function(a, b) { return a - b; });

  for (let i = 0; i < arrIndexOne.length; i += 1) {
    arr.splice(arrIndexOne[i], 0, -1);
  };
  
  return arr;
  
}

module.exports = {
  sortByHeight
};
