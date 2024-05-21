const findRepeatedSequenceLength = require('./findRepeatedSequenceLength');

describe('Find the repeated sequence length:', () => {
  // test('Throw an error when the parameter is negative.', () => {
  //   expect(() => findRepeatedSequenceLength(-1)).toThrow(new Error('The parameter should be a positive integer'));
  // });

  test('It Should work for basic tests.', () => {
    expect(findRepeatedSequenceLength(1)).toBe(1);
    expect(findRepeatedSequenceLength(85)).toBe(8);
    expect(findRepeatedSequenceLength(810)).toBe(8);
    expect(findRepeatedSequenceLength(812)).toBe(8);
    expect(findRepeatedSequenceLength(818)).toBe(1);
    expect(findRepeatedSequenceLength(833)).toBe(1);
  });
});
