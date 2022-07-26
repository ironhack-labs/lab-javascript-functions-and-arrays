// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  let result = "";
  if (num1 === num2) {
    result = "both numbers are the same! wuTang";
  } else if (num1 > num2) {
    result = num1;
  } else {
    result = num2;
  }
  return result;
}

// console.log(`The result on iteration 1. is ${maxOfTwoNumbers(5, 8)}`);

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
  let maxLength = 0;
  let word = "";

  for (let possibleWord = 0; possibleWord < array.length; possibleWord++) {
    if (array[possibleWord].length > maxLength) {
      maxLength = array[possibleWord].length;
      word = array[possibleWord];
    }
  }
  return word;
}

// console.log(`The longest word in the array is ${findLongestWord(words)}`);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(aNumberArray) {
  if (!aNumberArray) return null;
  let sum = 0;
  for (let pieceOfArray of aNumberArray) {
    if (typeof pieceOfArray === "string") sum += pieceOfArray.length;
    else sum += pieceOfArray;
  }
  return sum;
}
// console.log(
//   `The sum of all numbers within the numbers array is = ${sumNumbers(numbers)}`
// );

// Iteration 3 - V2 - Using a complex, (what we are used to) forLoop
function sumNumbers2(aNumberArray) {
  let sum = 0;
  for (
    let pieceOfArray = 0;
    pieceOfArray < aNumberArray.length;
    pieceOfArray++
  ) {
    sum += aNumberArray[pieceOfArray];
  }
  return sum;
}
// console.log(
//   `The sum of all numbers using function sumNumbers2 within the numbers array is = ${sumNumbers2(
//     numbers
//   )}`
// );

// Iteration 3 - V3 - Using a forEach loop
function sumNumbers3() {
  let result = 0;
  numbers.forEach((aNumberArray) => {
    result += aNumberArray;
  });
  return result;
}
// console.log(
//   `The sum of all numbers using function sumNumbers3 within the numbers array is = ${sumNumbers3(
//     numbers
//   )}`
// );

// Iteration #3.1 Bonus:
function sum() {}

// Iteration #4: Calculate the average
// Level 1: Array of numbers - using validator
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(mySuperCoolArray) {
  if (!mySuperCoolArray) return null;
  else return sumNumbers(mySuperCoolArray) / mySuperCoolArray.length;
}
// console.log(
//   `The average between this set of numbers within the array is ${averageNumbers(
//     numbersAvg
//   )}`
// );

// Iteration #4: Calculate the average
// Level 1: Array of numbers - without using validator
function averageNumbers2(mySuperCoolArray) {
  return sumNumbers(mySuperCoolArray) / mySuperCoolArray.length;
}
// console.log(
//   `The average between this set of numbers within the array is ${averageNumbers2(
//     numbersAvg
//   )}`
// );

// Iteration #4: Calculate the average
// Level 1: Array of numbers - ELENA's Answer
function averageNumbers3(numbers) {
  if (!numbers.length) {
    return null;
  }
  // Manera precavida [correcta] porque estan aprendiendo
  const length = numbers.length;
  const sumNums = sumNumbers(numbers);
  // return sumNums / length
  // Manera agloremada sin la necesidad de declarar variables independientes
  const caluclation = sumNumbers(numbers) / numbers.length;
  return caluclation;
}
// console.log(
//   `The average between this set of numbers within the array is ${averageNumbers3(
//     numbersAvg
//   )}`
// );

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

// Iteration 4 - Level 2 - V1 = Using validator and a for loop to iterate over the array and we are REUSING the avergaeNumber function to the calculation for us :)
function averageWordLength(words) {
  if (!words.length) return null;
  let wordLengths = [];
  for (let index of words) {
    wordLengths.push(index.length);
  }
  return averageNumbers(wordLengths);
}
// console.log(
//   `El average dentro de esta funcion es un total de ${averageWordLength(
//     wordsArr
//   )}`
// );

