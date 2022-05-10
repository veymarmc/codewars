/**
 * https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
 */

/**
 * 
 * @param {Array} arr 
 */
const moveZeros = arr => {
  let zeroArray = [];
  let zeroIndex = arr.indexOf(0);

  while (zeroIndex >= 0) {
    zeroArray = zeroArray.concat(arr.splice(zeroIndex, 1));
    zeroIndex = arr.indexOf(0);
  }

  return arr.concat(zeroArray)
}

/**
 * 
 * @param {Array} arr 
 */
const moveZeros2 = arr => 
  arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));

console.log(moveZeros2([1,2,0,1,0,1,0,3,0,1]));
