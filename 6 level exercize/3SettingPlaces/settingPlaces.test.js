const setTable = require('./settingPlaces');

describe('Setting Places', () => {
	test('Test 1 ~ Artlu Only', () => {
		const theDead = ['Artlu'];
		const actual = setTable(theDead);
		const expected = [
			'_____',
			'_____',
			'_____',
			'_____',
			'_____',
			'_____',
			'Artlu',
			'_____',
			'_____',
			'_____',
			'_____',
			'_____'
		];

		expect(actual).toEqual(expected);
	});

	test('Test 2 ~ full Table', () => {
		const theDead = [
			'Yojne',
			'Xenna',
			'Verap',
			'Ebyam',
			'Teseb',
			'Ycuag',
			'Onets',
			'Skcaw',
			'Yrovi',
			'Tpets',
			'Lizuf',
			'Girnu'
		];
		const actual = setTable(theDead);
		const expected = [
			'Teseb',
			'Onets',
			'Verap',
			'Xenna',
			'Ebyam',
			'Ycuag',
			'Yojne',
			'Yrovi',
			'Lizuf',
			'Skcaw',
			'Girnu',
			'Tpets'
		];

		expect(actual).toEqual(expected);
	});

	test('Test 3 ~ All favor the same Feature', () => {
		const theDead = [
			'Sevap',
			'Syolc',
			'Sgulg',
			'Stolb',
			'Sknoh',
			'Spord',
			'Sgnaf',
			'Shcat',
			'Sknit',
			'Snirg',
			'Senin',
			'Sliob'
		];
		const actual = setTable(theDead);
		const expected = [
			'Sgnaf',
			'Sknit',
			'Senin',
			'Sliob',
			'Snirg',
			'Shcat',
			'Spord',
			'Stolb',
			'Syolc',
			'Sevap',
			'Sgulg',
			'Sknoh'
		];

		expect(actual).toEqual(expected);
	});

	test('Test 4 ~ Too Many Ghosts to Seat', () => {
		const theDead = [
			'Egdob',
			'Liame',
			'Skceg',
			'Yesba',
			'Cinid',
			'Sallo',
			'Sumac',
			'Triks',
			'Sipat',
			'Elona',
			'Sreod',
			'Deyab',
			'Dlaps',
			'Nevey',
			'Htron'
		];
		const actual = setTable(theDead);
		const expected = [
			'Cinid',
			'Sreod',
			'Elona',
			'Egdob',
			'Deyab',
			'Yesba',
			'Liame',
			'Sipat',
			'Sallo',
			'Skceg',
			'Sumac',
			'Triks'
		];

		expect(actual).toEqual(expected);
	});
});
