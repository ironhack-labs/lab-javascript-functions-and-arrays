// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
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

function findLongestWord(words) {
  if (words.length === 0) return 0;

  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) longestWord = word;
  });

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersToSum) {

  if (numbersToSum.length === 0) return 0;

  let initialValue = 0;
  return numbersToSum.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

  //alternative answer
  // let sum = 0;
  // numbersToSum.forEach((number) => (sum += number));
  // return sum
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) return 0;

  //by using the prev functions above
  return sumNumbers(numbers) / numbers.length;
}

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

function doesWordExist(words, targetWord) {

  if (words.length === 0) return null

  return words.includes(targetWord) ? true : false
}
