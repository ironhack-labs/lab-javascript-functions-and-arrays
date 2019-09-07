// Find the maximum


function maxOfTwoNumbers(number1, number2) {

	if (number1 > number2) {

		console.log(`${number1} is higher than ${number2}`);
		return number1;
	} else if (number1 < number2) {

		console.log(`${number2} is higher than ${number1}`);
		return number2;
	} else {
		console.log(`${number2} is equal than ${number1}`);
		return number1;
	}
}

maxOfTwoNumbers(2, 1);
maxOfTwoNumbers(1, 3);
maxOfTwoNumbers(4, 4);


// Finding Longest Word
var words = [
	'mystery',
	'brother',
	'aviator',
	'crocodile',
	'pearl',
	'orchard',// Finding Longest Word
var words = [
	'mystery',
	'brother',
	'aviator',
	'crocodile',
	'pearl',
	'orchard',
	'crackpot'
];

var empty = [];

function findLongestWord(word) {
	var longestWord = word.sort(function (a, b) {
		return b.length - a.length;
	})

	if (word.length === 0) {
		return null;
	} else {
		return longestWord[0];
	}
}

findLongestWord(words);
findLongestWord(empty);
	'crackpot'
];

var empty = [];

function findLongestWord(word) {
	var longestWord = word.sort(function (a, b) {
		return b.length - a.length;
	})

	if (word.length === 0) {
		return null;
	} else {
		return longestWord[0];
	}
}

findLongestWord(words);
findLongestWord(empty);

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var numbers1 = []


function sumArray(number) {
	if (number.length === 0) {
		return 0;
	} else {
		return number.reduce(function (a, b) {
			return a + b
		});
	}
}

sumArray(numbers1)

// Calculate the Average


var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
var numbersAvg1 = [];
var numbersAvg3 = [8];

function averageNumbers(avgNumber) {
	if (avgNumber.length === 0) {
		return null;
	} else {
		return (avgNumber.reduce(function (a, b) {
			return a + b
		})) / avgNumber.length;
	}
}

averageNumbers(numbersAvg);
averageNumbers(numbersAvg1);
averageNumbers(numbersAvg3);

// Array of Strings
var wordsArr = [
	'seat',
	'correspond',
	'linen',
	'motif',
	'hole',
	'smell',
	'smart',
	'chaos',
	'fuel',
	'palace'
];

var wordsArr1 = [];
var wordsArr2 = ["pppppppp"];


function averageWordLength(wordsAvg) {

	if (wordsAvg.length === 0) {
		return null;

	} else {

		var arrayLength = wordsAvg.length;
		var joined = wordsAvg.join(``);
		var result = joined.length / arrayLength;

		return result;
	}
}

averageWordLength(wordsArr);
averageWordLength(wordsArr1);
averageWordLength(wordsArr2);


// Unique Arrays
var wordsUnique = [
	'crab',
	'poison',
	'contagious',
	'simple',
	'bring',
	'sharp',
	'playground',
	'poison',
	'communion',
	'simple',
	'bring'
];

function uniquifyArray(wordsUnique0) {


	return wordsUnique0.filter((e, i) => wordsUnique0.indexOf(e) >= i)

}

uniquifyArray(wordsUnique);

// Finding Elements
var wordsFind1 = [
	'machine',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'truth',
	'disobedience'
];

var searchWord1 = 'disobedience';
var searchWord2 = 'dsdad';
var wordsFind2 = [];

function doesWordExist(wordsFind, searchWord) {


	if (wordsFind.includes(searchWord) === true) {
		return true
	} else if

	(wordsFind.includes(searchWord) === false) {
		return false
	}

}

doesWordExist(wordsFind1, searchWord1);
doesWordExist(wordsFind1, searchWord2);
doesWordExist(wordsFind2, searchWord2);

// Counting Repetion
var wordsCount0 = [
	'machine',
	'matter',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'matter',
	'truth',
	'disobedience',
	'matter'
];


var searchElement0 = 'matter';


function howManyTimes(wordsCount, searchElement) {
	var results = [];
	var indexes = wordsCount.indexOf(searchElement);
	while (indexes != -1) {
		results.push(indexes);
		indexes = wordsCount.indexOf(searchElement, indexes + 1);
	}
	console.log(results.length);
	return results.length;

}

howManyTimes(wordsCount0, searchElement0)

// Bonus Quest

var matrix1 = [
	[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
	[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
	[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
	[52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
	[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
	[24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
	[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
	[67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
	[24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
	[21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
	[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
	[16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
	[86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
	[19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
	[4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
	[88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
	[4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
	[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
	[20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
	[1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

matrix2 = [
	[1, 1, 1],
	[1, 1, 1],
	[1, 1, 1]
];


console.log(matrix1);
//console.log(matrix2);

function greatestProduct(matrix) {

	for (var i = 0; i < matrix.length - 1; i++) {

		var row = matrix[i];

		for (var j = 0; j < row.length - 1; j++) {
			var column = row[j];
			var results = [];
			var result = matrix[i][j] * matrix[i + 1][j] * matrix[i][j + 1] * matrix[i + 1][j + 1];
			results.push(result);
			console.log(results);
			console.log(results);
			return results[0];


		}
	}

}

greatestProduct(matrix1);
greatestProduct(matrix2);