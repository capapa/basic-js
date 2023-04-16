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
  let res = '';
  let prev = str[0];
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prev && i < str.length) {
      count++;

    } else {
      res += (count > 1 ? count.toString() : '') + prev;
      prev = str[i];
      count = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
