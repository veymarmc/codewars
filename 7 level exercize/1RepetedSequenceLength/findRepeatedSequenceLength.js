/**
 * https://www.codewars.com/kata/58a3f57ecebc06bfcb00009c/train/javascript
 * @param {number} a0 the number to begin the sequence, positive Integer greater than zero
 * @returns the size of the final repeated sequence.
 */
function findRepeatedSequenceLen(a0) {
  if (a0 < 0)
    throw new Error('The parameter should be a positive integer');
  
  const sequence = [];
  let next = a0;
  let indexSequence = -1;

  while (indexSequence < 0) {
    sequence.push(next);
    next = [...`${next}`].reduce((sum, dgt) => sum + (+dgt)**2, 0);
    indexSequence = sequence.indexOf(next);
  }

  return sequence.length - indexSequence; // the repeated sequence will be in that range.
}

module.exports = findRepeatedSequenceLen;
