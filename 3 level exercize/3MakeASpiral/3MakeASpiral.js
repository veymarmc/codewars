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
	// state of the movement,
	// the first the orientation orientation values vary from 0, 1 (horizontal or vertical),
	// the second vary from 1, -1 (direction)
	// the thrid the frequency of change of the direction which is 2, first 2 positives ver/horiz and then 2 negatives ver/horiz to complete a cycle.
	let [orientation, direction, changeDirectionCounter] = [0, 1, 2];
	let strikesLimit = 0;

	while (strikesLimit !== 2) {		
		const isInMatrixLimits = position[orientation] >= 0 && position[orientation] < n;
		const areTheNextPositionsOne = () => {
			const nextPosition = spiral[!orientation ? position[1] : position[1] + direction]?.[!orientation ? position[0] + direction : position[0]];
			const newDirection = changeDirectionCounter == 1 ? direction * (-1) : direction;
			const nextOppositePosition = spiral[orientation ? position[1] : position[1] + newDirection]?.[orientation ? position[0] + newDirection : position[0]];
			return nextPosition || nextOppositePosition;
		}

		if (!isInMatrixLimits || areTheNextPositionsOne()) {
			// giving one step back			
			position[orientation] = position[orientation] + direction * -1;

			// verify to change direction
			if (--changeDirectionCounter == 0) {
				direction *= -1;
				changeDirectionCounter = 2;
			}

			// change orientation
			orientation = 1 - orientation;
			// positioning the next value
			position[orientation] += direction;
			// a limit have been reached.
			strikesLimit++;
		} else {
			strikesLimit = 0;
			spiral[position[1]][position[0]] = 1;
			position[orientation] += direction;
		}
	}

	return spiral;
}

module.exports = spiralize;
