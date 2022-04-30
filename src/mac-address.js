const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  let must1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let must2 = ['A', 'B', 'C', 'D', 'E', 'F'];
  let result = 0;
  let arrN = n.split('-');
  
  if (arrN.length == 6) {
    for (let i = 0; i < arrN.length; i += 1) {
      if (arrN[i].length == 2) {
        if ((must1.includes(arrN[i][0]) || must2.includes(arrN[i][0])) && (must1.includes(arrN[i][1]) || must2.includes(arrN[i][1]))) {
          result += 1;
        };
      };
    };
  };

  if (result == 6) {
    return true;
  } else {
    return false;
  };
  
}
module.exports = {
  isMAC48Address
};
