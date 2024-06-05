const extractValueFromArray = require('./mathWithStrings');

describe('Extract value from array', () => {
  test('Empty array', () => {
    expect(extractValueFromArray([])).toBe(0);
  });
  test('complex array', () => {
    const arr = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];
    expected = 13; // the result of all numbers minus the sum of all string numbers
    expect(extractValueFromArray(arr)).toBe(expected);
  });
});
