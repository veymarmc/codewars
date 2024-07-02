/**
 * https://www.codewars.com/kata/5834a44e44ff289b5a000075/train/javascript
 * @param {number} n positive integer, size of the house
 * @returns the drawn mansion.
 */
function buildCrib(n) {
	let roof = '';
	let room = '';

	for (let i = 0, j = n; i <= n && j >= 0; i++, j--) {
		const roofPadding = ' '.repeat(n - i);
		const roofInside = (j === 0 ? '_' : ' ').repeat((n - j) * 2);
		roof += roofPadding + '/' + roofInside + '\\' + roofPadding + '\n';

		if (j > 0)
      room += '|' + (j === 1 ? '_' : ' ').repeat(n * 2) + '|' + ((j === 1) ? '' : '\n');
	}

	return roof + room;
}

module.exports = buildCrib;

