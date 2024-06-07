const mergeOverlappingStrings = require('./mergeOverlapingStrings');

describe('Merge Overlapping strings', () => {
  test('No overlapping', () => {
    const s1 = "over";
    const s2 = "lapping";
    const expected = "overlapping";

    expect(mergeOverlappingStrings(s1, s2)).toBe(expected);
  });

  test('Overlapping', () => {
    const s1 = "overlap"; // string "lap" is the overlapping section
    const s2 = "lapping";
    const expected = "overlapping";

    expect(mergeOverlappingStrings(s1, s2)).toBe(expected);
  });
});
