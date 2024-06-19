const convertTemp = require('./temperatureConverter');

const sampleTestsParams = [
  [-30, "De", "K", 393],
  [40, "Re", "C", 50],
  [60, "De", "F", 140],
  [666, "K", "K", 666],
  [393, "K", "De", -30],
  [50, "C", "Re", 40],
  [140, "F", "De", 60]
];

describe('Temperature converter', () => {
  test.each(sampleTestsParams)('Sample test', (temp, from_scale, to_scale, expected) => {
    expect(convertTemp(temp, from_scale, to_scale)).toBe(expected);
  });
});