// Iteration 4 - Level 2 - V2 - Albert Casas Solution
function averageWordLength2(array) {
  if (!array.length) return null;
  let maxLength = 0;
  for (let i = 0; i < array.length; i++) {
    maxLength += array[i].length;
  }
  return maxLength / array.length;
}
// console.log(
//   `El average dentro de esta funcion es un total de ${averageWordLength2(
//     wordsArr
//   )}`
// );

// Bonus - Iteration #4.1
function avg() {}

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

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// Iteration #5: Unique arrays  - V1 - using indexOf and checking agaisnt the word by implementing a conditional validation check agaisnt -1
function uniquifyArray(array) {
  let uniqueArray = [];
  array.forEach((index) => {
    if (uniqueArray.indexOf(index) === -1) {
      uniqueArray.push(index);
    }
  });
  return uniqueArray;
}
// console.log(
//   `El nuevo array de palabras sin duplicados seria ${uniquifyArray(
//     wordsUnique
//   )}`
// );

// Iteration #5: Unique arrays  - V2 - Funcion flecha con una variable settiada a un empty array y despues loopeamos en base al argumento inicial con un validador extra dentro del loop para verificar! ESTO ES HERMOSURA EN SU MAXIMO EFECTO!

// Includes Method includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const uniquifyArray2 = (words) => {
  let uniqueArray = [];
  for (let index of words) {
    if (!uniqueArray.includes(index)) uniqueArray.push(index);
  }
  return uniqueArray;
};
// console.log(
//   `El nuevo array de palabras sin duplicados seria ${uniquifyArray2(
//     wordsUnique
//   )}`
// );

// Iteration #5: Unique arrays  - V3 - HELENA Answer
function uniquifyArray3(words) {
  if (!words.length) {
    return null;
  }
  const uniqueArray = [];
  for (let i = 0; i < words.length; i++) {
    if (uniqueArray.includes(words[i]) === false) {
      uniqueArray.push(words[i]);
    }
  }
  return uniqueArray;
}
// console.log(
//   `El nuevo array de palabras sin duplicados seria ${uniquifyArray3(
//     wordsUnique
//   )}`
// );

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

// Iteration #6 - V1 - Using Conditional
function doesWordExist(arr, word) {
  if (arr.includes(word)) {
    return true;
  } else {
    return false;
  }
}
// console.log(
//   `Iteracion 6 contiene dicha palabra? si o no. Revisa tu mism@ ${doesWordExist(
//     wordsFind,
//     "machine"
//   )}`
// );

// Iteration #6 - V2 - Rodrigo - SHORT VERSION
function doesWordExist2(wordArray, word) {
  return wordArray.includes(word);
}
// console.log(
//   `Iteracion 6 contiene dicha palabra? si o no RODRIGOOOOOO. Revisa tu mism@ ${doesWordExist2(
//     wordsFind,
//     "machine"
//   )}`
// );

// Iteration #6 - V3 - Using a simple forLopp and a conditional to verify
function doesWordExist3(array, word) {
  for (let index of array) {
    if (index === word) return true;
  }
  return false;
}
// console.log(
//   `Iteracion 6 contiene dicha palabra? si o no. Revisa tu mism@ ${doesWordExist3(
//     wordsFind,
//     "machine"
//   )}`
// );

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

// Iteration #7 - V1 - Using a simple loop and then we use a conditional to check wether the word is included on the array and if it is save so it can be counted/takenIntoAccount in the new array that has been crated et to the name "count"
function howManyTimes(array, word) {
  let count = 0;
  for (let index of array) {
    if (index === word) count++;
  }
  return count;
}
// console.log(
//   `Verificamos si la palabra se repite en base a nuestra busqueda ${howManyTimes(
//     wordsCount,
//     "matter"
//   )} dentro de nuestra busqueda`
// );

// Iteration #7 - V2
function howManyTimes2(array, word) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === word) {
      count++;
    }
  }
  return count;
}
console.log(
  `Verificamos si la palabra se repite en base a nuestra busqueda ${howManyTimes2(
    wordsCount,
    "matter"
  )} dentro de nuestra busqueda`
);

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