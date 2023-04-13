const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, i = 1) {
    let res = i;
    for (let item of arr) {
      if (Array.isArray(item)) res = Math.max(res, this.calculateDepth(item, i + 1));
    }
    return res;
  }
}

module.exports = {
  DepthCalculator
};
