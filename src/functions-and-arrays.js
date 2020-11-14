// Iteration #1: Find the maximum

let maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2){
    return num1
  }
  return num2
}
maxOfTwoNumbers(34, 98);

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// Iteration #2: Find longest word
let findLongestWord = function (wordsArray) {
  longestWord = '';
  if (wordsArray.length === 0){
      return null;
  }
	for (let i = 0; i < wordsArray.length; i++){
		if (wordsArray[i].length > longestWord.length){
				longestWord = wordsArray[i];
		}
	}
	return longestWord;
}
findLongestWord(words);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sumNumbers = function (nums) {
  suma = 0;
  for (let i = 0; i < nums.length; i++){
    suma += nums[i];
  }
  return suma;
}
sumNumbers(numbers);

// ITERARION 3 BONUSES
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

let sum = function (mixed) {
  suma = 0;
  for (let i = 0; i < mixed.length; i++){
    if (typeof(mixed[i]) === 'number'){
			suma += mixed[i];
		} else if (typeof(mixed[i]) === 'string'){
			suma += mixed[i].length;
		} else if (typeof(mixed[i]) === 'boolean'){
			if (mixed[i] === true){
				suma += 1;
			}
		} else {
      throw new Error("Unsupported data type sir or ma'am")
		}
  }
  return suma;
}
sum(mixedArr);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

let averageNumbers = function (numbers){
	if (numbers.length === 0){
		return null;
	}
	let suma = 0;
	for (let i = 0; i < numbers.length; i++){
			suma += numbers[i];
	}
	return suma / numbers.length;
}
averageNumbers(numbersAvg)

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

let averageWordLength = function (words){
	if (words.length === 0){
		return null;
	}
	number = 0;
	for (let i = 0; i < words.length; i++){
		number += words[i].length
	}
	return number / words.length;
}
averageWordLength(wordsArr);

// BONUS
let avg = function (array) {
	if (array.length === 0){
		return null;
	}

	let sum2 = 0;
	for (let i = 0; i < array.length; i++){
		if (typeof(array[i]) === 'number'){
			sum2 += array[i]
		} else if (typeof(array[i]) === 'string'){
			sum2 += array[i].length
		} else if (typeof(array[i]) === 'boolean'){
			if (array[i] === true){
				sum2 += 1
			}
		}
	}
	let averageCalculate = sum2 / array.length
	return parseFloat(averageCalculate.toFixed(2))

}
avg(mixedArr);

// Iteration #5: Unique arrays
const wordsUnique = [
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

let uniquifyArray = function (wordsArr) {

  if ( wordsArr.length === 0 ){
    return null;
  }

	newArr = [];
	for (let i = 0; i < wordsArr.length; i++){
		if ( wordsArr.indexOf(wordsArr[i]) !== wordsArr.lastIndexOf(wordsArr[i]) && newArr.indexOf(wordsArr[i]) === -1 ) {
				newArr.push(wordsArr[i]);
		} else if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])) {
			 newArr.push(wordsArr[i]);
		}
	}
return newArr;
}

uniquifyArray(wordsUnique);

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Iteration #7: Count repetition
const wordsCount = [
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

// Iteration #8: Bonus

const matrix = [
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
