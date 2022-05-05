/**
 * https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
 */

/**
 * 
 * @param {number} nFloors 
 * @returns 
 */
const towerBuilder = nFloors => {
  const res = [];
  let seed = "*";
  const baseLength = (nFloors - 1) * 2 + 1;

  for (let i = 0; i < nFloors; i++) {
    res.push(seed.padStart(nFloors + i, " ").padEnd(baseLength, " "));
    seed = `*${seed}*`;
  }

  return res;
}

const towerBuilder2 = n =>
  [...Array(n)].map((_, i) => " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1));

console.log(towerBuilder2(7));
