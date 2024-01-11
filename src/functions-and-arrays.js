// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
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

function findLongestWord(arr) {

  if (arr.length === 0) {
    return 0;
  }

  let longestWord = "";
  let maxLength = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      longestWord = arr[i];
    }
  }
  return longestWord;
}

findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let averageNumber = sum / arr.length;
  console.log(averageNumber);
}

averageNumbers(numbers2);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, wordToSearchFor) {
  let index = arrayOfWords.indexOf(wordToSearchFor);

  if (index !== -1) {
    return true;
  } else {
    return false;
  }
}

console.log(doesWordExist(words2, "Natalia"));
