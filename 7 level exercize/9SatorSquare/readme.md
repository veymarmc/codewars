## Note about the implementation

The current implementation take on account this patter found to solve the problem:
- search for all the letters in all rotations possible
- if all words are found the result is true.

However checking other solutions there was another simpler patther in order too solve the solution:
- currently for each specific leter position in the matrix there's always another equal in a known position that can be calculated.
- the simpler solution was only found the formula to find this other equal position.