/**
 * https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
 */

const findUniq = arr =>
  arr[0] !== arr[1] && arr[0] !== arr[2]
    ? arr[0] 
    : arr.find(n => n !== arr[0]);

console.log(findUniq([1,1,3,1,1]));
