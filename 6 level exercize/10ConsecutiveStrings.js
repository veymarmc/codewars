/**
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
 */

/**
 * 
 * @param {[]} strarr 
 * @param {number} k 
 */
const longestConsec = (strarr, k) => {
  let concec = "";

  if (!strarr.length || k > strarr.length || k <= 0)
    return concec;

  for(let i = 0; i <= strarr.length - k; i++) {
    concec = concec.length < strarr.slice(i, i + k).join("").length ? strarr.slice(i, i + k).join("") : concec;
  }

  return concec;
}

/**
 * 
 * @param {Array} strarr 
 * @param {number} k 
 * @returns 
 */
const longestConsec2 = (strarr, k) =>
  strarr
    .map((str, i, arr) => arr.slice(i, i+k).join(""))
    .reduce((res, str) => res.length < str.length ? str : res, "");

console.log(longestConsec2(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));
