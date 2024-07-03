/**
 * https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript
 * @param {Array} values array of numbers to assing to beggars
 * @param {number} n number of beggars to distribute
 * @returns an array that shows how much each beggar have after distribution
 */
function distributeTobeggars(values, n){
  if (n === 0) return [];

  const beggars = Array(n).fill(0);
  [...values].forEach((share, i) => beggars[i % n] += share);

  return beggars;
}

module.exports = distributeTobeggars;
