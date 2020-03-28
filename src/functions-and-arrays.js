// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  if (a < b) {
    return (greatest = b);
  } else if (a > b) {
    return (greatest = a);
  } else if ((a = b)) {
    return (greatest = a);
    // console.log(`${greatest} and ${greatest} are equal`);
  }
  // console.log(`the greatest number is ${greatest}`);
}

console.log(`Iteration 1: ${maxOfTwoNumbers(4, -43)}`);

// Iteration #2: Find longest word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(array) {
  let maxLength = 0;
  let longestWord = '';
  if (array.length == 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > maxLength) {
        maxLength = array[i].length;
        longestWord = array[i];
      }
    }
    return longestWord;
  }
}

console.log(
  `Iteration 2: ${findLongestWord([
    'a',
    'zab',
    '12abc',
    '$$abcd',
    'abcde',
    'ironhack'
  ])}`
);

// console.log(findLongestWord(['bar', 'foo']));

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
  let result = 0;
  if (numbersArray.length == 0) {
    return (result = 0);
  } else {
    for (nb of numbersArray) {
      result += nb;
    }
    return result;
  }
}

console.log(`Iteration 3: ${sumNumbers([10, 5, 4, 32, 8])}`);

// Bonus - Iteration #3.1: A generic sum() function

function sum(arr) {
  let result = 0;
  if (arr.length == 0) {
    return (result = 0);
  } else {
    for (nb of arr) {
      if (typeof nb === 'object') {
        throw Error("Unsupported data type sir or ma'am");
      } else if (typeof nb === 'number') {
        result += nb;
      } else if (typeof nb === 'string') {
        result += nb.length;
      } else if (nb === true) {
        result += 1;
      } else if (nb === false) {
        result += 0;
      }
    }
    return result;
  }
}

console.log(
  `Iteration 3.1: ${sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, 10])}`
);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let countSum = 0;
  if (arr.length == 0) {
    return null;
  } else {
    for (nb of arr) {
      countSum += nb;
    }
    return (avgN = countSum / arr.length);
  }
}

console.log(`Iteration 4 level 1: ${averageNumbers([2, 8, 2])}`);

// Level 2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(arr) {
  let countLength = 0;
  if (arr.length == 0) {
    return null;
  } else {
    for (wrd of arr) {
      countLength += wrd.length;
    }
    return (avgLength = countLength / arr.length);
  }
}

console.log(
  `Iteration 4 level 2: ${averageWordLength(['Tahiti', 'Carbonara', 'Pastas'])}`
);

// Bonus - Iteration #4.1: A generic avg() function

function avg(arr) {
  let countLength = 0;
  if (arr.length == 0) {
    return null;
  } else {
    for (element of arr) {
      if (typeof element === 'number') {
        countLength += element;
      } else if (typeof element === 'string') {
        countLength += element.length;
      } else if (element === true) {
        countLength += 1;
      } else if (element === false) {
        countLength += 0;
      }
    }
  }
  return (avgL = +(countLength / arr.length).toFixed(2));
}

console.log(
  `Iteration 4.1: ${avg([
    6,
    12,
    'miami',
    1,
    'barca',
    '200',
    'lisboa',
    8,
    true
  ])}`
);

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  if (!array.length) {
    return null;
  } else {
    for (word of array) {
      if (array.indexOf(word) !== array.lastIndexOf(word)) {
        array.splice(array.lastIndexOf(word), 1);
      }
    }
  }
  return array;
}

console.log(`Iteration 5 : ${uniquifyArray(wordsUnique)}`);

// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(array, word) {
  if (!array.length) {
    return null;
  } else if (array.includes(word)) {
    return true;
  } else {
    return false;
  }
}

console.log(`Iteration 6 : ${doesWordExist(wordsFind, 'starting')}`);

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// function howManyTimes(array, word) {
//   if (!array.length) {
//     return 0;
//   } else if (array.includes(word)) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array.indexOf(word, i) !== array.lastIndexOf(word) && ) {
//         count++;
//         console.log(count);
//       }
//     }
//     return count;
//   } else {
//     return 0;
//   }
// }

function howManyTimes(array, word) {
  if (array.includes(word)) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        count++;
      }
    }
    return count;
  } else if (!array.length || !array.includes(word)) {
    return 0;
  }
}

console.log(`Iteration 7 : ${howManyTimes(wordsCount, 'matter')}`);

// Iteration #8: Bonus

const matrix = [
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

// function greatestProduct(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (
//         matrix[i][j + 1] *
//           matrix[i][j + 2] *
//           matrix[i][j + 3] *
//           matrix[i][j + 4] >
//         matrix[i + 1][j] *
//           matrix[i + 2][j] *
//           matrix[i + 3][j] *
//           matrix[i + 4][j]
//       ) {
//       }
//     }
//   }
// }

// console.log(`Iteration 7 : ${greatestProduct(matrix)}`);
