const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str.length == 0) {return ''};
  
  let result = [];
  
  let arrStr = str.split('');
  
  let k = 1;
  let arrStrLast = arrStr[0];
  for (let i = 1; i < arrStr.length+1; i += 1) {
    if (arrStr[i] == arrStrLast) {
      k += 1;
      arrStrLast = arrStr[i];
    } else {
      result.push(`${k}`);
      result.push(arrStrLast);
      k = 1;
      arrStrLast = arrStr[i];
    }
  }

  if (result.includes('1')) {
    let sumOne = 0;
    for (let j = 0; j < result.length; j += 1) {
      if (result[j] == '1') {
        sumOne += 1;
      }
    } 
    for (let q = 1; q <= sumOne; q += 1) {
      let myIndex = result.indexOf('1');
      result.splice(myIndex, 1);
    }
  }
  
  return result.reduce(function(a, b) {return a + b;})
}

module.exports = {
  encodeLine
};
