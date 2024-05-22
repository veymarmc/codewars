const searchAllNinesFactor = require("./searchAllNinesFactor");

describe("Search all Nines factor", () => {
  test("Special numbers edge cases should give -1", () => {
    // even numbers
    let evaluatedNumber = 12;
    expect(searchAllNinesFactor(evaluatedNumber)).toBe(-1);
    // multiple of 5 numbers
    evaluatedNumber = 135;
    expect(searchAllNinesFactor(135)).toBe(-1);
  });
});
