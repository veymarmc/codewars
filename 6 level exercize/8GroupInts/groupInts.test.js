const groupInts = require('./groupInts');
const exampleTestParams = [
	[[], 0, []],
	[[1], 1, [[1]]],
	[[1, 2, 3], 0, [[1, 2, 3]]],
	[[1, 2, 3], 3, [[1, 2], [3]]],
	[
		[-1, -1, -1, 10, 10, 10, -1, -1, -1, 10, -1, 10],
		10,
		[[-1, -1, -1], [10, 10, 10], [-1, -1, -1], [10], [-1], [10]]
	],
	[[1, 1, 1, 0, 0, 6, 10, 5, 10], 6, [[1, 1, 1, 0, 0], [6, 10], [5], [10]]]
];

describe('Group Integers', () => {
  test.each(exampleTestParams)('Text example: %s with key: %i', (list, k, expected) => {
    expect(groupInts(list, k)).toEqual(expected);
  });
});
