// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number1 < number2) {
    return number2;
  } else {
    return number1;
  }
}

console.log(maxOfTwoNumbers(20, 39));

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
  let longestElement = "";
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.length > longestElement.length) {
      longestElement = element;
    } else {
      continue;
    }
  }
  return longestElement;
}

let result = findLongestWord(words);
console.log(result);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  if (array.length === 0) {
    return 0;
  }
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (number === 0) {
      return 0;
    } else {
      totalSum += number;
    }
  }
  return totalSum;
}

console.log(sumNumbers(numbers));

// Iteration #3.1 Bonus:
function sum() {}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return null;
  }
  let totalArray = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      return 0;
    } else {
      totalArray += array[i];
    }
  }
  return totalArray / array.length;
}
console.log(averageNumbers(numbersAvg));

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

function averageWordLength(array) {
  if (array.length === 0) {
    return null;
  }
  let charCount = 0;
  for (let i = 0; i < array.length; i++) {
    let chars = array[i].length;
    if (array[i] === 0) {
      return 0;
    } else {
      charCount += chars;
    }
  }
  return charCount / array.length;
}
console.log(averageWordLength(wordsArr));

// Bonus - Iteration #4.1
function avg() {}

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

function uniquifyArray(array) {
  if (array.length === 0) {
    return null;
  }

  let string = "";
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

console.log(uniquifyArray(wordsUnique));

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

function doesWordExist(array, word) {
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (array.includes(word)) {
      return true;
    }
    return false;
  }
}

console.log(doesWordExist(wordsFind, "disobedience"));

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
];

function howManyTimes(array, word) {
  let times = 0;

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (item === word) {
      times += 1;
    }
  }
  return times;
}

console.log(howManyTimes(wordsCount, "matter"));
