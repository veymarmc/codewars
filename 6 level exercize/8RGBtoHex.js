/**
 * https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
 */

/**
 * 
 * @param {number} color , integer between 0 to 255;
 */
const normalizeColorRange = color => color > 255
  ? 255
  : color < 0
    ? 0
    : color;

const getHexColor = validIntColor =>
  normalizeColorRange(validIntColor).toString(16).padStart(2,"0");

/**
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 */
const rgb = (r, g, b) => 
  (getHexColor(r) + getHexColor(g) + getHexColor(b)).toUpperCase();

/**
 * Consider a better solution if we are not going to use the other function
 * this seems to be more clean and concise.
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns 
 */
const rgb2 = (r, g, b) =>
  [r, g, b].map(color => Math.min(255, Math.max(0, color)).toString(16).padStart(2,"0"))
    .join("")
    .toUpperCase();

console.log(rgb2(255, -1, 300));
