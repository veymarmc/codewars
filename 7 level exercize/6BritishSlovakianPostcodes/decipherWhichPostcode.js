/**
 * https://www.codewars.com/kata/664e4f5b12b1b20182ea3e3a/train/javascript
 * @param {string} postcode 
 * @returns the current postcode name of the given code
 */
function decipherWhichPostcode(postcode){
  postcode = postcode.trim();

  if (postcode.split(' ').length > 2) return 'Not valid'; // should be here to save time for evaluating regex
  
  if (isSKPostcode(postcode)) return 'SK';

  if (isGBPostcode(postcode)) return 'GB';

  return 'Not valid';
}

function isGBPostcode(postcode) {
  return /^[a-z]{1,2}\d{1,2} \d\w{2}$/i.test(postcode);
}

function isSKPostcode(postcode) {
  return /^\d{3} \d{2}$/.test(postcode);
}

module.exports = decipherWhichPostcode;
