// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
// Finding Longest Word
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(words) {
  var longestWord = words[0];
  for (var i = 1; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  // if (arrayOfNumbers.length === 0) {
  //   return undefined;
  // }
  return arrayOfNumbers.length === 0
    ? undefined
    : sumArray(arrayOfNumbers) / arrayOfNumbers.length;
}

// Array of Strings
var wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];

function averageWordLength(arrayOfWords) {
  // if (arrayOfWords.length === 0) {
  //   return undefined;
  // }
  var sum = arrayOfWords.reduce(
    (previousValue, currentValue) => previousValue + currentValue.length,
    0
  );
  return arrayOfWords.length === 0 ? undefined : sum / arrayOfWords.length;
}

// Unique Arrays
var wordsUnique = [
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
  "bring"
];

function uniquifyArray(arrayOfWords) {
  var uniqueArray = [];
  for (i = arrayOfWords.length - 1; i >= 0; i--) {
    var currentItem = arrayOfWords[i];
    if (arrayOfWords.indexOf(currentItem) === i) {
      uniqueArray.unshift(currentItem);
    }
  }
  return uniqueArray.length === 0 ? undefined : uniqueArray;
}

// Finding Elements
var wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

function doesWordExist(arrayOfWords, word) {
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].toUpperCase() === word.toUpperCase()) {
      return true;
    }
  }
  return false;
}

// Counting Repetion
var wordsCount = [
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
  "matter"
];

function howManyTimes(arrayOfWords, word) {
  var count = 0;
  for (wordIndex in arrayOfWords) {
    if (arrayOfWords[wordIndex].toUpperCase() === word.toUpperCase()) {
      count++;
    }
  }
  return arrayOfWords.length === 0 ? false : count;
}
// Bonus Quest

function greatestProduct(matrix) {
  var greatestProduct = getProductFromArray(matrix[0], 4);
  var greatestProductVertical = getProductFromCol(matrix, 4);
  for (var i = 0; i < matrix.length; i++) {
    var greatesProductRow = getProductFromArray(matrix[i], 4);
    var currentRow = matrix[i];
    for (var j = 0; j < currentRow.length - 4; j++) {
      if (currentRow[j] === 0) j += 5;
      // continue;
      if (currentRow[j] < currentRow[j + 4]) {
        greatesProductRow = getProductFromArray(currentRow, 4, j + 1);
      }
    }
    if (greatesProductRow > greatestProduct) {
      greatestProduct = greatesProductRow;
    }
  }
  for (var i = 0; i < matrix[0].length; i++) {
    var greatesProductCol = getProductFromCol(matrix, 4, i, 0);
    for (var j = 0; j < matrix.length - 4; j++) {
      if (matrix[j][i] === 0) {
        j += 4;
      } else {
        if (matrix[j][i] < matrix[j + 4][i]) {
          greatesProductCol = getProductFromCol(matrix, 4, i, j + 1);
        }
      }
    }
    if (greatesProductCol > greatestProductVertical) {
      greatestProductVertical = greatesProductCol;
    }
  }
  return greatestProduct > greatestProductVertical
    ? greatestProduct
    : greatestProductVertical;
}

function getProductFromCol(
  matrix,
  noOfFactors,
  colIndex = 0,
  startRowIndex = 0
) {
  if (matrix.length === 0) return undefined;
  if (noOfFactors === 0) return 0;
  if (matrix.length - startRowIndex < noOfFactors) return undefined;
  var product = matrix[startRowIndex][colIndex];
  for (var i = startRowIndex + 1; i < noOfFactors + startRowIndex; i++) {
    product *= matrix[i][colIndex];
  }
  return product;
}

function getProductFromArray(array, noOfFactors, startIndex = 0) {
  if (array.length === 0) return undefined;
  if (noOfFactors === 0) return 0;
  if (array.length - startIndex < noOfFactors) return undefined;
  var product = array[startIndex];
  for (var i = startIndex + 1; i < noOfFactors + startIndex; i++) {
    product *= array[i];
    console.log("current Factor : " + array[i]);
  }
  return product;
}
var matrix = [
  [0, 2, 4, 2, 1],
  [3, 2, 1, 3, 2],
  [0, 2, 4, 2, 1],
  [0, 2, 4, 2, 1],
  [0, 2, 4, 2, 1]
];

var matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    4,
    56,
    62,
    0
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    3,
    49,
    13,
    36,
    65
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80
  ],
  [
    24,
    47,
    32,
    60,
    99,
    3,
    45,
    2,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70
  ],
  [
    67,
    26,
    20,
    68,
    2,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    8,
    40,
    91,
    66,
    49,
    94,
    21
  ],
  [
    24,
    55,
    58,
    5,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16,
    39,
    5,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    0,
    17,
    54,
    24,
    36,
    29,
    85,
    57
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19,
    80,
    81,
    68,
    5,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    4,
    89,
    55,
    40
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    3,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69
  ],
  [
    4,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    8,
    46,
    29,
    32,
    40,
    62,
    76,
    36
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    4,
    36,
    16
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    1,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    5,
    54
  ],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
