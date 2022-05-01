const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  let arrDigit = String(n).split('');

  let arrDigitNumber = [];
  for (let m = 0; m < arrDigit.length; m += 1) {
    arrDigitNumber.push(Number(arrDigit[m]));
  };

  sum = arrDigitNumber.reduce(function(a, b) { return a + b; });

  if (sum > 9) {
    n = sum;
    return getSumOfDigits(n);
  } else {
    return sum;
  };

}

module.exports = {
  getSumOfDigits
};
