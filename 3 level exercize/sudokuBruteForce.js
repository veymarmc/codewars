
/**
 * https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript
 * @param {Array} puzzle 9 x 9 sudoku puzzle
 * @returns the solved puzzle as a 2d array of 9 x 9 
 */
function sudoku(puzzle) {
  /**
   * 
   * @param {number} y sudoku vertical axis 
   * @param {number} x sudoku horizontal axis
   * @returns the one of the nine "3 x 3" sudoku square portion.
   */
  const getSquareNumber = (y, x) => Math.floor(y/3)*3 + Math.floor(x/3);

  /**
   * 
   * @param {Array} sudokuStep array of the current 9x9 sudoku puzzel
   * @returns the sudoku represented into three arrays: rows, colums and squares.
   */
  function generateSudokuStep(sudokuStep) {
    const rows = sudokuStep.map(x => []);
    const columns = sudokuStep.map(x => []);
    const squares = sudokuStep.map(x => []);
    
    for (let i = 0; i < sudokuStep.length; i++) {
      for (let j = 0; j < sudokuStep[0].length; j++) {
        rows[i][j] = sudokuStep[i][j];
        columns[j][i] = sudokuStep[i][j];
        const squareNumber = getSquareNumber(i, j);
        squares[squareNumber].push(sudokuStep[i][j]);
      }    
    }

    return [rows, columns, squares];
  }

  /**
   * Recursive function to find the sudoku solution
   * @param {number} i y axis to traverse the sudoku
   * @param {number} j x axis to traverse the sudoku
   * @param {Array} sudokuStep the sudoku
   * @returns the array that represent the solution of the sudoku
   */
  function findSolution(i, j, sudokuStep) {
    const [rows, columns, squares] = sudokuStep.length === 3 // if the previous step was a non calculated the same previous rows, columns, squares will be sent
      ? sudokuStep
      : generateSudokuStep(sudokuStep);

    if (i >= rows.length)
      return rows;

    if (j >= rows[0].length)
      return findSolution(i+1, 0, [rows, columns, squares]);

    if (rows[i][j] !== 0)
      return findSolution(i, j+1, [rows, columns, squares]);

    /**
     * Recursive function to find the correct number for each empty box
     * This was done using the backtracking algorithm (brute force search)
     * @returns the box number to fill the empty box
     */
    function findBoxSolution() {
      let possibleBoxValue = rows[i][j] ? rows[i][j]+1 : 1;
      rows[i][j] = 0;
      const squareNumber = getSquareNumber(i, j);
  
      while(possibleBoxValue <= 9) {
        if (!rows[i].includes(possibleBoxValue)
          && !columns[j].includes(possibleBoxValue)
          && !squares[squareNumber].includes(possibleBoxValue)) {
          rows[i][j] = possibleBoxValue;
          break;
        }
        possibleBoxValue++;
      }
  
      if (rows[i][j] === 0)
        return false;
  
      const res = findSolution(i, j+1, rows);
  
      if (!res)
        return findBoxSolution();
  
      return res;
    }

    return findBoxSolution();
  }

  return findSolution(0, 0, puzzle) || [];
}

const puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];


console.log(sudoku(puzzle));
