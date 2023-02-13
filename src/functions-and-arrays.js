// Iteration #1: Find the maximum (option 1)
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

let number1 = 10;
let number2 = 8;

// Iteration #1: Find the maximum (option 2)
let maxOfTwoNumbers2 = (
  firstNumber,
  secondNumber
) => {
  firstNumber > secondNumber
    ? console.log(`${firstNumber} is bigger `)
    : console.log(`${secondNumber1} is bigger`);
};

maxOfTwoNumbers2(number1, number2);

// Iteration #2: Find longest word (option 1)
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  // "thisisthelongestword",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(inputWords) {
  let longestWord = inputWords[0];
  for (i = 0; i < inputWords.length; i++) {
    const element = inputWords[i];
    if (element.length > longestWord.length) {
      longestWord = element;
    } else {
    }
  }
  console.log(longestWord);
  return longestWord;
}

findLongestWord(words);

// Iteration #2: Find longest word (option 2)
const findLongestWord2 = (inputWords) => {
  let longestWord2 = inputWords[0];
  inputWords.forEach((word) => {
    word.length > longestWord2.length
      ? (longestWord2 = word)
      : longestWord2;
  });
  return longestWord2;
};

console.log(
  `The longest word using option2 is still ${findLongestWord2(
    words
  )}`
);

// Iteration #3: Calculate the sum

const numbers = [
  6, 12, 1, 18, 13, 16, 2, 1, 8, 10,
];

function sumNumbers(inputNumbers) {
  let sum = 0;
  for (i = 0; i < inputNumbers.length; i++) {
    const element = inputNumbers[i];
    console.log(element);
    sum += element;
  }
  return sum;
  console.log(sum);
}

sumNumbers(numbers);

// Iteration #3.1 Bonus:

const mixedArr = [
  6,
  12,
  "miami",
  1,
  true,
  "barca",
  "200",
  "lisboa",
  8,
  10,
];

function sum(inputArray) {
  let sumPolymorphism = 0;
  for (i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    if (typeof element === "number") {
      sumPolymorphism += element;
    } else if (typeof element === "string") {
      sumPolymorphism += element.length;
    } else {
    }
  }
  return sumPolymorphism;
  console.log(sumPolymorphism);
}

sum(mixedArr);

// Iteration #4: Calculate the average
// Level 1: Array of numbers (option 1)

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  const average = sum / numbers.length;
  return average;
};

console.log(
  `The average of the numbers is ${averageNumbers(
    numbersAvg
  )}`
);

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

const averageWordLength = (words) => {
  let sum = 0;
  words.forEach((word) => {
    sum += word.length;
  });
  return sum / words.length;
};

averageWordLength(wordsArr);

// Bonus - Iteration #4.3 (option 1)
const numbersBonus = [2, 6, 9, 10, 7, 4, 1, 9];

function avg() {}

// Iteration #5: Unique arrays (option 1)
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
  let newArray = [];
  wordsUnique.forEach((word) => {
    if (!newArray.includes(word)) {
      newArray.push(word);
    }
  });
  return newArray;
}

uniquifyArray(wordsUnique);

// Iteration #5: Unique arrays (option 1)

const uniquifyArray2 = (inputWords) => {
  let uniqueArray = [];
  inputWords.forEach((word) => {
    !uniqueArray.includes(word)
      ? uniqueArray.push(word)
      : uniqueArray;
  });

  return uniqueArray;
};

console.log(uniquifyArray2(wordsUnique));

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

// function doesWordExist() {}

let searchWord = "subset";

const doesWordExist = (inputWords) => {
  if (inputWords.includes(searchWord)) {
    return true;
  } else {
    return false;
  }
};

console.log(doesWordExist(wordsFind));

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

// function howManyTimes() {}

const howManyTimes = (inputWords) => {
  let recurringWord = 0;
  let newArray = [];
  inputWords.forEach((word) => {
    newArray.includes(word)
      ? recurringWord++
      : newArray.push(word);
  });
  return recurringWord;
};

console.log(howManyTimes(wordsCount));

// Iteration #8: Bonus
const matrix = [
  [
    8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7,
    78, 52, 12, 50, 77, 91, 8,
  ],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17,
    40, 98, 43, 69, 48, 4, 56, 62, 0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40,
    67, 53, 88, 30, 3, 49, 13, 36, 65,
  ],
  [
    52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56,
    1, 32, 56, 71, 37, 2, 36, 91,
  ],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36,
    54, 22, 40, 40, 28, 66, 33, 13, 80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53,
    78, 36, 84, 20, 35, 17, 12, 50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40,
    67, 59, 54, 70, 66, 18, 38, 64, 70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39,
    63, 8, 40, 91, 66, 49, 94, 21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78,
    96, 83, 14, 88, 34, 89, 63, 72,
  ],
  [
    21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14,
    0, 61, 33, 97, 34, 31, 33, 95,
  ],
  [
    78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80,
    4, 62, 16, 14, 9, 53, 56, 92,
  ],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24,
    0, 17, 54, 24, 36, 29, 85, 57,
  ],
  [
    86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37,
    44, 60, 21, 58, 51, 54, 17, 58,
  ],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13,
    86, 52, 17, 77, 4, 89, 55, 40,
  ],
  [
    4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32,
    16, 26, 26, 79, 33, 27, 98, 66,
  ],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67,
    46, 55, 12, 32, 63, 93, 53, 69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18,
    8, 46, 29, 32, 40, 62, 76, 36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99,
    69, 82, 67, 59, 85, 74, 4, 36, 16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71,
    48, 86, 81, 16, 23, 57, 5, 54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48,
    61, 43, 52, 1, 89, 19, 67, 48,
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
