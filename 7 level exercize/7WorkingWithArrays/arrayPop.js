/**
 * https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e/train/javascript
 * @param {Array} arr 
 * @returns the array without the last element
 */
function withoutLast(arr) {
  // Fix it
  arr.pop(); // removes the last element
  return arr;
}

module.exports = withoutLast;
