const getBoundingBox = require('./boundingBox');

describe('Example Tests', function () {
	test('Basic 5x5', function () {
		expect(
			getBoundingBox([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			])
		).toEqual([
			[0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0],
			[0, 0, 1, 1, 0],
			[0, 0, 1, 1, 0],
			[0, 0, 0, 0, 0]
		]);
	});

	test('Basic 10x10', function () {
		expect(
			getBoundingBox([
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			])
		).toEqual([
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
			[0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]);
	});

	test('Basic 5x10', function () {
		expect(
			getBoundingBox([
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
				[0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
			])
		).toEqual([
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
			[0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
		]);
	});
});
