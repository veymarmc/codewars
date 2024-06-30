const countFeelings = require('./howManyFeelings');

describe('How many feelings',() => {
  test('basic tests', () => {
    expect(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief'])).toBe('3 feelings.');
    expect(countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief'])).toBe('2 feelings.');
    expect(countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief'])).toBe('1 feeling.');
    expect(countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear'])).toBe('0 feelings.');
  })
});
