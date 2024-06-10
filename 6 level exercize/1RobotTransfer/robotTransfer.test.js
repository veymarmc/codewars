const getNumberOfPathsWithGiveSteps = require('./robotTransfer');

describe('Robot transfer', () => {
  test('Basic cases', () => {
    let matrix = [
      ["0,1","0,0","1,2"], 
      ["1,1","1,0","0,2"], 
      ["2,1","2,0","0,0"]
    ];
    let steps = 2;
    let expected = 8;

    expect(getNumberOfPathsWithGiveSteps(matrix, steps)).toBe(expected);

    matrix = [
      ["0,1","0,0"], 
      ["1,1","1,0"]
    ];
    steps = 2;
    expected = 4;

    expect(getNumberOfPathsWithGiveSteps(matrix, steps)).toBe(expected);
  });
});
