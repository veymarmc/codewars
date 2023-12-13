/**
 * https://www.codewars.com/kata/5ad29cd95e8240dd85000b54/solutions/javascript/me/best_practice
 * 
 * about solutions this also can be fixed as
 * using Math.log2
 * recursion dividing between 2
 * 
 */

const friends = n => {
  if (n <= 2)
    return 0;

  let i = 2;

  while (Math.pow(2, i) < n)
    i++;

  return i--;
}

// Recursive solution
const friends2 = (n, e = 2) => {
  return n <= 2
    ? 0 
    : Math.pow(2, e) < n
      ? friends(n, ++e)
      : --e;
}