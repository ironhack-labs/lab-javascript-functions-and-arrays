// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
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

function findLongestWord(words) {
  if (words.length === 0) return null;
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach((each) => {
    sum += each;
  });
  return sum;
}

// Iteration #4: Calculate the average

// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0) return null;
  let sum = 0;
  for (let i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }
  return sum / numbersAvg.length;
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

function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) return null;
  let avgWords = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    avgWords += wordsArr[i].length;
  }
  return avgWords / wordsArr.length;
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

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length === 0) return null;
  return Array.from(new Set(wordsUnique));
}

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

function doesWordExist(wordsFind, word) {
  if (wordsFind.length === 0) return null;
  return wordsFind.includes(word);
}

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

function howManyTimes(wordsCount, word) {
  let numberOfTimes = 0;
  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === word) {
      numberOfTimes++;
    }
  }
  return numberOfTimes;
}
