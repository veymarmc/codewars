/**
 * https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/javascript
 * @param {[[Array]} tablet possible sator square
 * @returns if the input is a sator square
 */
function isSatorSquare(tablet) {
	let copy = tablet;

	return ![1, 1, 1].some(() => {
		copy = rotateMatrix(copy);
		return !areAllTheWordsInBoth(tablet, copy);
	});
}

function rotateMatrix(matrix) {
	return matrix[0].map((_, i) => matrix.map(r => r[i])).reverse();
}

function areAllTheWordsInBoth(matrix, otherMatrix) {
	return !matrix.some(arr1 => !otherMatrix.some(arr2 => arr1.join("") === arr2.join("")));
}

module.exports = isSatorSquare;
