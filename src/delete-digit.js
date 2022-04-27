const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arrN = String(n).split('');
  console.log(arrN)
  let arrResult = [];

  for (let i = 0; i < arrN.length; i += 1) {
    let number = arrN.splice(i, 1);
    arrResult[i] = Number(arrN.reduce(function(a,b) { return a + b}, 0));
    arrN.splice(i,0,number[0]);
  }

  return Math.max.apply(null, arrResult);

}

module.exports = {
  deleteDigit
};
