// Iteration #1: Find the maximum
function maxOfTwoNumbers (x, y) {
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
    return x; // or 'y' because they are the same
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  } else if (words.length === 1) {
    return words[0];
  }

  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) {
      return 0;
    } 
  
  let totalSum = 0

  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }

  return totalSum;
}

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(mixedArr) {
  
  let total = 0;

  for (let i = 0; i < mixedArr.length; i++) {
    const value = mixedArr[i];
    if (typeof value === "number") {
      total += value; 
    } else if (typeof value === "string") {
      total += value.length; // Convierto el string a número utilizando su longitud
    } else if (typeof value === "boolean") {
      total += value ? 1 : 0; // True = 1, false = 0
    } else {
      throw new Error(`Unsupported data type at index ${i}: ${value}`)
    }

  }

  return total;
}

// console.log(sum(mixedArr)); // should return: 57

// Iteration #4: Calculate the average

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {

  if (numbersAvg.length === 0) {
    return null;
  }  

  let sum = 0;

  for (let i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }

  return sum / numbersAvg.length;

}

// console.log(averageNumbers(numbersAvg)); // Devuelve 6

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  
  if (wordsArr.length === 0) {
    return null;
  }

  let totalLength = 0;

  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
     if (typeof word === "string"){ 
      totalLength += word.length;
    }
  }

return totalLength / wordsArr.length;  

}

// console.log(averageWordLength(wordsArr)); // Termina dando 5.3

// Bonus - Iteration #4.1

const arr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arr) {

  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (typeof value === "number") {
      sum += value;
    } else if (typeof value === "string") {
      sum += value.length;
    } else if (typeof value === "boolean") {
      sum += value ? 1 : 0;
    }
  }
  
  return sum / arr.length;
}

// console.log(avg(arr));// should return: 5.7

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

function uniquifyArray(arrayOfWords) {
  if (arrayOfWords.length === 0) {
    return null;
  }
  
  let newArray = [];

  for (let i = 0; i < arrayOfWords.length; i++){
    let word = arrayOfWords[i]; 
    if (newArray.includes(word) === false) {
      newArray.push(word);
    } 
  }
  
  return newArray;
}

// console.log(uniquifyArray(wordsUnique)); // Da como resultado 8 palabras.

// Iteration #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(listOfWords, wordToFind) {
  
  if (listOfWords.length === 0) {
    return null;
  }
  
  if (listOfWords.includes(wordToFind)) {
    return true;
  } else {
    return false;
  }
}

// console.log(doesWordExist(wordsFind, 'starting'));

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

function howManyTimes(arrayOfWords, wordToCount) {
  
  if (arrayOfWords === 0) {
    return 0;
  }

  let appearances = 0;

  for (let i = 0; i < arrayOfWords.length; i++) {
    let word = arrayOfWords[i];
    if (word === wordToCount) {
      appearances += 1;
    }
  }

  return appearances;
}

// console.log(howManyTimes(wordsCount, "subset"));

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
  let maxProduct = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      
      // Horizontal (derecha)
      if (col + 3 < matrix[row].length) {
        const horizontalProduct = matrix[row][col] * matrix[row][col + 1] * matrix[row][col + 2] * matrix[row][col + 3];
        if (horizontalProduct > maxProduct) maxProduct = horizontalProduct;
      }

      // Vertical (abajo)
      if (row + 3 < matrix.length) {
        const verticalProduct = matrix[row][col] * matrix[row + 1][col] * matrix[row + 2][col] * matrix[row + 3][col];
        if (verticalProduct > maxProduct) maxProduct = verticalProduct;
      }
    }
  }

  return maxProduct;
}

console.log(greatestProduct(matrix))



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