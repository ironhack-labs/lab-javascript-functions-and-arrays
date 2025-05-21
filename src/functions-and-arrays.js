function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

function findLongestWord(words) {
  if (!words.length) return null;

  return words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}

function sumNumbers(arr) {
  return arr.reduce((total, actual) => {
    return total + actual;
  }, 0);
  // let result = 0;

  // for(let i=0; i<arr.length; i++){
  //   result += arr[i];
  // }

  // return result;
}

function sum(arr) {
  if (!arr.length) return 0;

  return arr.reduce((acc, elem) => {
    if (typeof elem === "number") return acc + elem;
    if (typeof elem === "string") return acc + elem.length;
    if (typeof elem === "boolean") return acc + (elem ? 1 : 0);
    throw new Error("Tipo de dato no soportado");
  }, 0);
}

function averageNumbers(numbers) {
  if (!numbers.length) return null;

  return sum(numbers) / numbers.length;
}

function averageWordLength(words) {
  if (!words.length) return null;

  return sum(words) / words.length;
}

function avg(arr) {
  if (!arr.length) return null;
  return sum(arr) / arr.length;
}

function uniquifyArray(arr) {
  if (!arr.length) return null;
  return [...new Set(arr)];
}

function doesWordExist(arr, word) {
  if (!arr.length) return null;
  return arr.includes(word);
}

function howManyTimes(arr, word) {
  return arr.filter((item) => item === word).length;
}

function calculate(maxValue, currentIndex) {
  if (currentIndex < 0) currentIndex = -currentIndex;
  return currentIndex % maxValue;
}

function greatestProductOfDiagonals(matrix) {
  if (matrix.length < 4) return 0;

  let dimension = matrix.length;
  let diagonals = [];

  for (let i = 0; i < dimension; i++) {
    let counter = 1;
    let matrixIndexI = i;

    for (let j = 0; j < dimension; j++) {
      counter *=
        matrix[calculate(dimension, matrixIndexI)][calculate(dimension, j)];
      matrixIndexI++;
    }
    diagonals.push(counter);
  }

  for (let i = dimension - 1; i >= 0; i--) {
    let counter = 1;
    let matrixIndexI = i;

    for (let j = dimension - 1; j >= 0; j--) {
      counter *=
        matrix[calculate(dimension, matrixIndexI)][calculate(dimension, j)];
      matrixIndexI++;
    }
    diagonals.push(counter);
  }

  return Math.max(...diagonals);
}