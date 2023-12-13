/**
 * https://www.codewars.com/kata/546a3fea8a3502302a000cd2/train/javascript
 * @param {number} start positive integer including 0, that marks the first ball position in the cups
 * @param {[Array]} swaps array of swaps.
 * @returns the final position of the ball through out all the swaps
 */
function findTheBall(start, swaps) {
  let end = start;

  for (let i = 0; i < swaps.length; i++) {
    const swapIndex = swaps[i].indexOf(end);  
    end = isNaN(swaps[i][swapIndex]) ? end : swaps[i][1-swapIndex]; 
  }

	return end;
}

findTheBall(0, [[0, 1]]);
