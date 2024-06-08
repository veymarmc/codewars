const findOpenLockers = require("./slammingLockers");
const basicTestCases = [
	[1, [1]],
	[2, [1]],
	[3, [1]],
	[5, [1, 4]],
	[8, [1, 4]]
];

describe("Slamming lockers", () => {
	test.each(basicTestCases)("Basic case: n = %i", (n, expected) => {
		expect(findOpenLockers(n)).toEqual(expected);
	});
});
