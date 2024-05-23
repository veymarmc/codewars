const searchAllNinesFactor = require("./searchAllNinesFactor");

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
});

