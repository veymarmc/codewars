/**
 * https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
 * 
 */

const findOutlier = integers => isAnEvenArray(integers)
  ? integers.find(n => !isEven(n))
  : integers.find(n => isEven(n)); //integers.find(isEven) -- this option also would works and seems more elegant

const isAnEvenArray = intArray => 
  (isEven(intArray[0]) + isEven(intArray[1]) + isEven(intArray[2])) > 1;

// Think that this is a better option since such a little array, filter works than the addition and the casting.
const isAnEvenArray2 = intArray = [].filter(isEven).length >=2;

const isEven = n => n % 2 == 0;

console.log(findOutlier([2,150,4,6,8,3]));
