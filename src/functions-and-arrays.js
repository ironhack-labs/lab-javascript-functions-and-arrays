// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (!num1 && !num2) return;
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  if (!array || array.length === 0) return null;
  let longestWord = '';
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   if (element.length > longestWord.length) longestWord = element;
  // }
  array.forEach((element) => {
    if (element.length > longestWord.length) longestWord = element;
  });
  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (!numbers || numbers.length === 0) return 0;
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

// Iteration #3.1 Bonus:
// function sum(arr) {
//   if (!arr || arr.length === 0) return 0;
//   let sum = 0;
//   arr.forEach((num) => {
//     switch (typeof num) {
//       case 'number':
//         sum += num;
//         break;
//       case 'string':
//         sum += num.length;
//         break;
//       case 'boolean':
//         if (num) sum += 1;
//         else sum += 0;
//         break;
//       default:
//       // console.log(typeof num);
//       // throw Error("Unsupported data type sir or ma'am");
//     }
//   });
//   return sum;
// }
// BONUS - Iteration #3.1: A generic sum() function
function sum(arr) {
  if (!arr) return null;

  let sum = 0;
  for (let el of arr) {
    // usamos la condición "typeof" para reusar esta función en la iteración siguiente (4.2)
    // y poder calcular directamente la suma de carácteres en el array de words
    if (typeof el === 'string') sum += el.length;
    else if (typeof el === 'object') throw new Error(`Unsupported data type sir or ma'am`);
    else sum += el;
  }
  return sum;
}

// console.log(sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}]));

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (!numbers || numbers.length === 0) return null;
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum / numbers.length;
}

// console.log(averageNumbers(numbersAvg));

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  if (!words || words.length === 0) return null;
  let sum = 0;
  words.forEach((num) => {
    sum += num.length;
  });
  return sum / words.length;
}

// Bonus - Iteration #4.1
// function avg(arr) {
//   if (!arr || arr.length === 0) return null;
//   let sum = 0;
//   arr.forEach((num) => {
//     switch (typeof num) {
//       case 'number':
//         sum += num;
//         break;
//       case 'string':
//         sum += num.length;
//         break;
//       case 'boolean':
//         if (num) sum += 1;
//         else sum += 0;
//       default:
//      () => {
          throw new Error(`Unsupported data type sir or ma'am`);
        };
//     }
//   });
//   return Math.round((sum / arr.length) * 100) / 100;
// }

function avg(arr) {
  if (!arr || arr.length === 0) return null;

  let sum = 0;
  for (let el of arr) {
    // usamos la condición "typeof" para reusar esta función en la iteración siguiente (4.2)
    // y poder calcular directamente la suma de carácteres en el array de words
    if (typeof el === 'string') sum += el.length;
    else if (typeof el === 'object') throw new Error(`Unsupported data type sir or ma'am`);
    else sum += el;
  }
  return Math.round((sum / arr.length) * 100) / 100;
}

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

function uniquifyArray(words) {
  if (!words || words.length === 0) return null;
  return [...new Set(words)];
}

// console.log(uniquifyArray(words));

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(words, word) {
  if (!words || words.length === 0) return null;
  return words.includes(word);
}

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

function howManyTimes(words, word) {
  if (!words || words.length === 0) return 0;
  let count = 0;
  words.map((wordArr) => {
    if (wordArr === word) count++;
  });
  return count;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let columns = [];
  let chunks = [];
  let bigNumber = 0;
  const getColumns = (array, column) => array.map((e) => e[column]);

  matrix.map((row, i) => {
    columns.push(getColumns(matrix, i));

    row.map((num, e) => {
      if (e + 4 <= 20) {
        let chunk = [...row.slice(e, e + 4)];
        chunks.push(chunk);
      }
    });
  });
  columns.map((column) => {
    column.map((num, e) => {
      if (e + 4 <= 20) {
        let chunk = [...column.slice(e, e + 4)];
        chunks.push(chunk);
      }
    });
  });
  chunks.map((chunk, i) => {
    let newNumber = chunk.reduce((product, n) => product * n, 1);
    if (newNumber > bigNumber) bigNumber = newNumber;
  });
  return bigNumber;
}

// greatestProduct(matrix);

function greatestProductOfDiagonals(matrix) {
  let chunks = [];
  let bigNumber = 0;

  const getDiagonals = (array, bottomToTop) => {
    let columnsLength = array.length;
    let rowsLength = array[0].length;
    let maxLength = Math.max(columnsLength, rowsLength);
    let temp;
    let returnArray = [];
    for (var i = 0; i <= 2 * (maxLength - 1); ++i) {
      temp = [];
      for (let e = columnsLength - 1; e >= 0; --e) {
        var x = i - (bottomToTop ? columnsLength - e : e);
        if (x >= 0 && x < rowsLength) {
          temp.push(array[e][x]);
        }
      }
      if (temp.length >= 4) {
        returnArray.push(temp);
      }
    }
    return returnArray;
  };
  let topToBottomDiagonals = getDiagonals(matrix, true) || [];
  let bottomToTopDiagonals = getDiagonals(matrix) || [];

  topToBottomDiagonals.map((diagonal) => {
    diagonal.map((num, e) => {
      if (e + 4 <= 20) {
        let chunk = [...diagonal.slice(e, e + 4)];
        if (chunk.length === 4) chunks.push(chunk);
      }
    });
  });

  bottomToTopDiagonals.map((diagonal) => {
    diagonal.map((num, e) => {
      if (e + 4 <= 20) {
        let chunk = [...diagonal.slice(e, e + 4)];
        if (chunk.length === 4) chunks.push(chunk);
      }
    });
  });

  chunks.map((chunk, i) => {
    let newNumber = chunk.reduce((product, n) => product * n, 1);
    if (newNumber > bigNumber) bigNumber = newNumber;
  });
  return bigNumber;
}

console.log(greatestProductOfDiagonals(matrix));
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
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
    greatestProduct
  };
}
