/**
 * https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
 * 
 * the following exercise can be solved in a very shor functions however my solution
 * was to long in both requirements.
 * What I deduced is that I have to found the pathern for solving these kind of exercises
 * since if not the complexity of the exercise can grow as shown below.
 */

const RomanNumerals = {
  romansNumbers: [
    ['M', 'MM', 'MMM'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ],

  getNumberFromRoman(c) {
    return this.romansNumbers
      .map(x => x)
      .reverse()
      .reduce((n, rs, i) => 
        n + Math.pow(10, i) * rs.reduce((res, r, j) => r === c ? res + j + 1 : res, 0), 0);
  },

  toRoman(number) {
    return number
      .toString()
      .padStart(4, '0')
      .split('')
      .reduce((roman, d, i) => d === '0'
          ? roman
          : roman + this.romansNumbers[i][+d - 1], '');
  },

  fromRoman(roman) {
    let res = 0;
    let endSlice = 3;

    while (roman !== "") {
      let romanString = roman.slice(0, endSlice);
      let romanNumber = this.getNumberFromRoman(romanString);

      if (romanNumber) {
        res += romanNumber;
        roman = roman.slice(romanString.length);
        endSlice = 3;
      }
      else
        endSlice--;
    }

    return res;
  }
};

console.log(RomanNumerals.toRoman(4));
// console.log(RomanNumerals.fromRoman('MXVII'));
