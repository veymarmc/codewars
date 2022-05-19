/**
 * https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
 */

const permutations = s => s.length > 1
  ? [...getStringPermutations(s, 1, new Set())]
  : [s];

/**
 * 
 * @param {Array} array 
 * @param {number} position 
 * @param {number} shift 
 */
const shiftPosition = (array, position, shift) => {
  array.splice(position + shift + 1, 0, ...array.slice(position, position + shift));
  array.splice(position, shift);
  return array.join('');
}

/**
 * 
 * @param {string} s 
 * @param {number} shift 
 * @param {Set} res 
 */
const getStringPermutations = (s, shift, res) => {
  if (s.length > shift) {
    for(let i = 0; i < s.length; i++) {
      for(let j = 0; j < s.length - shift; j++) {
        getStringPermutations(s, shift + 1, res)
        s = shiftPosition(s.split(''), j, shift);
        res.add(s);
      }
    }
  }

  return res;
};

console.log(permutations('a'));
