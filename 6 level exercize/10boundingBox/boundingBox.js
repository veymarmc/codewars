/**
 * https://www.codewars.com/kata/6644683b7c83db9ba33b7021/train/javascript
 * @param {Array} imageArray
 * @returns an Array with the bounding box of the image.
 */
function getBoundingBox(imageArray) {
	let [x1, y1, x2, y2] = [];

	for (let y = 0; y < imageArray.length; y++) {
		for (let x = 0; x < imageArray[0].length; x++) {
			if (imageArray[y][x]) {
				x1 = x > x1 ? x1 : x;
				y1 = y > y1 ? y1 : y;
				x2 = x < x2 ? x2 : x;
				y2 = y < y2 ? y2 : y;
			}
		}
	}

	if (x1 < 0) return imageArray;

	imageArray = Array(imageArray.length)
		.fill(0)
		.map(_ => Array(imageArray[0].length).fill(0));

	for (let i = x1; i <= x2; i++) {
		imageArray[y1][i] = 1;
		imageArray[y2][i] = 1;
	}

	for (let i = y1; i <= y2; i++) {
		imageArray[i][x1] = 1;
		imageArray[i][x2] = 1;
	}

	return imageArray;
}

module.exports = getBoundingBox;

