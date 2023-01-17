// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  }
  if (number2 > number1) {
    return number2;
  }
  if (number1 === number2) {
    return number1;
  }
}

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

function findLongestWord(arrayData) {
  if (arrayData.length > 0) {
    let i = 0;
    let biggestWord = "";
    arrayData.forEach((el) =>
      el.length > i ? (i = el.length) && (biggestWord = el) : ""
    );
    return biggestWord;
  } else {
    return null;
  }
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let acc = 0;
  numbers.forEach((el) => (acc += el));
  return acc;
}

// Iteration #3.1 Bonus:
function sum(data) {
  let acc = 0;
  if (data) {
    data.forEach((el) => {
      let value;
      if (typeof el === "boolean") {
        if (el === true) {
          value = 1;
        }
        if (el === false) {
          value = 0;
        }
      }
      if (typeof el === "string") {
        value = el.length;
      }
      if (typeof el === "number") {
        value = el;
      }
      if (typeof el === "object" || typeof el === "array") {
        throw "msg";
      }
      acc += value;
    });
    return acc;
  }
}
sum([6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10]);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayToManipulate) {
  if (arrayToManipulate.length < 1) return null;
  let i = 0;
  arrayToManipulate.forEach((el) => (i += el));
  return i / arrayToManipulate.length;
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

function averageWordLength(arrayData) {
  if (arrayData.length < 1) return null;

  let i = 0;
  arrayData.forEach((el) => (i += el.length));
  return i / arrayData.length;
}

// Bonus - Iteration #4.1
function avg(arrayData) {
  let i = 0;
  arrayData.forEach((el) => (i += el));
  return i / arrayData.length;
}

// Iteration #5: Unique arrays
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
function uniquifyArray(arrayData) {
  if (arrayData.length === 0) return null;
  let arrayToTest = arrayData.filter(
    (el, index) => index === arrayData.indexOf(el)
  );
  return arrayToTest;
}

uniquifyArray(wordsUnique);

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
];

function doesWordExist(arrayData, word) {
  if (arrayData.length === 0) return null;
  let booleanToReturn = false;
  arrayData.forEach((el) => (word === el ? (booleanToReturn = true) : ""));
  return booleanToReturn;
}
doesWordExist(wordsFind, "machin");

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
  "matter",
  "matter",
];

function howManyTimes(arrayData, wordToSearch) {
  if (arrayData.length === 0) return 0;
  if (arrayData.indexOf(wordToSearch) === -1) return 0;
  let tst = arrayData.filter((el, index) =>
    el === wordToSearch ? arrayData.indexOf(wordToSearch) !== index : ""
  );
  if (tst.length > 0) return tst.length;
  if (tst.length === 0) return 1;
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
