/**
 *  https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript
 * @param {number} n the size of the spiral greater and equal than 5
 * @returns
 */
function spiralize(n) {
	// Filling the array of arrays with 0;
	const spiral = Array.from({ length: n }).map(_ => Array(n).fill(0));
	// possitions to traverse through the matrix. The first represents the horizontal, the second the vertical
	const position = [0, 0];
	// state of the movement, the first the orientation reference, the second the orientation values vary from 0, 1 (horizontal or vertical); the third vary from 1, -1 (direction)
	let [orientation, direction, changeDirectionCounter] = [0, 1, 2];
	let strikesLimit = 0;

	debugger;
	while (strikesLimit !== 2) {
		debugger;
		// const nextPosition = spiral[!orientation ? position[1] : position[1] + direction][!orientation ? position[0] + direction : position[0]];
		const isInMatrixLimits = position[orientation] >= 0 && position[orientation] >= (n - 1);

		debugger;
		if (
			isOutMatrixLimits || 
			spiral[!orientation ? position[1] : position[1] + direction][!orientation ? position[0] + direction : position[0]] === 1
			) {
			position[orientation] = position[orientation] + direction * -1;

			if (--changeDirectionCounter == 0) {
				direction *= -1;
				changeDirectionCounter = 2;
			}

			orientation = 1 - orientation;
			position[orientation] += direction;
			strikesLimit++;
			debugger;
		} else {
			strikesLimit = 0;
			spiral[position[1]][position[0]] = 1;
			position[orientation] += direction;
			debugger;
		}
	}

	debugger;
	return spiral;
}

module.exports = spiralize;
