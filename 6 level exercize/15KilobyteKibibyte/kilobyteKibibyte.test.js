const doMemorysizeConversion = require('./kilobyteKibibyte');

describe('Do memory size conversion', () => {
	test('Sample tests', () => {
		expect(doMemorysizeConversion('1 KiB')).toBe('1.024 kB');
		expect(doMemorysizeConversion('1 GB')).toBe('0.931 GiB');
		expect(doMemorysizeConversion('160 KiB')).toBe('163.84 kB');
	});
});

