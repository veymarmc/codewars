const FEATURE_CONSTRAINTS = [
	{ favor: 'QUTHCRDMZ', pos: 0 },
	{ favor: 'WEVOXING', pos: 3 },
	{ favor: 'JFABKPLY', pos: 6 },
	{ favor: 'SSSSSSSSS', pos: 9 }
];

const EMPTY_CHAIR = '_____';

/**
 * https://www.codewars.com/kata/6646c0c08b97085ca216d346/train/javascript
 * @param {Array} theDead array of names to be place at the table
 * @returns The table seats arranged
 */
function setTable(theDead) {
	const table = Array(12).fill(EMPTY_CHAIR);

	for (let i = 0; i < theDead.length && i < 12; i++) {
		const featurePosition = getFeaturePosition(theDead[i].charAt(0));

		if (table[featurePosition] === EMPTY_CHAIR)
			table[featurePosition] = theDead[i];
		else
			assignToNearestPosition(featurePosition, table, theDead[i]);
	}

	return table;
}

function getFeaturePosition(char) {
	return FEATURE_CONSTRAINTS.find(({ favor }) => favor.includes(char)).pos;
}

function assignToNearestPosition(pos, table, name) {
	let nearestPos = pos;
	let shift = 1;

	do {
		shift *= -1;
		nearestPos = pos + shift;
		nearestPos = nearestPos < 0 ? table.length + nearestPos : nearestPos;
		nearestPos = nearestPos > table.length - 1 ? nearestPos - table.length : nearestPos;
		shift = shift > 0 ? shift + 1 : shift;
	} while (table[nearestPos] !== EMPTY_CHAIR);

	table[nearestPos] = name;
}

module.exports = setTable;
