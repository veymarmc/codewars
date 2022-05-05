/**
 * https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
 */

/**
 * 
 * @param {string} str 
 * @returns 
 */
const solution = (str = "") => {
  const correctedString = !str ? "" : str.length % 2 ? str  + "_" : str;
  const res = correctedString.match(/.{2}/g);
  return res ? res : [];
}

const solution2 = str => !str ? [] : `${str}_`.match(/.{2}/g);

console.log(solution2('abcd'));