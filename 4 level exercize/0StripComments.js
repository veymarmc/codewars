/**
 * https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
 */

/**
 * This solution works but when putting special characters which change the regex
 * this solution won't work.
 * @param {string} input
 * @param {[string]} markers
 */
const solution = (input, markers) =>
	input
		.split("\n")
		.map((phrase) => {
			let mark = markers.find((m) => phrase.indexOf(m) >= 0);
			return mark ? phrase.replace(new RegExp(`\\s*${mark}.*`), "") : phrase.trim();
		})
		.join("\n");

/**
 * @param {string} input
 * @param {[string]} markers
 */
const solution2 = (input, markers) =>
	input
		.split("\n")
		.map((phrase) => {
			let markIndex = -1;
			markers.find((m) => {
				markIndex = phrase.indexOf(m);
				return markIndex >= 0;
			});
			return markIndex >= 0 ? phrase.slice(0, markIndex).trim() : phrase.trim();
		})
		.join("\n");

/**
 *
 * @param {string} input
 * @param {[]} markers
 * @returns
 */
const solution3 = (input, markers) =>
	input
		.split("\n")
		.map((line) => markers.reduce((l, marker) => l.split(marker)[0].trim(), line))
		.join("\n");

console.log(solution3("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
