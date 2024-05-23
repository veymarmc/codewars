const searchAllNinesFactor = require("./searchAllNinesFactor");
let multipleTests = [
  [11n, 9n],
  [12n, -1n],
  [7n, 142857n],
  [9n, 1n],
  [1n, 9n],
  [3n, 3n],
  [31n, 32258064516129n],
  [63n, 15873n],
  [189n, 5291n],
  [65n, -1n]
];

describe("Search all Nines factor", () => {
  test("Special numbers edge cases should give -1", () => {
    const expected = -1n;
    // even numbers
    let evaluatedNumber = 12n;
    expect(searchAllNinesFactor(evaluatedNumber)).toBe(expected);
    // multiple of 5 numbers
    evaluatedNumber = 135n;
    expect(searchAllNinesFactor(evaluatedNumber)).toBe(expected);
  });
  
  test("Basic numbers, known cases", () => {
    let expected = 9n;
    let actual = searchAllNinesFactor(11n);
    expect(actual).toBe(expected);

    expected = 76923n;
    actual = searchAllNinesFactor(13n);
    expect(actual).toBe(expected);
  });
  
  // other multiple known tests.
  test.each(multipleTests)('Test the PARAM x=%i and EXPECTED m=%i', (param, expected) => {
    expect (searchAllNinesFactor(param)).toBe(expected);
  })
});
