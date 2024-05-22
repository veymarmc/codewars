const searchAllNinesFactor = require("./searchAllNinesFactor");

describe("Search all Nines factor", () => {
  test("even numbers should give -1", () => {
    const computed = searchAllNinesFactor(12);
    expect(computed).toBe(-1);
  })
});
