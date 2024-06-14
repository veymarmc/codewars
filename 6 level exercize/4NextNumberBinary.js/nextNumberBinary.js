/**
 * https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/javascript
 * @param {number} n integer between 1 and 1<<30
 * @returns the next higher number with same 1 digists.
 */
function getNextNumberSame1Digits(n) {
	const binary = n.toString(2);
	const patternIndex = binary.lastIndexOf('01');

	if (patternIndex !== -1) {
		const nextStringNumber =
			binary.slice(0, patternIndex) + '10' + binary.slice(patternIndex + 2, binary.length);
		return parseInt(nextStringNumber, 2);
	}

	return parseInt(binary.replace(/(1)(1*)(0*)/, '$1$30$2'), 2);
}

module.exports = getNextNumberSame1Digits;
