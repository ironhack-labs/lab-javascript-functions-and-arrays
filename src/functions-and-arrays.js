// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  } else return b;
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// I like this method of reassigning to a variable. EASY and efficient.
function findLongestWord(words) {
  let longest = '';
  if (words.length === 0) return null;
  words.forEach((element) => {
    if (element.length > longest.length) longest = element;
  });
  return longest;

}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// yep. += is the best option here.
function sumNumbers(numbers) {
  if (numbers.length === 0) return 0;
  result = 0;
  numbers.forEach((element) => {
    result += element;
  });
  return result;

}

// Iteration #3.1 Bonus:

// Reassigning, adding up, and THEN returning the final result. BOOM.
function sum(items) {
  let result = 0;
  items.map((element) => {
    if (typeof element === 'number') {
      result += element;
    } else if (typeof element === 'string') {
      result += element.length;
    } else if (typeof element === 'boolean') {
      if (element) result += 1;
    } else if (typeof element === 'array' || typeof element === 'object')
      throw new Error("Unsupported data type sir or ma'am");
  });
  return result;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Must I say it? Reassign for the win! ...
// ... also great job using divide at the end ...
// in the return.
function averageNumbers(numbers) {
  let total = 0;
  if (numbers.length === 0) return null;
  numbers.forEach((element) => {
    total += element;
  });

  // could also reassign variable ...
  // and then you don't have to do line 73
  total = total / numbers.length;
  return total
  // --
  return total / numbers.length
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// I'm assuming you did the parseFloat as extra ...
// ... good stuff. Predicting errors down the road ...
// ... unless this function does not want other types
function averageWordLength(arr) {
  let result = 0;
  if (arr.length === 0) return null;
  arr.forEach((element) => {
    result += element.length;
  });
  return parseFloat((result / arr.length).toFixed(2));
}

// Bonus - Iteration #4.1
function avg(arr) {
  let result = 0;
  if (arr.length === 0) return null;
  arr.forEach((element) => {
    if (typeof element === 'number') {
      result += element;
    } else if (typeof element === 'string') {
      result += element.length;
    } else if (typeof element === 'boolean') {
      if (element) result += 1;
    } else if (typeof element === 'array' || typeof element === 'object') return "Unsupported data type sir or ma'am";
  });
  console.log('uno', parseFloat((result / arr.length).toFixed(2)))
  console.log('dos', result / arr.length)

  // Another way to do it. Both are fine.
  result = result / arr.length
  return Number(result.toFixed(2));
  // ---
  return parseFloat((result / arr.length).toFixed(2));
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

// function uniquifyArray(arg) {
//   if (arg.length === 0) return null;
//   for (let i = 0; i < arg.length; i++) {
//     console.log('uno', arg.indexOf(arg[i], i + 1))
//     console.log('dos', arg[i])

//     while (arg.indexOf(arg[i], i + 1) > 0) {
//       arg.splice(arg.indexOf(arg[i], i + 1), 1);
//     }
//   }
//   console.log('tres', arg)
//   arg.sort();
//   return arg;
// }
function uniquifyArray(args) {
  args = args.sort()
  if (args.length === 0) return null;
  let uniq = [...new Set(args)];
  // console.log('unique', uniq)
  return uniq
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Solid. Other easy way would be to write ...
// ... else and have exists as undefined
function doesWordExist(elements, word) {
  if (elements.length === 0) return null;
  let exists = false;
  elements.forEach((element) => {
    if (element === word) exists = true;
  });
  return exists;
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

// ++ makes it easy.
function howManyTimes(elements, word) {
  if (elements.length === 0) return 0;
  let times = 0;
  elements.forEach((element) => {
    if (element === word) times++;
  });
  return times;
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
  let higher = 0;
  for (let i = 0; i < 16; i++) {
    for (let ii = 0; ii < 16; ii++) {
      current = matrix[i][ii] * matrix[i][ii + 1] * matrix[i][ii + 2] * matrix[i][ii + 3];
      if (current > higher) higher = current;
    }
  }

  for (let i = 0; i < 16; i++) {
    for (let ii = 0; ii < 16; ii++) {
      current = matrix[ii][i] * matrix[ii + 1][i] * matrix[ii + 2][i] * matrix[ii + 3][i];
      if (current > higher) higher = current;
    }
  }
  return higher;
}

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
