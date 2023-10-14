// Iteration 1 - Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

function maxOfTwoNumbers(number1, number2) {
  if (number1 === number2) {
    return number2;
  } else if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

let number1 = 1;
let number2 = 2;
const max = maxOfTwoNumbers(number1, number2);
console.log(max);

// Iteration 2 - Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(wordsArr) {
  if (wordsArr.length === 0) {
    return null;
  }
  let longest = '';
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longest.length) {
      longest = wordsArr[i];
    }
  }
  return longest;
}

const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];
const longestWord = findLongestWord(words);
console.log(longestWord);

// Iteration 3.1 - Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sumNumbers(numbersArr) {
  let sum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sum += numbersArr[i];
  }
  return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const sumArr = sumNumbers(numbers);
console.log(sumArr);

// Iteration 3.2 - Implement the function sum() in this iteration. The function should take an array of mixed values - numbers, strings, and booleans. The function should add all the string lengths, numeric values, and numeric values of booleans to the total sum and return the sum.

function sum(mixedArr) {
  let sum = 0;
  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === 'boolean') {
      if (mixedArr[i] === true) sum += 1;
    } else if (typeof mixedArr[i] === 'string') {
      sum += mixedArr[i].length;
    } else if (typeof mixedArr[i] === 'number') {
      sum += mixedArr[i];
    } else {
      throw new Error('Sorry, this data type is not accepted');
    }
  }
  return sum;
}

const mixedArray = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const sumResult = sum(mixedArray);
console.log(sumResult);

// Iteration 4.1 - Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.

function averageNumbers(numArr) {
  if (numArr.length === 0) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum / numArr.length;
}

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const avgResult = averageNumbers(numbersAvg);
console.log(avgResult);

// Iteration 4.2 - Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words.

function averageWordLength(avgWordsArr) {
  if (avgWordsArr.length === 0) {
    return null;
  }
  let average = 0;
  for (let i = 0; i < avgWordsArr.length; i++) {
    average += avgWordsArr[i].length;
  }
  return average / avgWordsArr.length;
}
const wordsAvg = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];
const wordsAvgResult = averageWordLength(wordsAvg);
console.log(wordsAvgResult);

// Iteration 4.3 - Create function avg(arr) that receives any mixed array and calculates the average. For example, consider an array filled with numbers and/or strings and/or booleans as a mixed array.

/*Booleans: true counts as 1 and false counts as 0.
Strings: use the string length as the numeric value.*/

function avg(arr) {
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'boolean') {
      if (arr[i] === true) {
        sum += 1;
      } else {
        sum += 0;
      }
    } else if (typeof arr[i] === 'string') {
      sum += arr[i].length;
    } else if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  average = sum / arr.length;
  return average;
}
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const mixedAvgResult = avg(mixedArr);
console.log(mixedAvgResult);

// Iteration 5 - Take the following array, remove the duplicates, and return a new array. Do this in the form of a function uniquifyArray that receives an array of words as an argument.

const uniqWords = [
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
  'bring',
];

function uniquifyArray(uniqArr) {
  if (uniqArr.length === 0) {
    return null;
  }
  let unique = [];
  for (let i = 0; i < uniqArr.length; i++) {
    if (!unique.includes(uniqArr[i])) {
      unique.push(uniqArr[i]);
    }
  }
  return unique;
}

const uniqResult = uniquifyArray(uniqWords);
console.log(uniqResult);

// Iteration 6 - Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.

function doesWordExist(wordsArr, searchWord) {
  if (wordsArr.length === 0) {
    return null;
  }
  return wordsArr.includes(searchWord);
}
const wordsSearch = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];
console.log(doesWordExist(wordsSearch, 'trouble'));
console.log(doesWordExist(wordsSearch, 'rain'));

// Iteration 7 - Declare a function named howManyTimes that will take in an array of words as the first argument and a word to search for as the second argument. The function will return the number of times that word appears in the array.

function howManyTimes(wordsArr, wordSearch) {
  let wordsCount = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === wordSearch) {
      wordsCount += 1;
    }
  }
  return wordsCount;
}

const wordsRepeat = [
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
  'matter',
];

console.log(howManyTimes(wordsRepeat, 'matter'));
console.log(howManyTimes(wordsRepeat, 'subset'));
console.log(howManyTimes(wordsRepeat, 'sun'));
