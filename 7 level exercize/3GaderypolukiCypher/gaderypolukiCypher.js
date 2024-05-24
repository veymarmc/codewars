/**
 * 
 * @param {string} str
 * @return translated word
 */
function translateCode(str) {
  const code = "gaderypolukiGADERYPOLUKI";
  
  return str.split('').map(char => {
    const index = code.indexOf(char);
    
    if (index < 0) return char;
    
    return index % 2 === 0 ? code.charAt(index + 1) : code.charAt(index -1);
  }).join('');
}

/**
 * https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript
 * @param {string} str
 * @returns the encoded string
 */
function encode(str) 
{
    return translateCode(str);   
}

/**
 * 
 * @param {string} str 
 * @returns the decoded string
 */
function decode(str) 
{
    return translateCode(str);   
}

module.exports = { encode, decode } ;
