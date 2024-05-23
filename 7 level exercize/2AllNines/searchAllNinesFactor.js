/**
 * https://www.codewars.com/kata/664b9dd610985cc3b6784111/train/javascript
 * @param {BigInt} x 
 * @returns big integer that multiplied by x the result is formed by only 9 for all its digits or -1 if there's no such a number.
 */
function searchAllNinesFactor(x) {
  if(x % 2n === 0n || x % 5n === 0n) return -1n;

  // let ninesNumber = BigInt([...`${x}`].map(_ => '9').join('')); // not necessary to complex.
  let ninesNumber = 9n;

  while (ninesNumber % x !== 0n) {
    ninesNumber = BigInt(ninesNumber + '9');
    // ninesNumber = ninesNumber * 10n + 9n; // another alternative, in this case we should compare about conversion to string or arithmetic operations effort
  }

  return ninesNumber / x;
}

module.exports = searchAllNinesFactor;
