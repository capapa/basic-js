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
  
  if (!arguments.length) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertySymbols(date).length > 0) throw new Error("Invalid date!");
  
  const m = date.getMonth();
  switch (m) {
    case 11:
    case 0:
    case 1:
      return 'winter';
      break;
    case 2:
    case 3:
    case 4:
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    default:
      return 'fall';
  }
}

module.exports = {
  getSeason
};
