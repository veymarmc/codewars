const spiralize = require('./3MakeASpiral');

describe('Make a spiral exercise', () => {
  const spiral5 = [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [1,1,1,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]];

  test('first try', () => {
    expect(spiralize(5)).toEqual(spiral5);
  });
});
