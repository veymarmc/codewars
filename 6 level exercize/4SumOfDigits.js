/**
 * https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
*/

/**
 * This gets the digitar root of a number
 * consider that there's a simple formula to get it without calculate it step by step.
 * Therefore, if there is already a solution for your problem you should use it
 * and figure it out if you can improve it.
 * Also this could be done recursively.
 * @param {integer} n 
 * @returns 
 */
const digital_root = n => {
  while (n >= 10) {
    n = `${n}`.split('').reduce((r, d) => r + +d, 0);
  }

  return n;
}

console.log(digital_root(1234));
