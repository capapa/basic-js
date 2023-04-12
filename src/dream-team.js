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
  const arr = [];
  if (!Array.isArray(members)) return false;
  for (i of members) {
    if (typeof i === 'string') {
      const c = i.trim()[0].toUpperCase();
      if (c) arr.push(c);
    }
  }
  if (arr.length > 0) return arr.sort().join('');
  return false;
}

module.exports = {
  createDreamTeam
};
