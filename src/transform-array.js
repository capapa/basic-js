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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let res = [];
  let i = 0;
  while (i < arr.length) {
    let item = arr[i];

    if(item === '--discard-next') {
      i++;
      if (arr[i + 1] === '--double-prev' || arr[i + 1] === '--discard-prev') i++;

    } else if(item === '--discard-prev') {
      res.pop();

    } else if(item === '--double-prev') {
      item = arr[i - 1];
      if (item) res.push(arr[i - 1]);
    
    } else if(item === '--double-next') {
      item = arr[i + 1];
      if (item) res.push(item, item);
      i++;
      
    } else res.push(item);

    i++;
  }
  
  return res;
}

module.exports = {
  transform
};
