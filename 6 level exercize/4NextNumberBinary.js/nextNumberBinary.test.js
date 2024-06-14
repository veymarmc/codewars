const getNextNumberSame1Digits = require('./nextNumberBinary');

describe('Get next bigger number with same 1 digits', () => {
  test('Basic tests', () => {
    compareBasicTest(128, 256);
    compareBasicTest(1, 2);
    compareBasicTest(1022, 1279);
    compareBasicTest(127, 191);
    compareBasicTest(1253343, 1253359);
    compareBasicTest(603487214, 603487219);
  })
})

function compareBasicTest(number, expected) {
  const actual = getNextNumberSame1Digits(number);
  expect(actual).toBe(expected);
}
