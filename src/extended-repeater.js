const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  
  if (typeof str != 'string') {str = String(str)};
  
  let resultAddition = [];

  if (typeof options.addition == 'undefined') {
    options.addition = '';
  };
  if ((typeof options.addition) != 'string') {options.addition = `${options.addition}`};
  
  let addition = options.addition;
  
  if (options.additionRepeatTimes > 1) {
    for (let h = 1; h < options.additionRepeatTimes; h += 1 ) {
    resultAddition.push(options.addition);
    resultAddition.push(options.additionSeparator);
    }
    resultAddition.push(options.addition);
    addition = resultAddition.reduce(function(a, b) {return a + b});
    
  } 

  let result = [str];

  if ((options.repeatTimes == undefined) || (options.repeatTimes == 1)) {
    result.push(addition);
    return result.reduce(function(a, b) {return a + b});
  }
   
  if (options.repeatTimes > 1) {
    result.push(addition);
    result.push(options.separator);
    for (let j = 2; j < options.repeatTimes; j += 1 ) {
    result.push(str);
    result.push(addition);
    result.push(options.separator);
    }
    result.push(str);
    result.push(addition);
    return result.reduce(function(a, b) {return a + b});
  } else {
    return result[0];
  }

}

module.exports = {
  repeater
};
