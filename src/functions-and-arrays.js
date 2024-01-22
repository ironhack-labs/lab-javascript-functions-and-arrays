// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
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

function findLongestWord(wordArray) {
  if (wordArray.length === 0) {
    return null;
  } else if (wordArray.length === 1) {
    return wordArray[0];
  } else if (wordArray.length === 2) {
    if (wordArray[0].length == wordArray[1].length) {
      return wordArray[0];
    }
  } else {
    let longestWord = wordArray[0];
    for (i = 1; i < wordArray.length; i++) {
      if (wordArray[i].length > longestWord.length) {
        longestWord = wordArray[i];
      }
    }
    return longestWord;
  }
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else if (numbers.length == 1) {
    return numbers[0];
  } else {
    // return zero if all elements are zero
    let isZero = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 0) {
        isZero = true;
      } else {
        isZero = false;
        break;
      }
    }
    if (isZero) {
      return 0;
    } else {
      let sum = 0;
      for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
  }
}

// Iteration #3.1 Bonus:
function sum(array) {
  let sum = 0;
  // For each element in the array, do a switch case
  array.forEach((element) => {
    switch (typeof element) {
      case "object":
        throw new Error("Function cannot take objects as arguments");
      case "number":
        sum += element;
        break;
      case "string":
        sum += element.length;
        break;
      case "boolean":
        if (element) {
          sum += 1;
        }
        break;
      default:
        // do nothing if any other typeof contingency
        break;
    }
  });
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length == 0) {
    return null;
  } else if (numbers.length === 1) {
    return numbers[0];
  } else {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
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

function averageWordLength(wordArray) {
  if (wordArray.length == 0) {
    return null;
  } else if (wordArray.length === 1) {
    return wordArray[0].length;
  } else {
    let sum = 0;
    for (let i = 0; i < wordArray.length; i++) {
      sum += wordArray[i].length;
    }
    return sum / wordArray.length;
  }
}

// Bonus - Iteration #4.1
function avg(array) {
  if (array.length === 0) return null;
  let sum = 0;
  array.forEach((element) => {
    switch (typeof element) {
      case "object":
        throw new Error("Function cannot take objects as arguments");
      case "number":
        sum += element;
        break;
      case "string":
        sum += element.length;
        break;
      case "boolean":
        if (element) {
          sum += 1;
        }
        break;
      default:
        // do nothing if any other typeof contingency
        break;
    }
  });
  return sum / array.length;
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

function uniquifyArray(wordsArray) {
  if (wordsArray.length == 0) {
    return null;
  }
  const uniquifiedArray = [];

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if (uniquifiedArray.indexOf(word) === -1) {
      uniquifiedArray.push(word);
    }
  }
  return uniquifiedArray;
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

function doesWordExist(wordsToEvaluate, wordToFind) {
  if (wordsToEvaluate.length == 0) {
    return null;
  } else if (
    wordToFind === wordsToEvaluate[0] &&
    wordsToEvaluate.length === 1
  ) {
    return true;
  } else {
    if (wordsToEvaluate.indexOf(wordToFind) === -1) {
      return false;
      //Could also be modified to: else {return true}
    } else if (wordsToEvaluate.indexOf(wordToFind) !== -1) {
      return true;
    }
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

function howManyTimes(wordArray, wordToSearch) {
  if (wordArray.length == 0) {
    return 0;
  } else {
    i = 0;
    count = 0;
    while (i < wordArray.length) {
      if (wordArray[i] === wordToSearch) {
        count++;
      }
      i++;
    }
    return count;
  }
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

function greatestProduct(matrix) {
  let i = 0;
  let j;
  let currentProduct = 0;
  let biggestProduct = 0;
  let numFactors = 4;

  // Check if all elements are 1 or 2 with arrow function on a flat matrix
  let flatMatrix = matrix.flat();
  let isAllOne = flatMatrix.every((element) => element === 1);
  let isAllTwo = flatMatrix.every((element) => element === 2);

  // Exit function in case of all ones or all twos
  if (isAllOne || isAllTwo) {
    isAllOne ? (sum = 1) : (sum = 16);
    return sum;
  }

  // Iterations in each row so that j+3 is not out of bounds
  let maxIterations = matrix[0].length - numFactors;

  for (i; i < matrix.length; i++) {
    j = 0;
    for (j; j <= maxIterations; j++) {
      currentProduct =
        matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      if (currentProduct > biggestProduct) {
        biggestProduct = currentProduct;
      }
    }
  }

  i = 0;
  // Iterations in each row so that j+3 is not out of bounds
  maxIterations = matrix.length - numFactors;

  // Compare biggestProduct with matrix column products
  for (i; i < matrix[0].length; i++) {
    j = 0;
    for (j; j <= maxIterations; j++) {
      currentProduct =
        matrix[j][i] * matrix[j + 1][i] * matrix[j + 2][i] * matrix[j + 3][i];
      if (currentProduct > biggestProduct) {
        biggestProduct = currentProduct;
      }
    }
  }

  return biggestProduct;
}

function greatestProductOfDiagonals(matrix) {
  let i = 0;
  let j;
  let currentProduct = 0;
  let biggestProduct = 0;
  let maxIterationsRow;
  let maxIterationsCol;
  let numFactors = 4;

  // Iterations in each row and columns to allow for diagonal length
  maxIterationsRow = matrix.length - numFactors;
  maxIterationsCol = matrix[0].length - numFactors;

  // Forward slash diagonal product comparison
  for (i; i <= maxIterationsRow; i++) {
    j = 0;
    for (j; j <= maxIterationsCol; j++) {
      currentProduct =
        matrix[i][j] *
        matrix[i + 1][j + 1] *
        matrix[i + 2][j + 2] *
        matrix[i + 3][j + 3];
      if (currentProduct > biggestProduct) {
        biggestProduct = currentProduct;
      }
      // if there is space for more multiplications along same diagonal, keep going
      if (i <= maxIterationsRow) {
        let k = i + 1;
        let l = j + 1;
        while (k <= maxIterationsRow) {
          currentProduct =
            matrix[k][l] *
            matrix[k + 1][l + 1] *
            matrix[k + 2][l + 2] *
            matrix[k + 3][l + 3];
          if (currentProduct > biggestProduct) {
            biggestProduct = currentProduct;
          }
          l++;
          k++;
        }
      }
    }
  }

  i = 0;
  j = 0;
  let row = 0;
  let col = matrix.length - 1;

  // Backwards slash diagonal product comparison, starting at bottom left
  for (i; i <= maxIterationsRow; i++) {
    for (j; j <= maxIterationsCol; j++) {
      currentProduct =
        matrix[row][col] *
        matrix[row + 1][col - 1] *
        matrix[row + 2][col - 2] *
        matrix[row + 3][col - 3];
      if (currentProduct > biggestProduct) {
        biggestProduct = currentProduct;
      }
      // if there is space for more multiplications along same diagonal, keep going
      if (i <= maxIterationsRow) {
        let k = row + 1;
        let l = col - 1;
        while (k <= maxIterationsRow) {
          currentProduct =
            matrix[k][l] *
            matrix[k + 1][l - 1] *
            matrix[k + 2][l - 2] *
            matrix[k + 3][l - 3];
          if (currentProduct > biggestProduct) {
            biggestProduct = currentProduct;
          }
          l--;
          k++;
        }
      }
    }
  }
  return biggestProduct;
}

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
