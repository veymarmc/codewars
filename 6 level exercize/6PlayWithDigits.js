/**
 * https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
 */

/**
 * 
 * @param {Integer} n , the number that will be decomposed and digit-total-sum
 * @param {Integer} power , the power for beginning when adding the digits.
 * @returns 
 */
const digPow = (n, power) => {
  let sumDigits = `${n}`
    .split('')
    .reduce((total, digit, index) => total + Math.pow(digit, power + index), 0);

  return sumDigits % n === 0
    ? sumDigits / n
    : -1;
};

console.log(digPow(46288, 3));
