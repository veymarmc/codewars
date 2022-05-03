/**
 * https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript
 */

/**
 * This function will take a string and will replace it with the regular expression divided into three
 * groups, and will receive that groups into new formatted string.
 * @param {Int32Array} n an array of 10 numbers of only one digit
 * @returns a formatted string witch represents a phone number with the '(xxx) xxx-xxxx' pattern.
 */
const createPhoneNumber = n => n.join("").replace(/(...)(...)(.*)/,"($1) $2-$3");

/**
 * This function will reduce the array with a pattern given in order to replace all the digits
 * in the current string pattern.
 * @param {*} digitsArray the digits to convert to a formatted phone number.
 * @returns 
 */
const createPhoneNumber2 = digitsArray => digitsArray.reduce((result, digit) => result.replace("x", digit), "(xxx) xxx-xxxx");
