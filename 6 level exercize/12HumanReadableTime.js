/**
 * https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
 */

/**
 *
 * @param {number} seconds
 */
const humanRedable = (seconds) => {
  let hh = Math.floor(seconds / 3600) + "";
  let mm = Math.floor((seconds % 3600) / 60) + "";
  let ss = ((seconds % 3600) % 60) + "";

  return `${hh.padStart(2, "0")}:${mm.padStart(2, "0")}:${ss.padStart(2, "0")}`;
};

console.log(humanRedable(359999));
