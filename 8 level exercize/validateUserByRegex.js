/**
 * ref: https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript
 * @param {string} username 
 * @returns true if a username is valid according to the regex
 */
function validateUsr(username) {
  const noUserNameRegex = /[^a-z\d_]/;
  return !noUserNameRegex.test(username) && /.{4,16}/.test(username);
}

function validateUsr2(username) {
  const userNameRegex = /^[a-z\d_]{4,16}$/;
  return userNameRegex.test(username);
}
