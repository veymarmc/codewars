/**
 * https://www.codewars.com/kata/5a33ec23ee1aaebecf000130/train/javascript
 * @param {String} string chaing where you can found feelings
 * @param {Array} array array of feelings(written words)
 * @returns the number the feelings found in "1 feeling" format.
 */
function countFeelings(string, array) {
	const regex = new RegExp(`[${string}]`, 'g');
	const numberOfFeelings = array.reduce((r, feeling) => (feeling.replace(regex, '') ? r : ++r), 0);

	return numberOfFeelings + ' feeling' + (numberOfFeelings === 1 ? '.' : 's.');
}

module.exports = countFeelings;

