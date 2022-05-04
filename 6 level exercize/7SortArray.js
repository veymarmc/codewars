/**
 * https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
 */

/**
 * Order only the odd numbers inside the array leaving the even numbers
 * in the same position.
 * @param {[number]} arr 
 * @returns And array in which only the odd numbers will be ordered
 */
const sortArray = arr => {
  const sortedOddArray = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);

  return arr.map(n => n % 2 !== 0 ? sortedOddArray.shift() : n);  
}

console.log(sortArray([5,2,4,13,7,1]));
