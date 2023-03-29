// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const result = maxOfTwoNumbers(1, 2);

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

function findLongestWord(array) {
  let word = "";
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > word.length) {
      word = "";
      word += array[i];
    } else {
      continue;
    }
  }
  return word;
}
findLongestWord(words);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
  let sumTotal = 0;
  for (let i = 0; i < num.length; i++) {
    sumTotal += num[i];
  }
  return sumTotal;
}
sumNumbers(numbers);

// Iteration #3.1 Bonus: Can't get the Error to work, would love some feedback as to how to add it.
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(arr) {
  let sum = 0;

  arr.forEach(function (elem) {
    if (typeof elem === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    } 
    else if (typeof elem === "string") {
      sum += elem.length;
    } 
    else if (typeof elem !== "string") {
      sum += elem;
    }
  })
  return sum;
}
sum(mixedArr);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numsArray) {
  let total = 0;
  if (numsArray.length === 0) {
    return null;
  }
  for (let i = 0; i < numsArray.length; i++) {
    total += numsArray[i];
  }
  return total / numsArray.length;
}
averageNumbers(numbersAvg);

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

function averageWordLength(arr) {
  if (arr.length === 0) {
    return null;
  }
  let charAmount = 0;
  arr.forEach((elem) => {
    charAmount += elem.length;
  });
  return charAmount / arr.length;
}
averageWordLength(wordsArr);

// Bonus - Iteration #4.1
function avg(arr) {
  let sumTotal = 0;
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      sumTotal += arr[i].length;
    } else if (typeof arr[i] === "number") {
      sumTotal += arr[i];
    } else if (typeof arr[i] === "boolean") {
      if (arr[i] === true) {
        sumTotal += 1;
      } else if (arr[i] === false) {
        sumTotal += 0;
      }
    } else {
    }
  }
  return sumTotal / arr.length;
}
const sumTotal = avg(mixedArr);

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

function uniquifyArray(words) {
  if (words.length === 0) {
    return null;
  }
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    if (newArray.includes(words[i])) {
      continue;
    } else {
      newArray.push(words[i]);
    }
  }
  return newArray;
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

function doesWordExist(words, word) {
  if (words.length === 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      return true;
    }
  }
  return false;
}
doesWordExist(wordsFind, "matter");

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

function howManyTimes(words, word) {
  if (words.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== word) {
      continue;
    } else if (words[i] === word) {
      sum += 1;
    }
  }
  return sum;
}

howManyTimes(wordsCount, "matter");

// Iteration #8: Bonus
const matrix = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 4, 5],
];

function greatestProduct(numArrays) {}

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
