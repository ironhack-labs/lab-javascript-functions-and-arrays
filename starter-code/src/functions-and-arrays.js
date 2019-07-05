// Find the maximum
function maxOfTwoNumbers(first, second) {
  if (first > second) {
    return first;
  } else if (first < second) {
    return second;
  } else {
    return first;
  }
}

// Finding Longest Word

var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(words) {
  if (words == 0) {
    return undefined;
  }

  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers) {
  let mySum = 0;

  for (let i = 0; i < numbers.length; i++) {
    mySum = mySum + numbers[i];
  }

  return mySum;
}

sumArray(numbers);

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let sum = 0;
  let average = 0;

  if (numbersAvg == 0) {
    return undefined;
  }

  for (let i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
    average = sum / numbersAvg.length;
  }
  return average;
}

averageNumbers(numbersAvg);

// Array of Strings
var wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];

function averageWordLength(wordsArr) {
  let sumLength = 0;
  let averageLength = 0;

  if (wordsArr == 0) {
    return undefined;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    sumLength += wordsArr[i].length;
    averageLength = sumLength / wordsArr.length;
  }
  return averageLength;
}

averageWordLength(wordsArr);

// Unique Arrays
var wordsUnique = [
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
  "bring"
];

function uniquifyArray(wordsUnique) {
  let repeated = {};
  let uniqueArray = [];

  if (wordsUnique == 0) {
    return undefined;
  }

  for (let i = 0; i < wordsUnique.length; i++) {
    if (!(wordsUnique[i] in repeated)) {
      uniqueArray.push(wordsUnique[i]);
      repeated[wordsUnique[i]] = true;
    }
  }
  return uniqueArray;
}

uniquifyArray(wordsUnique);

// Finding Elements
var wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

function doesWordExist(wordsFind, myWord) {
  if (wordsFind == 0) {
    return false;
  }

  for (let i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] == myWord) {
      return true;
    }
  }
  return false;
}

doesWordExist(wordsFind, "machine");

// Counting Repetion //
var wordsCount = [
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
  "matter"
];
