/**
 * https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/javascript/me/best_practice
 */

// my first solution
function validParentheses(parens) {
  if (parens.length % 2 != 0)
    return false;

  let nOpen = 0;
  let nClose = 0;

  for (const c of parens) {
    if (c == "(")
      nOpen++;
    else {
      nClose++;
      
      if (nClose > nOpen)
        return false;
    }
  }

  return nOpen == nClose;
}

// a solution of the kata but improved by me.
function validParentheses1(parens) {
  let n = 0;

  for (const c of parens) {
    n = (c == "(") ? ++n : --n;

    if (n < 0)
      return false;
  }

  return n == 0;
}

/**
 * There are another solutions about regular expressions.
 * - Once is to test if there's the pather of "()"
 *     - if so then continue deleting, return the boolean value of the parens
 * - Other similat to the previous but with the function of chatAt("()") and delete until the chart gets -1
 *     - the return value is the boolean value of the parens.
 */