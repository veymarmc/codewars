const getNthLexicoPermutation = require('./lexicoPermutations');

describe('Get Nth lexico permutation word', () => {
  test('Sample tests', () => {
    expect(getNthLexicoPermutation(1,1)).toBe('0');
    expect(getNthLexicoPermutation(2,2)).toBe('10');
    expect(getNthLexicoPermutation(12,5)).toBe('02431');
    expect(getNthLexicoPermutation(1000,7)).toBe('1325460');
    expect(getNthLexicoPermutation(1000,8)).toBe('02436571');
  });
})
