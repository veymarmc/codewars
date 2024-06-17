/**
 * https://www.codewars.com/kata/55baa55cf332e67eb000000a/train/javascript
 * Solution: https://www.geeksforgeeks.org/find-the-n-th-lexicographic-permutation-of-string-using-factoradic-method/
 * @param {number} n the position of the lexico word
 * @param {number} d the number of digist to use from 0
 * @return The nth lexicographic permuted word
 */
function getNthLexicoPermutation(n, d) {
	const word = [...Array(d).keys()];
	n--;

	const factorRadic = word
		.reduce((f, _, i) => {
			f = (n % (i + 1)) + f;
			n = Math.floor(n / (i + 1));
			return f;
		}, '')
		.split('');

	return factorRadic.reduce((nth, f) => nth + word.splice(f, 1)[0], '');
}

module.exports = getNthLexicoPermutation;
