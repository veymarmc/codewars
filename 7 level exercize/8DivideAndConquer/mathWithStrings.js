/**
 * https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
 * @param {[number, string]} arr
 * @returns the sum of all numbers minus the sum of all string integers
 */
function extractValueFromArray(arr) {
	return arr.reduce(
		(result, value) => (typeof value === "number" ? result + value : result - +value),
		0
	);
}

module.exports = extractValueFromArray;

