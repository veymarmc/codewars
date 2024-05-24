const { encode, decode } = require('./gaderypolukiCypher');

describe('Apply "GADERYPOLUKI CYPHER', () => {
  test('Basic tests', () => {
    expect(encode("Ala has a cat")).toBe("Gug hgs g cgt");
    expect(decode("Gug hgs g cgt")).toBe("Ala has a cat");
    expect(encode("ABCD")).toBe("GBCE");
    expect(encode("gaderypoluki")).toBe("agedyropulik");
    expect(decode("agedyropulik")).toBe("gaderypoluki");
    expect(decode("GBCE")).toBe("ABCD");
  })
});
