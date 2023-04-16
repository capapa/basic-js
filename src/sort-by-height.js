const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [];
  const temp = arr.filter((item) => item !== -1);
  
  temp.sort((a, b) => a - b);

  let i = 0;
  for (let item of arr) {
    if (item === -1) res.push(-1);
    else {
      res.push(temp[i]);
      i++;
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
