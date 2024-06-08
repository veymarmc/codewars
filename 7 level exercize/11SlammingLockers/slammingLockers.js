/**
 * https://www.codewars.com/kata/55a5085c1a3d379fbb000062/train/javascript
 * @param {n} lockers number of lockers
 * @returns an array of open lockers after slamming.
 */
function findOpenLockers1(lockers) {
	// brute force method
	const lockersState = Array(lockers + 1).fill(false);

	for (let i = 1; i < lockersState.length; i++) {
		for (let j = i; j < lockersState.length; j = j + i) {
			lockersState[j] = !lockersState[j];
		}
	}

	return lockersState.reduce((res, locked, i) => (locked ? [...res, i] : res), []);
}

function findOpenLockers(lockers) {
	// Searching and analyzing the pattherns.
	const answer = [];

	for (let i = 1; i ** 2 <= lockers; i++) {
		answer.push(i ** 2);
	}

	return answer;
}

module.exports = findOpenLockers;

