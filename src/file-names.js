const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (names.length == 0) {return []};
  
  for (let i = 0; i < names.length; i += 1) {
    let currentName = names[i];
    let arrCut = names.slice(i+1);
    names.splice(i+1);
    
    if (arrCut.includes(currentName)) {
      let k = 0;
      for (let n = 0; n <arrCut.length; n += 1) {
        if (arrCut[n] == currentName) {
          k += 1;
        };
      };
      for (let m = 1; m <= k; m += 1) {
        let index = arrCut.indexOf(currentName);
        arrCut[index] += `(${m})`;
      };
    };

    for (let v = 0; v <arrCut.length; v += 1) {
      names.push(arrCut[v]);
    };
  };
  
  return names;
  
}

module.exports = {
  renameFiles
};
