/**
 * https://www.codewars.com/kata/583fe48ca20cfc3a230009a1/train/javascript
 * @param {Array} xs list of integers
 * @param {number} x interger key to get nested lists
 * @returns An array of ordered arrays according to the key.
 */
function groupInts(xs, x) {
	let yetGreat = false;

	return xs.reduce((result, current) => {
		if (current < x) {
			if (yetGreat) {
				result.push([current]);
				yetGreat = !yetGreat;
			} else {
				result = result.length ? result : [[]];
				result[result.length - 1].push(current);
			}
		} else {
			if (!yetGreat) {
				result.push([current]);
				yetGreat = !yetGreat;
			} else {
				result = result.length ? result : [[]];
				result[result.length - 1].push(current);
			}
		}

		return result;
	}, []);
}

module.exports = groupInts;
