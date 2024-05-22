/**
 * https://www.codewars.com/kata/664b9dd610985cc3b6784111/train/javascript
 * @param {number} x 
 * @returns big integer that multiplied by x the result is formed by only 9 for all its digits or -1 if there's no such a number.
 */
function searchAllNinesFactor(x) {
  if(x % 2 === 0 || x % 5 === 0) return -1;

  return 0n; // x is a bigint
}

module.exports = searchAllNinesFactor;
