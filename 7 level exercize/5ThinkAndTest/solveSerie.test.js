const testit = require('./solveSerie');

describe("Sample Tests", () => {
  test("Evaluate", () => {
    expect(testit(0,1)).toBe(1);
    expect(testit(1,2)).toBe(3);
    expect(testit(10,20)).toBe(30);
    expect(testit(1,1)).toBe(1);
    expect(testit(1,3)).toBe(3);
  })
});
