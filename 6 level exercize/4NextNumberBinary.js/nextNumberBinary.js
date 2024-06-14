/**
 * https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/javascript
 * @param {number} n integer between 1 and 1<<30
 * @returns the next higher number with same 1 digists.
 */
function getNextNumberSame1Digits2(n) {
	const binary = n.toString(2);
	const patternIndex = binary.lastIndexOf('01');

	return patternIndex !== -1
    ? parseInt(binary.replace(/(.*)(01)(1*)(0*)$/, '$110$4$3'), 2)
    : parseInt(binary.replace(/(1)(1*)(0*)/, '$1$30$2'), 2);
}

function getNextNumberSame1Digits(n) {
  let s = n.toString(2).replace(/0?1(1*)(0*)$/, "10$2$1"); // best pattern found!
  return parseInt(s,2);
}

module.exports = getNextNumberSame1Digits;
