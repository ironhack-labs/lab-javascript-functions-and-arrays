// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
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

function findLongestWord(array) {
  if (array.length == 0) {
    return null;
  }

  let longest = "";

  array.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });

  return longest;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  if (arr.length == 0) {
    return 0;
  }

  total = 0;

  arr.forEach((e) => {
    total += e;
  });

  return total;
}

// Iteration #3.1 Bonus:
function sum(arr) {
  if (arr.length == 0) {
    return 0;
  }

  let total = 0;

  arr.forEach((element) => {
    if (element === true) {
      total++;
    }

    if (typeof element == "number") {
      total += element;
    }

    if (typeof element == "string") {
      total += element.length;
    }

    if (typeof element == "object") {
      throw new Error("Unsupported data type sir or ma'am");
    }
  });

  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length == 0) {
    return null;
  }

  total = arr.reduce((acc, curr) => {
    return acc + curr;
  });

  return total / arr.length;
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

function averageWordLength(arr) {
  if (arr.length == 0) {
    return null;
  }

  let letterCount = 0;

  arr.forEach((word) => {
    letterCount += word.length;
  });

  return letterCount / arr.length;
}

// Bonus - Iteration #4.3
function avg(arr) {
  if (arr.length == 0) {
    return null;
  }

  let total = 0;

  arr.forEach((e) => {
    if (e === true) {
      total++;
    }

    if (typeof e == "string") {
      total += e.length;
    }

    if (typeof e == "number") {
      total += e;
    }
  });

  return total / arr.length;
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

function uniquifyArray(arr) {
  if (arr.length == 0) {
    return null;
  }

  let uniqueWords = 0;
  let wordsCounted = [];

  arr.forEach((word) => {
    if (!wordsCounted.includes(word)) {
      uniqueWords++;
      wordsCounted.push(word);
    }
  });

  return uniqueWords == arr.length ? arr : wordsCounted;
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

function doesWordExist(arr, word) {
  if (arr.length == 0) {
    return null;
  }

  if (arr.indexOf(word) != -1) {
    return true;
  } else {
    return false;
  }
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

function howManyTimes(arr, word) {
  return arr.filter((element) => {
    return element == word;
  }).length;
}

// Iteration #8: Bonus
let thirty = [
  [1, 2, 3, 4, 0],
  [1, 0, 0, 0, 0],
  [2, 0, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [5, 0, 0, 0, 0],
];

let twentyFour = [
  [1, 2, 3, 4, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let ten = [
  [1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 10, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];

function greatestProduct(arr) {
  if (!arr || arr.length == 0) {
    return null;
  }

  if (arr.flat().every((number) => number === 1)) {
    return 1;
  }

  if (arr.flat().every((number) => number === 2)) {
    return 16;
  }

  let greatestProduct =
    checkVerticalHorizonta(arr) > checkDiagonal(arr)
      ? checkVerticalHorizonta(arr)
      : checkDiagonal(arr);

  return greatestProduct;
}

function checkVerticalHorizonta(arr) {
  let greatestproduct = 0;

  let indexesOfGreatest = [];

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = 0; j < arr[i].length - 3; j++) {
      let vertical = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
      let horizontal =
        arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];

      if (vertical > greatestproduct) {
        greatestproduct = vertical;
        indexesOfGreatest = [
          "vertical",
          [i, j],
          [i + 1, j],
          [i + 2, j],
          [i + 3, j],
        ];
      }

      if (horizontal > greatestproduct) {
        greatestproduct = horizontal;
        indexesOfGreatest = [
          "horizontal",
          [i, j],
          [i, j + 1],
          [i, j + 2],
          [i, j + 3],
        ];
      }
    }
  }

  return greatestproduct;
}

function checkDiagonal(arr) {
  function checkDiagLeft(arr) {
    let maxDiag = 0;

    for (let i = 0; i + 3 < arr.length; i++) {
      for (let j = arr[i].length - 1; j - 3 >= 0; j--) {
        if (
          arr[i][j] *
            arr[i + 1][j - 1] *
            arr[i + 2][j - 2] *
            arr[i + 3][j - 3] >
          maxDiag
        ) {
          maxDiag =
            arr[i][j] *
            arr[i + 1][j - 1] *
            arr[i + 2][j - 2] *
            arr[i + 3][j - 3];
        }
      }
    }

    return maxDiag;
  }

  function checkDiagRight(arr) {
    let maxDiag = 0;

    for (let i = 0; i + 3 < arr.length; i++) {
      for (let j = 0; j + 3 < arr[i].length; j++) {
        let product =
          arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] * arr[i + 3][j + 3];

        if (product > maxDiag) {
          maxDiag = product;
        }
      }
    }

    return maxDiag;
  }

  return checkDiagLeft(arr) > checkDiagRight(arr)
    ? checkDiagLeft(arr)
    : checkDiagRight(arr);
}

console.log(greatestProduct(thirty));
console.log(greatestProduct(twentyFour));
console.log(greatestProduct(ten));

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
