/**
 * https://www.codewars.com/kata/583fe48ca20cfc3a230009a1/train/javascript
 * @param {Array} xs list of integers
 * @param {number} x interger key to get nested lists
 * @returns An array of ordered arrays according to the key.
 */
function groupInts2(xs, x) {
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

/**
 * best solution taken of the offered answers.
 * @param {Array} xs 
 * @param {number} x 
 * @returns splitted array
 */
function groupInts (xs, x) {
	let limit;

	return xs.reduce((res, num) => {
		if (limit === num < x)
			res.at(-1).push(num);
		else {
			res.push([num]);
			limit = num < x;
		}

		return res;
	}, []);
}

module.exports = groupInts;
