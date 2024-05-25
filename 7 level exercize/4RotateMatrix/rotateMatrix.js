/**
 * https://www.codewars.com/kata/56b5dd1702a30326ce000b02/train/javascript
 * @param {Array} matrix Matrix to rotate
 * @return the rotated matrix
 */
function rotateMatrix(matrix) {
  const result = [];

  for (let j = matrix[0].length - 1; j >= 0; j--) {
    const newRow = [];
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

module.exports = rotateMatrix;
