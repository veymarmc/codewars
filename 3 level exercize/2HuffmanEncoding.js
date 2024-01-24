/**
 * https://www.codewars.com/kata/54cf7f926b85dcc4e2000d9d/train/javascript
 * https://en.wikipedia.org/wiki/File:Huffman_coding_visualisation.svg
 * @param {string} s sequences of letters.
 */
// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
function frequencies(s) {
	return s.split("").reduce((freqs, char) => {
		const found = freqs.some(fr => fr[0] === char);
		if (!found) {
			const regexChar = new RegExp(char, "g");
			freqs.push([char, s.match(regexChar).length]);
		}
		return freqs;
	}, []);
}

function mixTree(treeArray) {
	const node = {
		weight: treeArray[0].weight + treeArray[1].weight,
		children: treeArray
	};
	treeArray[0].code = 0;
	treeArray[1].code = 1;
	return node;
}

function buildHuffmanTree(freqs) {
	// get the array of trees from the freqs.
	const treeArray = freqs.map(freq => ({ letter: freq[0], weight: freq[1] }));

	while (treeArray.length > 1) {
		treeArray.sort((a, b) => a.weight - b.weight);
		const treesToCompare = treeArray.splice(0, 2);
		const newMixedTree = mixTree(treesToCompare);
		treeArray.push(newMixedTree);
	}

	return treeArray[0];
}

const s = "A_DEAD_DAD_CEDED_A_BAD_BABE_A_BEADED_ABACA_BED";
const freqs = frequencies(s);
console.log(freqs);
console.log(JSON.stringify(buildHuffmanTree(freqs), null, " "));

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs, s) {}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs, bits) {}

/*
Tasks to do:
  - [x] make the frequencies algorithm given any text.
  - [x] study the examples of the tests to know exactly how to encode and decode.
  - [x] if the previous information is not enough, study the Huffman Encodding in order to check more examples.
    - Data: the given string
    - needed structures:
      - An array of trees
        - these tress at the beginning are only a node with weight of each letter
        - the weight of each letter is the frequency of it in the given string.
        - these should be ordered according to the weights.
      - the tree has the following components:
        - a letter (could be null if this is a branch node)
        - the weight
        - the children if any (exactly two since this is a binary tree, or can be null).
        - the value of binary child, if left child this is zero, otherwise one.
      - the decoded array has the following components:
        - the letter
        - the respective code
          - this code is gotten by:
          - going through the root to the leaf which contain the letter.
          - take all the code values of the nodes (left: 0, right: 1)
          - as the root node doesn't have another sibling it doesn't have a code value.
    - the algorithm to encode:
      - get the frequencies of each letter of the given string.
      - put each of them in a tree with the value of the children to null.
      - (*) order the trees acording to the root weight.
      - take the two less weighed trees and join then into a new tree.
        - order the two children the smaller to the left and the bigger to the right.
        - all left children should have a zero value of code and the left ones: one.
        - The new root should have the summation of its children weights as its weight.
        - The new root doesn't have a letter since this is a branch node.
      - delete the previous selected trees.
      - put the new tree in the tree array.
      - ask if the tree array length is 1
        - if is greater go to (*)
        - if so return the array of trees.
      - decode each letter:
        - this code is gotten by:
        - going through the root to the leaf which contain the letter.
        - take all the code values of the nodes (left: 0, right: 1)
        - as the root node doesn't have another sibling it doesn't have a code value.
      - replace each code instead of each letter of the given string.

    - the algorithm to decode:
      - have the hauffman tree
      - traverse each bit to the hauffman tree and find the respective letter.
  - [x] with the result of the previous information recheck and study binary tree data structure to solve the problem.
  - [0] make the huffman tree construction algorithm.
  - [o] make the encode algorithm
  - [o] make the decode algorithm
  - [o] study a little bit the tests in order to begin with unit tests.
*/

