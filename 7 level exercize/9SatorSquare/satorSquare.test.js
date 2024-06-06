const isSatorSquare = require("./satorSquare");

describe("Is Sator Square?", () => {
	test("Verify a correct Sator Square", () => {
		const correctSatorSquare = [
			["T", "E", "N"],
			["E", "Y", "E"],
			["N", "E", "T"]
		];
		expect(isSatorSquare(correctSatorSquare)).toBe(true);
	});
	test("Verify a incorrect Sator Square", () => {
		let incorrectSatorSquare = [
			["N", "O", "T"],
			["O", "V", "O"],
			["N", "O", "T"]
		];
		expect(isSatorSquare(incorrectSatorSquare)).toBe(false);

		incorrectSatorSquare = [
			["P", "A", "R", "T"],
			["A", "G", "A", "R"],
			["R", "A", "G", "A"],
			["T", "R", "A", "M"]
		];
    expect(isSatorSquare(incorrectSatorSquare)).toBe(false);
	});
});

