const highCards = { T: 10, J: 11, Q: 12, K: 13, A: 14 };

/**
 * https://www.codewars.com/kata/53417de006654f4171000587/train/javascript
 * @param {Array} deckSteve cards of Steve
 * @param {Array} deckJosh cards of Josh
 * @returns Who wins message and score, or "Tie"
 */
function getWinnerOfDecks(deckSteve, deckJosh) {
	let steveScore = 0;
	let joshScore = 0;
	const getCardValue = card => highCards[card] ?? +card;

	for (let i = 0; i < deckSteve.length; i++) {
		const steveCard = getCardValue(deckSteve[i]);
		const joshCard = getCardValue(deckJosh[i]);

		if (steveCard !== joshCard)
      steveCard > joshCard ? steveScore++ : joshScore++;
	}

	if (steveScore === joshScore) return 'Tie';

	const winner = steveScore > joshScore ? 'Steve' : 'Josh';

	return `${winner} wins ${Math.max(steveScore, joshScore)} to ${Math.min(steveScore, joshScore)}`;
}
