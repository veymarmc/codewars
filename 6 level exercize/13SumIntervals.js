/**
 * https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
 */

/**
 *
 * @param {number} n
 * @param {[number, number]} interval
 */
const isIninterval = (n, interval) => n >= interval[0] && n <= interval[1];

/**
 *
 * @param {[]]} i1
 * @param {[]} i2
 * @returns
 */
const areOverlapped = (i1, i2) =>
  isIninterval(i1[0], i2) ||
  isIninterval(i1[1], i2) ||
  isIninterval(i2[0], i1) ||
  isIninterval(i2[1], i1);

/**
 * This solution works really well, however this is not performant
 * @param {[]} intervals
 */
const sumIntervals = (intervals) => {
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);

  for (let j = 0; intervals.length != 0; j++) {
    res.push(intervals.shift());

    for (let i = 0; i < intervals.length; i++) {
      if (areOverlapped(res[j], intervals[i])) {
        res[j] = [
          Math.min(res[j][0], intervals[i][0]),
          Math.max(res[j][1], intervals[i][1]),
        ];
        intervals.splice(i, 1);
        i--;
      }
    }
  }

  return res.reduce((s, a) => s + a[1] - a[0], 0);
};

/**
 * Works but yet not performant ;(
 * @param {[]} intervals
 */
const sumIntervals2 = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals.shift()];
  let resIndex = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (areOverlapped(res[resIndex], intervals[i])) {
      res[resIndex] = [
        Math.min(res[resIndex][0], intervals[i][0]),
        Math.max(res[resIndex][1], intervals[i][1]),
      ];
      intervals.splice(i, 1);
    } else {
      res.push(intervals.shift());
      resIndex++;
    }

    i--;
  }

  return res.reduce((s, a) => s + a[1] - a[0], 0);
};

/**
 * Works also, this solution was found in the internet identically like there
 * however the page presents another errors so this will be left until here.
 * @param {[]} intervals
 */
const sumIntervals3 = (intervals) => {
  let numbersInIntervals = [];
  intervals.forEach((s) => {
    for (let i = s[0]; i < s[1]; i++) {
      numbersInIntervals.push(i);
    }
  });
  return new Set(numbersInIntervals).size;
};

console.log(
  sumIntervals3([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
);
