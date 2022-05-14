/**
 * https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
 */


const sumStrings = (a , b) => sum(a, b, ['', 0])[0].replace(/0+/, '');

const sum = (a, b, r) =>
  (a.length > 14 || b.length > 14)
    ? sum(
      a.slice(0, a.length - 14),
      b.slice(0, b.length - 14),
      sum(a.slice(-14), b.slice(-14), r))
    : [
      `${+a + +b + r[1]}`.slice(-14).padStart(14, '0') + r[0],
      +`${+a + +b + r[1]}`.padStart(15, '0').charAt(0)];

      //1280524930926761964029117323242
      /**
 * This solution is more sutable since there is already a BigInt in javascript
 * that manages it without any problem.
 * @param {string} a 
 * @param {string} b 
 * @returns 
       */
      const sumStrings2 = (a , b) => (BigInt(a) + BigInt(b)).toString();
      
/**
 * Another clever solution
 * @param {strin} a 
 * @param {strin} b 
 * @returns 
 */
const sumStrings3 = (a , b) => {
  let p = 0; res = '';
  a = a.split('');
  b = b.split('');
  
  while (a.length || b.length || p) {
    p += ~~a.pop() + ~~b.pop();
    res = p % 10 + res;
    p = p > 9;
  }
  
  return res;
}

console.log(sumStrings3('300502972923381417303355476826', '980021958003380546725761846416'));
