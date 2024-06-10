/**
 * https://www.codewars.com/kata/58aaa3ca821a767300000017/train/javascript
 * @param {Array} matrix Set of coordinates to go
 * @param {number} k number of steps to take on account.
 * @returns all the round-trips that number of steps are equal to k
 */
function getNumberOfPathsWithGiveSteps(matrix, k) {
	let numberOfPaths = 0;

	matrix.forEach((row, i) =>
		row.forEach((point, j) => {
			let movements = 0;
			const init = `${i},${j}`;
			let end = point;

			while (movements < k) {
				const [y, x] = end.split(',');
				end = matrix[y][x];
				movements++;
			}

			if (init === end) {
				numberOfPaths++;
			}
		})
	);

	return numberOfPaths;
}

module.exports = getNumberOfPathsWithGiveSteps;

