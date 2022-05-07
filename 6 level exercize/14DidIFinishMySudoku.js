/**
 * https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript
 */

const areTheRowsCorrect = b => b.reduce((res, row) => res && new Set(row).size === 9, true);


/**
 *
 * @param {[[]]} board
 */
const doneOrNot = (board) =>
  areTheRowsCorrect(board) &&
  areTheRowsCorrect(board[0].map((v, i) => board.map((row) => row[i]))) &&
  areTheRowsCorrect(
    Array(3).fill(1).flatMap((_, i) =>
      Array(3).fill(2).flatMap((_, j) =>
        Array(3).fill(3).flatMap((_, k) => board[j * 3 + k].slice(i * 3, (i + 1) * 3)))))
    ? "Finished!"
    : "Try again!";
