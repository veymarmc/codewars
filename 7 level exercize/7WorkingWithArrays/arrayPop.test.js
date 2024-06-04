const withoutLast = require('./arrayPop');

describe('Array without the last element', () => {
  test('Basic tests', () => {
    expect(withoutLast([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
    expect(withoutLast([2, 4, 6, 8])).toEqual([2, 4, 6]);
  });
  
  test('Complex test', () => {
    expect(withoutLast([80, 34,  2,  3, 88, 38, 19, 31, 44])).toEqual([ 80, 34, 2, 3, 88, 38, 19, 31 ]);
  });
});
