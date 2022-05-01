const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i]);
  }
  
  for (let i = 0; i < result.length; i += 1) {

    if (result[i] === `--discard-next`) {
      if (result[i+1]) {
        if ((result[i+2] === `--discard-prev`) || (result[i+2] === `--double-prev`)) {
          result.splice(i+2, 1);
        }
        result.splice(i, 2);
      } else {
        result.splice(i, 1);
      }
    };
    if  (result[i] === `--discard-prev`) {
      if ((result[i-1])) {
        result.splice(i-1, 2);
      } else {
        result.splice(i, 1);
      }
    };
    if (result[i] === `--double-next`) {
      if (result[i+1]) {
        let x = result[i+1];
        result.splice(i, 1, x);
      } else {
        result.splice(i, 1);
      }
    };
    if (result[i] === `--double-prev`) {
      if ((result[i-1])) {
        let y = result[i-1];
        result.splice(i, 1, y);
      } else {
        result.splice(i, 1);
      }
      
    };     
  } 
  return result;

}

module.exports = {
  transform
};
