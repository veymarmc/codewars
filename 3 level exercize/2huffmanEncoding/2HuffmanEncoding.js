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

function buildHuffmanTree(freqs) {
	// get the array of trees from the freqs.
	const treeArray = freqs.map(freq => ({ letter: freq[0], weight: freq[1] }));

	while (treeArray.length > 1) {
		treeArray.sort((a, b) => a.weight - b.weight);
		const treesToCompare = treeArray.splice(0, 2);
		treeArray.push({
			letter: treesToCompare[0].letter + treesToCompare[1].letter,
			weight: treesToCompare[0].weight + treesToCompare[1].weight,
			children: treesToCompare
		});
	}

	return treeArray[0];
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs, s) {
	if (freqs.length < 2) return null;

	// This recursive option seems to be no performant for code wars.
	function getHuffmanCode(letter, huffmanTree, code = "") {
		if (letter === huffmanTree.letter) return code;

		return huffmanTree.children[0].letter.includes(letter)
			? getHuffmanCode(letter, huffmanTree.children[0], code + "~")
			: getHuffmanCode(letter, huffmanTree.children[1], code + "^");
	}

	function getHuffmanCodeNoRecursion(letter, huffmanTree) {
		let code = "";
		let node = huffmanTree;

		while (letter !== node.letter) {
			if (node.children[0].letter.includes(letter)) {
				node = node.children[0];
				code += "~";
			} else {
				node = node.children[1];
				code += "^";
			}
		}

		return code;
	}

	const huffmanTree = buildHuffmanTree(freqs);
	const huffmanCheatyCode = freqs.reduce(
		(code, [letter]) => code.replaceAll(letter, getHuffmanCodeNoRecursion(letter, huffmanTree)),
		s
	);
	return huffmanCheatyCode.replaceAll("~", 0).replaceAll("^", 1);
}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs, bits) {
	if (freqs.length < 2) return null;

	function getHuffmanLetter(huffmanTree, bits) {
		if (huffmanTree.letter.length === 1) return huffmanTree.letter;

		return getHuffmanLetter(huffmanTree.children[+bits.splice(0, 1)], bits);
	}

	// This recursive option seems to be no performant for code wars.
	function getHuffmanLetterNoRecursion(huffmanTree, bits) {
		let node = huffmanTree;

		while (node.letter.length > 1) {
			node = node.children[+bits.splice(0, 1)];
		}

		return node.letter;
	}

	const huffmanTree = buildHuffmanTree(freqs);
	const bitsArray = bits.split("");
	let msg = "";

	while (bitsArray.length > 0) {
		msg += getHuffmanLetterNoRecursion(huffmanTree, bitsArray);
	}

	return msg;
}

// ################ TEST PART ##################
// ### SHOULD BE IMPLEMENTED WITH UNITESTS INTO A UNITEST FRAMEWORK
const s = "B2C012PCf";
console.log(s);
const freqs = frequencies(s);
console.log(freqs);
const huffmanTree = buildHuffmanTree(freqs);
console.log(JSON.stringify(huffmanTree, null, " "));
// const huffmanCodeForA = getHuffmanCode('A', huffmanTree);
// console.log('huffman code for A: ', huffmanCodeForA);
const bits = encode(freqs, s);
console.log(bits);
console.log(decode(freqs, bits), s);
