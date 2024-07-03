const distributeTobeggars = require('./englishBeggars');

describe("Distribute to beggars",() =>{
  test('Basic tests', () => {
    expect(distributeTobeggars([1,2,3,4,5],1)).toBe([15]);
    expect(distributeTobeggars([1,2,3,4,5],2)).toBe([9,6]);
    expect(distributeTobeggars([1,2,3,4,5],3)).toBe([5,7,3]);
    expect(distributeTobeggars([1,2,3,4,5],6)).toBe([1,2,3,4,5,0]);
    expect(distributeTobeggars([1,2,3,4,5],0)).toBe([]);
  });
});
