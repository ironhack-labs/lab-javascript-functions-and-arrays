// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  if (num2 > num1) {
    return num2;
  }
  return num1
}

// Finding Longest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(array) {
  var longest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}

// Calculating a Sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arrayOfNumbers) {
  var accumulatedValue = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    accumulatedValue += arrayOfNumbers[i]
  }
  return accumulatedValue;
}

// Calculate the Average
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length == 0) {
    return;
  }
  return sumArray(arrayOfNumbers) / arrayOfNumbers.length;
}

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

function averageWordLength(arrayOfWords) {
  if (arrayOfWords.length == 0) {
    return;
  }
  var totalAverage = 0;
  for (let i = 0; i < arrayOfWords.length; i++) {
    totalAverage += arrayOfWords[i].length;
  }
  return totalAverage / arrayOfWords.length;
}

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

function uniquifyArray(arrayToUniquify) {
  if (arrayToUniquify.length === 0) {
    return;
  }
  var newUniqueWords = arrayToUniquify.filter(function (element, index) {
    return arrayToUniquify.indexOf(element) === index;
  });
  return newUniqueWords;
}

// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(arrayOfWords, wordToSearch) {
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i] === wordToSearch) {
      return true;
    }
  }
  return false;
}

// Counting Repetion
var wordsCount = [
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

function howManyTimes(arrayOfWords, wordToSearch) {
  if (arrayOfWords == ``) {
    return false;
  }
  var howManyRepeat = 0;
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (wordToSearch === arrayOfWords[i]) {
      howManyRepeat++;
    }
  }
  return howManyRepeat;
}