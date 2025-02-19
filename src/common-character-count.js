const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  
  let res = 0;
  const arr = s2.split('');

  for (let c of s1) {
    for (let i = 0; i < arr.length; i++) {
      if (c === arr[i]) {
        arr[i] = undefined;
        res++;
        break;
      }
    }
  }

  return res;
}

module.exports = {
  getCommonCharacterCount
};
