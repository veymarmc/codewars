const rotateMatrix = require('./rotateMatrix');


describe("Rotate Matrix", () => {

  test("Matrix Result dimensions are the correct", () => {
    const current = [[-1,4,5],[2,3,4]];
    const expected = [[5,4],[4,3],[-1,2]];

    const actual = rotateMatrix(current);
    const [n, m] = [expected.length, expected[0]?.length];
    const [actualN, actualM] = [actual?.length, actual && actual?.[0]?.length];

    const equalWidths = n === actualN;
    const equalHeights = m === actualM;
    
    expect(equalWidths).toBe(true);
    expect(equalHeights).toBe(true);

    if (equalWidths && equalHeights) {
      expect(actual).toEqual(expected);
    }
  })
});
