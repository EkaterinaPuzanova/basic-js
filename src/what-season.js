const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) return 'Unable to determine the time of year!';
  
  if ((Object.getOwnPropertySymbols(date).length > 0) || !date.getMonth) {
    throw new Error('Invalid date!');
  };

  let month;
  month = date.getMonth();
     
  let objSeason = {
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
    'winter': [0, 1, 11]
  };

  let arrSeason = ['spring', 'summer', 'autumn', 'winter'];

  for (let i = 0; i < arrSeason.length; i += 1) {
    if (objSeason[arrSeason[i]].includes(month)) {
      return arrSeason[i];
    }
  }
}

module.exports = {
  getSeason
};
