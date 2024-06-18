const isEvenOrOdd = require('./evenOrOdd');

describe('Even Or Odd', () => {
  const EVEN = 'Even';
  const ODD = 'Odd';

  test("[4] is even", () => {
    expect(isEvenOrOdd[4]).toBe(EVEN);
  });
  test("2 is even", () => {
    expect(isEvenOrOdd(2)).toBe(EVEN);
  });
  test("[11] is odd", () => {
    expect(isEvenOrOdd[11]).toBe(ODD);
  });
  test("7 is odd", () => {
    expect(isEvenOrOdd(7)).toBe(ODD);
  });
  test("[-44] is even", () => {
    expect(isEvenOrOdd[-44]).toBe(EVEN);
  });
  test("-42 is even", () => {
    expect(isEvenOrOdd(-42)).toBe(EVEN);
  });
  test("[-9] is odd", () => {
    expect(isEvenOrOdd[-9]).toBe(ODD);
  });
  test("-7 is odd", () => {
    expect(isEvenOrOdd(-7)).toBe(ODD);
  });
  test("[0] is even", () => {
    expect(isEvenOrOdd[0]).toBe(EVEN);
  });
  test("0 is even", () => {
    expect(isEvenOrOdd(0)).toBe(EVEN);
  });
});
