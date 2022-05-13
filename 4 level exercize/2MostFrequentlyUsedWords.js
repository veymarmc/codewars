/**
 * https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
 */

/**
 * 
 * @param {string} text 
 */
function topThreeWords (text) {
  return (text.match(/\w[\w']*/g) || [])
    .map(w => w.toLowerCase())
    .sort()
    .reduce((frequencies, word) =>
      word.toLowerCase() === frequencies[frequencies.length - 1].x
        ? typeof frequencies[frequencies.length - 1].f++ === 'number' ? frequencies : frequencies
        : frequencies.concat([{ x: word, f: 1 }])
      ,[{ x: 'x', f: 0}])
    .sort((a, b) => b.f - a.f)
    .filter(x => x.f !== 0)
    .map(w => w.x)
    .slice(0,3);
}

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
