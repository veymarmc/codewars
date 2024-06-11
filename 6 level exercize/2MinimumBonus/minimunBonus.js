/**
 * https://www.codewars.com/kata/595ef0c7458ad5facc000019/train/javascript
 * @param {Array} scores teams' scores
 * @returns the total bonus given
 */
function getMinimumBonus(scores) {
	let bonuses = Array(scores.length).fill(0);

	while (bonuses.some(b => b === 0)) {
		scores.forEach((score, i) => {
      const bonusAssigned = bonuses[i] > 0;
      const isSmallestScore = score <= (scores[i - 1] ?? Infinity) && score <= (scores[i + 1] ?? Infinity);
      const isBiggestScore = score > (scores[i - 1] ?? -1) && score > (scores[i + 1] ?? -1);
      const limitBonusesNotZero = (bonuses[i + 1] ?? 1) > 0 && (bonuses[i - 1] ?? 1) > 0;
      const biggerThanNextValid = score > scores[i + 1] && bonuses[i + 1] > 0;
      const biggerThanPreviousValid = score > scores[i - 1] && bonuses[i - 1] > 0;

			if (bonusAssigned) return;

			if (isSmallestScore)
				bonuses[i] = 1;

			if (isBiggestScore) {
				if (limitBonusesNotZero)
					bonuses[i] = Math.max(bonuses[i - 1] ?? 1, bonuses[i + 1] ?? 1) + 1;
			} else {
				if (biggerThanNextValid)
					bonuses[i] = bonuses[i + 1] + 1;

				if (biggerThanPreviousValid)
					bonuses[i] = bonuses[i - 1] + 1;
			}
		});
	}

	return bonuses.reduce((total, bonus) => total + bonus, 0);
}

/**
 * This way of solve the exercise becomes complicated when taking edge cases in order to reflect the nested if's
 * @param {*} scores 
 * @returns 
 */
function getMinimumBonus1(scores) {
	let bonuses = Array(scores.length).fill(0);

	while (bonuses.some(b => b === 0)) {
		scores.forEach((score, i) => {
			switch (true) {
				case bonuses[i] > 0:
					break;
				case score <= (scores[i - 1] ?? Infinity) && score <= (scores[i + 1] ?? Infinity):
					bonuses[i] = 1;
					break;
				case score > (scores[i - 1] ?? -1) &&
					score > (scores[i + 1] ?? -1) &&
					(bonuses[i + 1] ?? 1) > 0 &&
					(bonuses[i - 1] ?? 1) > 0:
					bonuses[i] = Math.max(bonuses[i - 1] ?? 1, bonuses[i + 1] ?? 1) + 1;
					break;
				case score > scores[i + 1] && bonuses[i + 1] > 0:
					bonuses[i] = bonuses[i + 1] + 1;
					break;
				case score > scores[i - 1] && bonuses[i - 1] > 0:
					bonuses[i] = bonuses[i - 1] + 1;
			}
		});
	}

	return bonuses.reduce((total, bonus) => total + bonus, 0);
}

module.exports = getMinimumBonus;

