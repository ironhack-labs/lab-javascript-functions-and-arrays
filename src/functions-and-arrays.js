// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a < b) {
    return b;
  } else if (a > b) {
    return a;
  } else if (a === b) {
    return a;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longestWord = null;
  let lengthOfLongestWord = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > lengthOfLongestWord) {
      lengthOfLongestWord = words[i].length;
      longestWord = words[i];
    }
  }

  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let summe = 0;

  for (let i = 0; i < numbers.length; i++) {
    summe += numbers[i];
  }
  return summe;
}

// Iteration #3.1 Bonus:

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(mixedArr) {
  let mixedSum = 0;
  for (let j = 0; j < mixedArr.length; j++) {
    if (typeof mixedArr[j] === 'boolean') {
      mixedSum += Number(mixedArr[j]);
    } else if (typeof mixedArr[j] === 'string') {
      mixedSum += mixedArr[j].length;
    } else if (typeof mixedArr[j] === 'number') {
      mixedSum += mixedArr[j];
    } else {
      throw "Unsupported data type sir or ma'am";
    }
  }
  return mixedSum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [5, 10];

function averageNumbers(numbersAvg) {
  let sumOfNumbersAvg = null;
  const numbersInArray = numbersAvg.length - 1;
  let average = sumOfNumbersAvg / numbersInArray;
  for (let c = 0; c < numbersAvg.length; c++) {
    sumOfNumbersAvg += numbersAvg[c];
  }
  if (numbersAvg.length === 1) {
    return numbersAvg[0];
  } else if (numbersAvg.length > 0) {
    average = sumOfNumbersAvg / (numbersInArray + 1);
    return average;
  } else {
    return null;
  }
}

// Level 2: Array of strings
const wordsArr = ['seat'];

function averageWordLength(wordsArr) {
  let singleWordCount = null;
  const lengthWordsArr = wordsArr.length - 1;
  let avgWordLength = singleWordCount / lengthWordsArr;
  for (let a = 0; a < wordsArr.length; a++) {
    singleWordCount += wordsArr[a].length;
  }
  if (wordsArr.length === 1) {
    return wordsArr[0].length;
  } else if (wordsArr.length > 0) {
    avgWordLength = singleWordCount / (lengthWordsArr + 1);
    return avgWordLength;
  } else {
    return null;
  }
}

// Bonus - Iteration #4.1

/*
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

let mixedSum = 0;

function sum(mixedArr) {
  for (let j = 0; j < mixedArr.length; j++) {
    if (typeof mixedArr[j] === 'boolean') {
      mixedSum += Number(mixedArr[j]);
    } else if (typeof mixedArr[j] === 'string') {
      mixedSum += mixedArr[j].length;
    } else if (typeof mixedArr[j] === 'number') {
      mixedSum += mixedArr[j];
    }
  }
  return mixedSum;
}

sum(mixedArr);
*/

// INFO: The above code was already executed in the previous exercise and can be re-used for this function. The previous function calculated the sum of mixedArr and stored it in the mixedSum variable. The avg() will just divide mixedSum / mixedArr.length
let mixedAvg = 0;
let mixedSum = 0;

function avg(mixedArr) {
  mixedAvg = mixedSum / mixedArr.length;
  return mixedAvg;
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

let uniqueArray = [];

function uniquifyArray(wordsUnique) {
  for (let z = 0; z < wordsUnique.length; z++) {
    if (uniqueArray.indexOf(wordsUnique[z]) === -1) {
      // if indexOf can't find the word, it returns -1
      uniqueArray.push(wordsUnique[z]);
    }
  }
  return uniqueArray;
}

uniquifyArray(wordsUnique);

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

let keyword = 'truth';
let t = 0;
let itsTrue = 0;
let itsFalse = 0;

function doesWordExist(wordsFind, keyword) {
  while (itsTrue === 0) {
    if (wordsFind[t].includes(keyword)) {
      console.log('True');
      return true;
    } else if (t < wordsFind.length) {
      t++;
      console.log(t);
    } else if (t === wordsFind.length - 1) {
      console.log('False');
      return false;
    }
  }
}

doesWordExist(wordsFind, keyword);

// Alternative solution with for loop - but have to do two if/else if iterations

/*function doesWordExist(wordsFind, keyword) {
  for (t = 0; t < wordsFind.length; t++) {
    if (wordsFind[t].includes(keyword)) {
      console.log(wordsFind[t]);
      itsTrue++;
    } else {
      console.log('Nope!');
      itsFalse ++;
    }
  }
  if (itsTrue !== 0) {
    console.log('True');
    return true;
  } else if (itsFalse !== 0) {
    console.log('False');
    return false;
  }
}

doesWordExist(wordsFind, keyword);
console.log(itsTrue);
console.log(itsFalse);

*/

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

let countedWords = 0;
let searchTerm = 'matter';

function howManyTimes(wordsCount, searchTerm) {
  for (let p = 0; p < wordsCount.length; p++) {
    if (wordsCount[p] === searchTerm) {
      countedWords++;
    }
  }
  return countedWords;
}

howManyTimes(wordsCount, searchTerm);

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

function greatestProduct() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
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
    greatestProduct
  };
}
