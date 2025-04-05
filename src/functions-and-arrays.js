// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
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

function findLongestWord(arraysWords) {
  let largestWord = arraysWords[0];

  if (!arraysWords.length) {
    return null;
  }

  if (arraysWords.length === 1) {
    return arraysWords[0];
  }

  for (let word of arraysWords) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }
  return largestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let total = 0;
  if (numbers.length === 0) {
    return 0;
  }

  for (let number of numbers) {
    total += number;
  }

  return total;
}

// Iteration #3.1 Bonus:

function sum(mixedArr) {
  let total = 0; // Initialize the total sum to 0

  // Iterate over each element in the array
  for (let element of mixedArr) {
    if (typeof element === "number") {
      total += element; // Add numbers directly to the total
    } else if (typeof element === "string") {
      total += element.length; // Add the length of strings to the total
    } else if (typeof element === "boolean") {
      total += element ? 1 : 0; // Convert booleans to 1 (true) or 0 (false)
    } else if (typeof element === "object") {
      // Check if it's an object (includes arrays) and throw an error
      throw new Error("Unsupported data type");
    }
  }

  return total; // Return the total sum
}

const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];


// Iteration #4: Calculate the average

// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  // Check if the array is empty and return null
  if (numbers.length === 0) {
    return null;
  }

  // Use the sumNumbers function to calculate the total sum of numbers in the array
  const totalSum = sumNumbers(numbers);

  // Calculate the average by dividing the total sum by the number of elements in the array
  const average = totalSum / numbers.length;

  return average;
}

// Helper function to calculate the sum of an array of numbers
function sumNumbers(numbers) {
  let total = 0;
  
  for (let number of numbers) {
    total += number;
  }
  
  return total;
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

function averageWordLength(words) {
  // Check if the array is empty and return null
  if (words.length === 0) {
    return null;
  }

  // Calculate the total length of all words in the array
  let totalLength = 0;
  
  for (let word of words) {
    totalLength += word.length; // Add the length of each word
  }
  
  // Calculate the average length by dividing the total length by the number of words
  const averageLength = totalLength / words.length;
  
  return averageLength;
}
// Bonus - Iteration #4.1

function avg(arr) {
  // Check for empty array and handle accordingly
  if (arr.length === 0) {
    return null; // Returning null for an empty array
  }

  let totalSum = 0;

  // Iterate over each element in the array
  for (let element of arr) {
    if (typeof element === 'number') {
      totalSum += element; // Add number directly to total
    } else if (typeof element === 'string') {
      totalSum += element.length; // Add length of string
    } else if (typeof element === 'boolean') {
      totalSum += element ? 1 : 0; // Add 1 for true, 0 for false
    }
  }

  // Calculate the average
  const average = totalSum / arr.length;

  return average;
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

function uniquifyArray(words) {
  // Check if the array is empty and return null, or handle as desired
  if (words.length === 0) {
    return null;
  }

  const uniqueWords = []; // This will store the unique words

  for (let word of words) {
    // Check if the word is not already included in the uniqueWords array
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word); // Add the word if it's not present
    }
  }

  return uniqueWords;
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

function doesWordExist(wordsArray, wordToFind) {
  // Check if the array is empty and return null
  if (wordsArray.length === 0) {
    return null;
  }

  // Check if the word is present in the array
  return wordsArray.includes(wordToFind);
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

function howManyTimes(wordsArray, wordToFind) {
  // Initialize a counter to keep track of occurrences
  let count = 0;

  // Iterate over each word in the array
  for (let word of wordsArray) {
    // Check if the current word matches the wordToFind
    if (word === wordToFind) {
      count++; // Increment the counter if there's a match
    }
  }

  // Return the total count of occurrences
  return count;
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
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let maxProduct = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // Check horizontally
      if (col <= numCols - 4) {
        const horizontalProduct = matrix[row][col] * matrix[row][col + 1] * matrix[row][col + 2] * matrix[row][col + 3];
        if (horizontalProduct > maxProduct) {
          maxProduct = horizontalProduct;
        }
      }

      // Check vertically
      if (row <= numRows - 4) {
        const verticalProduct = matrix[row][col] * matrix[row + 1][col] * matrix[row + 2][col] * matrix[row + 3][col];
        if (verticalProduct > maxProduct) {
          maxProduct = verticalProduct;
        }
      }
    }
  }

  return maxProduct;
}

// Iteration #8.2: Product of diagonals

function greatestProductOfDiagonals(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let maxProduct = 0;

  for (let row = 0; row <= numRows - 4; row++) {
    for (let col = 0; col <= numCols - 4; col++) {
      // Check top-left to bottom-right diagonal
      const diagonalProduct1 = matrix[row][col] * matrix[row + 1][col + 1] * matrix[row + 2][col + 2] * matrix[row + 3][col + 3];
      if (diagonalProduct1 > maxProduct) {
        maxProduct = diagonalProduct1;
      }

      // Check top-right to bottom-left diagonal
      if (col >= 3) {
        const diagonalProduct2 = matrix[row][col] * matrix[row + 1][col - 1] * matrix[row + 2][col - 2] * matrix[row + 3][col - 3];
        if (diagonalProduct2 > maxProduct) {
          maxProduct = diagonalProduct2;
        }
      }
    }
  }

  return maxProduct;
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
