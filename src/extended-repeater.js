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
  
  const times = options.repeatTimes || 1;
  const sep = options.separator || '+';

  const add = options.addition !== undefined ? String(options.addition) : '';
  const addTimes = options.additionRepeatTimes || 1;
  const addSep = options.additionSeparator || '|';
  
  str = String(str);

  const resAdd = Array(addTimes).fill(add).join(addSep);
  const res = Array(times).fill(str + resAdd).join(sep);
  
  return res;
}

module.exports = {
  repeater
};
