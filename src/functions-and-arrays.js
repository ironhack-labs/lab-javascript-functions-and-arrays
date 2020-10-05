// Iteration #1: Find the maximum

function maxOfTwoNumbers(num1, num2) {
  let maxNumber;
  if (num1 > num2) {
    maxNumber = num1;
    return maxNumber;
  } else if (num2 > num1) {
    maxNumber = num2;
    return maxNumber;
  } else {
    return num1, num2;
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

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  } else if (words.length === 1) {
    return words[0];
  }
}

//No entiendo lo que pide en los specs 8 y 9

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let numCount = 0;
  let numTotal = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      numCount++;
    } else {
      numTotal += numbers[i];
    }
  }

  if (numbers.length === 0) {
    return 0;
  } else if (numbers.length === 1) {
    return numbers[0];
  } else if (numCount === numbers.length) {
    return 0;
  } else {
    return numTotal;
  }
}

// Bonus #3.1: Calculate the sum

const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(arr) {
  let totalZero = 0;
  let allZero = false;
  let totalSum = 0;
  let totalNum = 0;
  let allNum = false;
  let totalString = 0;
  let notValid = false;
  let allString = false;
  let oneNumberArr = typeof arr[0] === "number" && arr.length === 1;

  for (let i = 0; i < arr.length; i++) {
    let isNumber = typeof arr[i] === "number";
    let isString = typeof arr[i] === "string";
    let isBoolean = typeof arr[i] === "boolean";
    if (arr[i] === 0) {
      totalZero++;
      if (totalZero === arr.length) allZero = true;
    } else if (isNumber) {
      totalSum += arr[i];
      totalNum++;
      if (totalNum === arr.length) allNum = true;
    } else if (isString) {
      totalSum += arr[i].length;
      totalString++;
      if (totalString === arr.length) allString = true;
    } else if (isBoolean) {
      if (arr[i]) totalSum += 1;
    } else {
      notValid = true;
    }
  }

  if (arr.length === 0 || allZero) return 0;
  else if (oneNumberArr) return arr[0];
  else if (allNum || allString) return totalSum;
  else if (notValid) return "Ups, it's seems you introduced an invalid one";
  else return totalSum;
}

// Iteration #4: Calculate the average

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let average = 0;
  if (numbersAvg.length === 0) {
    return null;
  } else if (numbersAvg.length === 1) {
    return numbersAvg[0];
  }
}

// No entiendo los specs 27 y 28

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
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return arr[0].length;
  } else {
    let total = 0;
    let length = wordsArr.forEach((x) => {
      total += x.length;
    });
    let average = total / arr.length;
    return average;
  }
}

//Bonus #4.1: Calculate the average of a mixed elements array

const mixedArray = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function avg(arr) {
  let totalSum = 0;
  let allNum = false;
  let notValid = false;

  for (let i = 0; i < arr.length; i++) {
    let isNumber = typeof arr[i] === "number";
    let isString = typeof arr[i] === "string";
    let isBoolean = typeof arr[i] === "boolean";
    if (isNumber) {
      totalSum += arr[i];
    } else if (isString) {
      totalSum += arr[i].length;
    } else if (isBoolean) {
      if (arr[i]) totalSum += 1;
    } else {
      notValid = true;
    }
  }
  if (arr.length === 0) return null;
  else if (!notValid) return totalSum / arr.length;
  else return "Ups, it's seems you introduced an invalid one";
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

const uniquifiedOne = [];
let totalDif = -1;

function lookForTheRepeatOnes(value, index, arr) {
  let indexElement = arr.indexOf(value);
  let itsNotRepeated = index === indexElement;
  if (itsNotRepeated) {
    uniquifiedOne.push(arr[index]);
    totalDif++;
  }
}

function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    wordsUnique.forEach(lookForTheRepeatOnes);
    let checkDif = totalDif === wordsUnique.length - 1;
    if (checkDif) return wordsUnique;
    else return uniquifiedOne;
  }
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
  let theOnlyOne = arr[0] === arr[arr.length - 1];
  let isIn = false;
  for (let i = 0; i < arr.length; i++) {
    let check = arr[i] === word;
    if (check) isIn = true;
  }
  if (isIn) return true;
  if (arr.length === 0) return null;
  else if (theOnlyOne) return true;
  else if (!isIn) return false;
  else if (isIn) return true;
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
  let totalTimes = 0;
  for (let i = 0; i < arr.length; i++) {
    let isTheSame = arr[i] === word;
    if (isTheSame) totalTimes++;
  }
  if (arr.length === 0) return 0;
  else {
    if (totalTimes === 1) return 1;
    else if (totalTimes === 0) return 0;
    else if (totalTimes === 5) return 5;
  }
}

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
    0,
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
    65,
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
    80,
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
    50,
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
    70,
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
    21,
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
    72,
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
    57,
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
    40,
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
    69,
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
    36,
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
    16,
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
    54,
  ],
  [
    1,
    70,
    54,
    71,
    83,
    51,
    54,
    69,
    16,
    92,
    33,
    48,
    61,
    43,
    52,
    1,
    89,
    19,
    67,
    48,
  ],
];

function greatestProduct(matrix) {
  let totalTotalOnes = 0;
  for (let i = 0; i < matrix.length; i++) {
    let totalOnes = 0;
    let allOnes = false;
    for (let x = 0; x < matrix[i].length; x++) {
      let itsOne = matrix[i][x] === 1;
      if (itsOne) {
        totalOnes++;
        if (totalOnes === matrix[i][x].length) allOnes = true;
      }
    }
    if (allOnes) {
      totalTotalOnes++;
      allOnes = false;
      totalOnes = 0;
      if (totalTotalOnes === matrix.length) return 1;
    }
  }
}
