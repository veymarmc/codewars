/**
 * https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript
 * @param {string} first 
 * @param {string} second 
 * @returns The merged string which take on account the overlapping section to merge.
 */
function mergeOverlappingStrings1(first, second){
  for (let i = 0; i < first.length; i++) {
    const overlap = first.slice(i);
    
    if (second.startsWith(overlap))
      return first.slice(0, i) + overlap + second.slice(overlap.length);
  }

  return first + second;
}

// best solution
function mergeOverlappingStrings2(first, second) {
  for (let i = Math.min(first.length, second.length); i >= 0; i--) {
    if(second.startsWith(first.slice(first.length - i)))
      return first + second.slice(i);
  }
}

// clever solution
function mergeOverlappingStrings(first, second) {
  return (first + ' ' + second).replace(/(.*) \1/, '$1');
}

module.exports = mergeOverlappingStrings;
