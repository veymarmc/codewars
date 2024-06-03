const decipherWhichPostcode = require('./decipherWhichPostcode');

const NOT_VALID = 'Not valid';
const GB = 'GB';
const SK = 'SK';


describe('Decipher which postcode', () => {
  test('No valid with more than one segment', () => {
    const postcode = 'dkf sfdkj  dfkj  ';
    expect(decipherWhichPostcode(postcode)).toBe(NOT_VALID);
  });

  test('valid "GB" postcode', () => {
    const postcode = 'DN1 1AA';
    expect(decipherWhichPostcode(postcode)).toBe(GB);
  });

  test('valid "SK" postcode', () => {
    const postcode = '123 45';
    expect(decipherWhichPostcode(postcode)).toBe(SK);
  });
});
