/**
 * https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
 */

/**
 * 
 * @param {number} n 
 * @returns 
 */
const zeros = n => {
  const kMax = Math.floor(Math.log(n) / Math.log(5));
  let trailingZeros = 0;

  for (let i = 1; i <= kMax; i++) {
    trailingZeros += Math.floor((n)/(Math.pow(5, i)));
  }

  return trailingZeros;
}

console.log(zeros(200952159))

