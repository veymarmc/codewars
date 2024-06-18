/**
 * https://www.codewars.com/kata/6656a4687f3e4eb5fb520817/train/javascript
 * @param {number} n integer to check if even or odd
 * @returns return "even" or "odd"
 */
function checkEvenOrOdd(n) {
  return n % 2 === 0 ? 'Even' : 'Odd';
}

const handler = {
  get(_, prop) {
    return checkEvenOrOdd(+prop);
  }
}

const isEvenOrOdd = new Proxy(checkEvenOrOdd, handler);

module.exports = isEvenOrOdd;
