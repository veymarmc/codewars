/**
 * https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
 */

// the provisional dictionary to use.
const MORSE_CODE = {};

/**
 * take on account that this function only will be tested in the current kata since
 * the morse dictionary is only available in the tests.
 * 
 * @param {string} morseCode coded message
 */
const decodeMorse = morseCode => morseCode
  .trim()
  .split("   ")
  .reduce((msg, word) => msg + word // translating the words
    .split(" ")
    .reduce((w, letter) => w + MORSE_CODE[letter], "") + " ", "") // translating the letters
  .trim(); // this is necessary since we are adding a space after every word including the last.


/**
 * for this case the map functino and the join function are better instead that the reduce function
 * with this approach this seems to be more concise and clean solution
 * @param {string} morseCode 
 * @returns 
 */
const decodeMorse2 = morseCode => morseCode
  .trim()
  .split("   ")
  .map(word => word // translating the words
    .split(" ")
    .map(letter => MORSE_CODE[letter]) // translating the letters
    .join(""))
  .join(" ");