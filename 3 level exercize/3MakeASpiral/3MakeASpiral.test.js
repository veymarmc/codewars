const spiralize = require('./3MakeASpiral');

describe('Make a spiral exercise', () => {
  const spiral5 = [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [1,1,1,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]];

  const spiral8 = [
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,1],
    [1,0,0,0,0,1,0,1],
    [1,0,1,0,0,1,0,1],
    [1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1]
  ]

  test('do spiral 5', () => {
    expect(spiralize(5)).toEqual(spiral5);
  });

  test('do spiral 8', () => {
    expect(spiralize(8)).toEqual(spiral8);
  });
});
