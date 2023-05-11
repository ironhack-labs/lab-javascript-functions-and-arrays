// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}

// could also be done using Math.max(num1, num2)

// Iteration #2: Find longest word
const words = [
	"mystery",
	"brother",
	"aviator",
	"crocodile",
	"pearl",
	"orchard",
	"crackpot",
];

function findLongestWord(wordArray) {
	let wordLength = [];
	let maxLength = 0;

	if (wordArray.length === 0) {
		return null;
	} else if (wordArray.length === 1) {
		return wordArray[0];
	} else {
		for (let i = 0; i < wordArray.length; i++) {
			wordLength.push(wordArray[i].length);
		}
		/*the following two for loops could be refactored into just one using the Math.max() method with the spread operator as so:
   
   for (let j = 0; j < wordLength.length; j++) {
      if (wordLength[j] === Math.max(...wordLength)) {
        return wordArray[j]
      }
    } 
    
    I also included a version without using this method, as seen below:*/

		for (let j = 0; j < wordLength.length; j++) {
			if (wordLength[j] > maxLength) {
				maxLength = wordLength[j];
			}
		}

		for (let k = 0; k < wordLength.length; k++) {
			if (wordLength[k] === maxLength) {
				return wordArray[k];
			}
		}
	}
}

// Iteration #3.1 : Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
	let numSum = 0;
	for (let i = 0; i < numArray.length; i++) {
		numSum += numArray[i];
	}
	return numSum;
}

// Iteration #3.2 Bonus: // Jasmine not considering this correct and I dont know why!

function sum(numArray) {
	let numSum = 0;

	if (numArray.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < numArray.length; i++) {
			if (typeof numArray[i] === "string") {
				numArray[i] = numArray[i].length;
			} else if (typeof numArray[i] === "boolean") {
				if (numArray[i] === true) {
					numArray[i] = 1;
				} else if (numArray[i] === false) {
					numArray[i] = 0;
				}
			} else if (typeof numArray[i] === "object") {
				throw new Error("Unsupported data type (object or array)"); //don't know if this is what's requested 
			}
			numSum += numArray[i];
		}
		return numSum;
	}
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
	let numSum = 0;
	if (numArray.length === 0) {
		return null;
	} else {
		for (let i = 0; i < numArray.length; i++) {
			numSum += numArray[i];
		}
	}
	return numSum / numArray.length;
}

// Level 2: Array of strings
const wordsArr = [
	"seat",
	"correspond",
	"linen",
	"motif",
	"hole",
	"smell",
	"smart",
	"chaos",
	"fuel",
	"palace",
];

function averageWordLength(wordArray) {
	let numSum = 0;
	if (wordArray.length === 0) {
		return null;
	}
	for (let i = 0; i < wordArray.length; i++) {
		numSum += wordArray[i].length;
	}
	return numSum / wordArray.length;
}

// Bonus - Iteration #4.1 //dont understand what is being asked to do here.

function avg() {}

// Iteration #5: Unique arrays //
const wordsUnique = [
	"crab",
	"poison",
	"contagious",
	"simple",
	"bring",
	"sharp",
	"playground",
	"poison",
	"communion",
	"simple",
	"bring",
];

function uniquifyArray(array) {
	if (array.length === 0) {
		return null;
	} else {
		for (let i = 0; i < array.length; i++) {
			for (let j = i + 1; j < array.length; j++) {
				if (array[i] === array[j]) {
					array.splice(j, 1);
					j--;
				}
			}
		}
	}
	return array;
}

// Iteration #6: Find elements
const wordsFind = [
	"machine",
	"subset",
	"trouble",
	"starting",
	"matter",
	"eating",
	"truth",
	"disobedience",
	"subset",
];

function doesWordExist(wordArray, word) {
	if (wordArray.length === 0) {
		return null;
	} else {
		for (let i = 0; i < wordArray.length; i++) {
			if (wordArray[i] === word) {
				return true;
			}
		}
	}
	return false;
}

// Iteration #7: Count repetition
const wordsCount = [
	"machine",
	"matter",
	"subset",
	"trouble",
	"starting",
	"matter",
	"eating",
	"matter",
	"truth",
	"disobedience",
	"matter",
];

function howManyTimes(wordArray, word) {
	let repeatCount = 0;
	if (wordArray.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < wordArray.length; i++) {
			if (wordArray[i] === word) {
				repeatCount += 1;
			}
		}
	}
	return repeatCount;
}

// Iteration #8: Bonus
const matrix = [
	[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
	[
		49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
		0,
	],
	[
		81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
		65,
	],
	[52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
	[
		22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
		80,
	],
	[
		24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
		50,
	],
	[
		32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
		70,
	],
	[
		67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
		21,
	],
	[
		24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
		72,
	],
	[21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
	[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
	[
		16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
		57,
	],
	[86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
	[
		19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
		40,
	],
	[4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
	[
		88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
		69,
	],
	[
		4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
		36,
	],
	[
		20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
		16,
	],
	[
		20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
		54,
	],
	[
		1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
		48,
	],
];

function greatestProduct() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
	module.exports = {
		maxOfTwoNumbers,
		findLongestWord,
		sumNumbers,
		sum,
		averageNumbers,
		averageWordLength,
		avg,
		uniquifyArray,
		doesWordExist,
		howManyTimes,
		greatestProduct,
	};
}
