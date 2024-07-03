const distributeTobeggars = require('./englishBeggars');

describe("Distribute to beggars",() =>{
  test('Basic tests', () => {
    expect(distributeTobeggars([1,2,3,4,5],1)).toEqual([15]);
    expect(distributeTobeggars([1,2,3,4,5],2)).toEqual([9,6]);
    expect(distributeTobeggars([1,2,3,4,5],3)).toEqual([5,7,3]);
    expect(distributeTobeggars([1,2,3,4,5],6)).toEqual([1,2,3,4,5,0]);
    expect(distributeTobeggars([1,2,3,4,5],0)).toEqual([]);
  });
});
