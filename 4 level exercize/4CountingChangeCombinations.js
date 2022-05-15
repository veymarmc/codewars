/**
 * https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript
 */

/**
 * 
 * @param {number} n 
 * @param {Array} coins 
 */
const countChange = (n, coins) => {
  const res = { c: 0 };
  verifyCountChange(0, coins, n, res);
  return res.c;
}

const verifyCountChange = (t, coins, n, res) => {
  let currentCoin = coins.shift();

  if (coins.length == 0) {
    for(let i = 0; i<= ~~(n/currentCoin); i++) {
      const change = t + currentCoin * i
      if (change == n) {
        res.c++;
        return;
      } else if (change > n) {
        return;
      }
    }
  } else {
    for(let i = 0; i<= ~~(n/currentCoin); i++) {
      const partialChange = t + currentCoin * i;
      if (partialChange > n) {
        return;
      } else {
        verifyCountChange(partialChange, [...coins], n, res);
      }
    }
  }
}

console.log(countChange(11, [5,7]));