const keepOnlyDuplicates = require('./onlyDuplicates');

describe('Basic tests', function () {
  test('Sample tests', function () {
    expect(keepOnlyDuplicates('abccdefee')).toBe('cceee');
    expect(keepOnlyDuplicates('hello')).toBe('ll');
    expect(keepOnlyDuplicates('colloquial')).toBe('ollol');
    expect(keepOnlyDuplicates('foundersandcoders')).toBe('ondersndoders');
  });
});
