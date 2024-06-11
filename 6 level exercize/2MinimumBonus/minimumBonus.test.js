const getMinimumBonus = require('./minimunBonus');

describe('Get minimum bonus', () => {
	test('Basic tests', () => {
		expect(getMinimumBonus([20, 30, 10, 30, 40, 10, 20, 30, 40, 30])).toBe(20);

		expect(getMinimumBonus([10, 20, 30])).toBe(6);

		expect(getMinimumBonus([30, 20, 10])).toBe(6);

		expect(getMinimumBonus([30, 20, 20, 10])).toBe(6);

		expect(getMinimumBonus([10, 20, 20, 30])).toBe(6);

    expect(getMinimumBonus([20,20,20,20])).toBe(4);

    expect(getMinimumBonus([20,30,40,30,20,10])).toBe(13);
	});
});

