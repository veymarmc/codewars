/**
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
 */

/**
 * This solution works however codewards doesn't recognize the replaceAll function... which sucks.
 * @param {string} str 
 */
const pigIt = str =>
  str.replaceAll(/(\w+)(\W*)(\s?)/g, (_, word, simbol, space) =>
    word.substring(1) + word[0] + "ay" +simbol + space);

/**
 * This solution another derived function more compact
 * however this uses also the approach taken of the last compact solution and also resolves the problem of this.
 * @param {string} str 
 */
const pigIt11 = str =>
  str.replace(/(\w)(\w*)(\W*)(\s?)/g, '$2$1ay$3$4');

/**
 * This solution works but apparently the replace function can work and no map is needed.
 * @param {string} str 
 */
const pigIt2 = str =>
  str
    .split(' ')
    .map(word => word.replace(/(\w+)(\W*)/g, (_, p1, p2) => p1.substring(1) + p1[0] + 'ay' + p2))
    .join(' ');

/**
 * This is the best way since it's more concise and clean.
 * however this won't work with punctuation signs in the middle of the string.
 * @param {string} str 
 * @returns 
 */
const pigIt3 = str =>
  str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3")

console.log(pigIt11("Hello, world !"));
