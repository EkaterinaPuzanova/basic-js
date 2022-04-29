const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (members == null) {return false};

  let resultMembers = [];
  
  for (let i = 0; i < members.length; i += 1) {
    if ((typeof members[i]) == 'string') {
      resultMembers.push(members[i].split(' ').join(''))
    }
  }

  if (resultMembers.length == 0) {return false};

  let arrFirstLetter = [];
  for (let i = 0; i < resultMembers.length; i += 1) {
    arrFirstLetter.push(resultMembers[i][0].toUpperCase())
  }

  arrFirstLetter.sort();

  return arrFirstLetter.reduce(function(a, b) {return a + b});

}

module.exports = {
  createDreamTeam
};
