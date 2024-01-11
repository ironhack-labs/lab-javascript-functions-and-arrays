// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numberOne, numberTwo) {
	if (numberOne > numberTwo) {
		return numberOne;
	}
	return numberTwo;
}

// Iteration 2 | Find the Longest Word
const words = [
	"mystery",
	"brother",
	"aviator",
	"crocodile",
	"pearl",
	"orchard",
	"crackpot",
];

function findLongestWord(words) {
	if (words.length === 0) {
		return 0;
	}
	let element = "";
	for (let i = 0; i < words.length; i++) {
		if (element.length < words[i].length) {
			element = words[i];
		}
	}
	return element;
}
// console.log(findLongestWord(words));
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
	if (!numbers2.length) return 0;

	return sumNumbers(numbers2) / numbers2.length;

	// let sum = 0;
	// for (let i = 0; i < numbers2.length; i++) {
	// 	sum += numbers2[i];
	// }
	// return sum / numbers2.length;
}

// Iteration 5 | Find Elements
const words2 = [
	"machine is coming today",
	"subset",
	"trouble",
	"starting",
	"matter",
	"eating",
	"truth",
	"disobedience",
];
function doesWordExist(words2, searchWord) {
	if (!words2.length) return null;
	for (let i = 0; i < words2.length; i++) {
		// console.log(`Each iteration of:${i} `, words2[i]);
		if ( words2[i].includes(searchWord)) {
			return true;
		}
	}
	return false;
	// return words2.includes('45');
}
console.log(doesWordExist(words2, "today"));
