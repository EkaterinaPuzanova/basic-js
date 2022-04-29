const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (domains.length == 0) {return {}};

  let resultObj = {};
  let resultKey = [];
  
  let arrDomains = [];
  for (let i = 0; i < domains.length; i += 1) {
    arrDomains.push(domains[i].split('.').reverse());
  }
  
  for (let t = 0; t < arrDomains.length; t += 1) {
    let sum = '';
    for (let p = 0; p <arrDomains[t].length; p += 1) {
      sum += '.' + arrDomains[t][p];
    }
    domains[t] = sum;
  }
  
  let arrMaxLength = arrDomains[0];
  for (let j = 1; j < arrDomains.length; j += 1) {
    if (arrDomains[j].length > arrMaxLength.length) {
      arrMaxLength = arrDomains[j];
    }
  }  
 
  let x = `.${arrMaxLength[0]}`; // first key
  resultObj[x] = 0; // make the key
  resultKey.push(x);
  for (let q = 1; q < arrMaxLength.length; q += 1) {
    x += `.${arrMaxLength[q]}`;
    resultObj[x] = 0; // make the key
    resultKey.push(x);
  }
  
  let dublicateDomains = [];
  for (let s = 0; s < domains.length; s +=1) {
    dublicateDomains[s] = domains[s];
  }
  
  for (let m = 0; m < domains.length; m += 1) {
    if (resultKey.includes(domains[m])) {
      domains.splice(m, 1);
    }
  }
    
  for (let s = 0; s < domains.length; s += 1) {
    resultObj[domains[s]] = 0;
    resultKey.push(domains[s]);
  }
  
  for (let a = 0; a < resultKey.length; a += 1) {
    let k = 0;
   
    for (let d = 0; d < dublicateDomains.length; d += 1) {
      if (dublicateDomains[d].includes(resultKey[a])) {
        k += 1;
      }
    }
    resultObj[resultKey[a]] = k;
  }

  return resultObj;
  
}

module.exports = {
  getDNSStats
};
