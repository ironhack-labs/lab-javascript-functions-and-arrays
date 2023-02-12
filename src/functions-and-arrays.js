/* Iteration #1: Find the maximum
Instructions: Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

1A) Longer version: 
function maxOfTwoNumbers(number1,number2) {
  return number1 > number2 ? number1 : number2;
}
*/

// 1B) Shorter version:
maxOfTwoNumbers = (number1,number2) =>  number1 > number2 ? number1 : number2;

/* Iteration #2: Find longest word
Instructions: Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.*/

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

/*2A) Longer version:
function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  else {
  let longestWord="";
  for (let i=0; i<words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
   }
  return longestWord;
  }
}*/

//2B) Shorter version: 
findLongestWord = words => {
  let longestWord="";
  for (let i=0; i<words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
      }
    }
  return (words.length === 0) ? null : longestWord;
}

/* Iteration #3: Calculate the sum
Instructions: Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course, we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice the "declarative" way of adding values, using loops.*/

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

/*3A) Longer version 

function sumNumbers(numbers) {
  let sum=0;
  for (let i=0; i<numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
} */

//3B) Shorter version:
sumNumbers = numbers => {let sum=0; for (let i=0; i<numbers.length; i++) { sum += numbers[i];} return sum;}

/* Iteration #3.1 Bonus:
Instructions: Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course, we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice the "declarative" way of adding values, using loops.*/
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

/*3.1A) Longer version: 
function sum(mixedArr) {  
  let sum=0;
  for (let i=0; i<mixedArr.length; i++) {
    if (typeof(mixedArr[i]) === "number") {
      sum += mixedArr[i];
    }
    else if (typeof(mixedArr[i]) === "string") {
      sum += mixedArr[i].length;
    }
    else if (typeof(mixedArr[i]) === "boolean") {
      sum += Number(mixedArr[i]);
    }
    else if (typeof(mixedArr[i]) === "object" || typeof(mixedArr[i]) === "array") {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return sum;
}
*/

//3.1B) Shorter version: 
sum = mixedArr => {  
  let sum=0;
  for (let i=0; i<mixedArr.length; i++) {
    if (typeof(mixedArr[i]) === "number") {
      sum += mixedArr[i];
    }
    else if (typeof(mixedArr[i]) === "string") {
      sum += mixedArr[i].length;
    }
    else if (typeof(mixedArr[i]) === "boolean") {
      sum += Number(mixedArr[i]);
    }
    else if (typeof(mixedArr[i]) === "object" || typeof(mixedArr[i]) === "array") {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return sum;
}

/* Iteration #4: Calculate the average
Level 4.1: Array of numbers
Instructions: Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.*/
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

/*4.1A) Longer version: 
function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0) {
    return null;
  }
  else {
    return sumNumbers(numbersAvg)/numbersAvg.length;
  }
}*/

//4.1B) Shorter version: 
averageNumbers = numbersAvg => {return numbersAvg.length === 0? null : sumNumbers(numbersAvg)/numbersAvg.length;}

/* Level 4.2: Array of strings
Instructions: Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words */
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

/*4.2A) Longer version:
function averageWordLength(wordsArr) { 
  let sumLength=0;
  if (wordsArr.length === 0) {
    return null;
  }
  else {
    for (let i=0; i<wordsArr.length; i++) {
      sumLength += wordsArr[i].length;
    }
     return sumLength/wordsArr.length;
  }
}*/

//4.2B) Shorter version:
averageWordLength = wordsArr => {
  let sumLength=0;
  for (let i=0; i<wordsArr.length; i++) {sumLength += wordsArr[i].length;}
  return wordsArr.length === 0 ? null : sumLength/wordsArr.length;
}

// Bonus - Iteration #4.3
/* Instructions: Create function avg(arr) that receives any mixed array and calculates the average. Consider as a mixed array an array filled with numbers and/or strings and/or booleans.The non-numerical values should be counted as follows: Booleans: true counts as 1 and false counts as 0. Strings: use the string length as the numeric value.

4.3A) Longer version:
function avg(mixedArr) {
  if (mixedArr.length===0) {
    return null;
  } 
  else {
    return sum(mixedArr)/mixedArr.length;
  }
}*/

//4.3B) Shorter version: 
avg = mixedArr => {return (mixedArr.length===0) ? null : sum(mixedArr)/mixedArr.length;}

/* Iteration #5: Unique arrays
Instructions: Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the Array methods indexOf and includes. Do this in the form of a function uniquifyArray that receives an array of words as an argument.*/
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

/* 5A) Longer version:
function uniquifyArray(wordsUnique) {
  if (wordsUnique.length===0) {
    return null;
  }

  else {
  newArray=[];
  for (let i=0; i<wordsUnique.length; i++) {
      if (newArray.includes(wordsUnique[i])) {
        continue;
      }
      else {
        newArray.push(wordsUnique[i]);
      }
  }
      return newArray;
  }
}*/

// 5B) Shorter version:
uniquifyArray = wordsUnique => {
  newArray = [];
  for (let i=0; i<wordsUnique.length; i++) {newArray.includes(wordsUnique[i]) ? newArray : newArray.push(wordsUnique[i]);}
  return wordsUnique.length===0 ? null : newArray;
} 

/* Iteration #6: Find elements
Instructions: Declare a function named doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if the word exists in the array, otherwise, return false.*/

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

/* 6A) Longer version:
function doesWordExist(wordsFind,searchWord) {
  if (wordsFind.length===0) {
    return null;
  }
  else {
  for (let i=0; i<wordsFind.length; i++) {
    if (wordsFind.includes(searchWord)) {
      return true;
    }
    else {
      return false;
    }
  }
}
}*/

// 6B) Shorter version:
doesWordExist = (wordsFind,searchWord) => {
  let value="";
  for (let i=0; i<wordsFind.length; i++) {wordsFind.includes(searchWord) ? value = true : value = false;}
  return wordsFind.length===0 ? null : value;
}

/* Iteration #7: Count repetition
Instructions: Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.*/
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

/*7.A) Longer version: 
function howManyTimes(wordsCount,searchWord2) {
  let occurrences=0;
  if (wordsCount.length===0) {
    return 0;
  }
  else {
    for (let i=0; i<wordsCount.length;i++) {
        if (wordsCount[i].includes(searchWord2)) {
          occurrences++;
        }
    }
    return occurrences;
  }
}
*/

//7.B) Shorter version: 
howManyTimes = (wordsCount,searchWord2) => {
  let occurrences=0;
  for (let i=0; i<wordsCount.length;i++) { wordsCount[i].includes(searchWord2) ? occurrences++ : occurrences;}
  return wordsCount.length===0 ? 0 : occurrences;
}

/* Iteration #8: Bonus
Instructions: Given multiple arrays, find the greatest product of four adjacent numbers.*/

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

/* 8A) Longer version: 
function greatestProduct(matrix) {
  let maxHorizontalProduct =0;
  let maxVerticalProduct =0;

  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix.length; j++) {

      // check max horizontal product 
           if ((i-3)>=0) {
             maxHorizontalProduct = matrix[i][j] * matrix[i-1][j] * matrix[i-2][j] * matrix[i-3][j];
           }
      // check max vertical product 
          if ((j-3)>=0) {
            maxVerticalProduct = matrix[i][j] * matrix[i][j-1] * matrix[i][j-2] * matrix[i][j-3];
             }
            }
          }
       // check which max is higher
       if (maxHorizontalProduct > maxVerticalProduct ) {
        return maxHorizontalProduct;
      }      
      else {
        return maxVerticalProduct;
      }
}
*/

// 8B) Shorter version: 
greatestProduct = matrix => {
  let maxHorizontalProduct, maxVerticalProduct =0;
  for (let i=0; i<matrix.length; i++) {
  for (let j=0; j<matrix.length; j++) {
    if ((i-3)>=0) {maxHorizontalProduct = matrix[i][j] * matrix[i-1][j] * matrix[i-2][j] * matrix[i-3][j]}
    if ((j-3)>=0) {maxVerticalProduct = matrix[i][j] * matrix[i][j-1] * matrix[i][j-2] * matrix[i][j-3]}}
  return maxHorizontalProduct > maxVerticalProduct ? maxHorizontalProduct : maxVerticalProduct}
}

/*Bonus - Iteration #8.2: Product of diagonals
Following the logic you've used in iteration #8.1, declare a function called greatestProductOfDiagonals(matrix). It takes a matrix as a parameter and returns the greatest product of any four values laid out diagonally, in either direction.*/

greatestProductOfDiagonals = matrix => {
  let maxDiagonalProduct1, maxDiagonalProduct2 =0;
  for (let i=0; i<matrix.length; i++) {
  for (let j=0; j<matrix.length; j++) {
    if (((i-3)>=0) && ((j-3)>=0)) {maxDiagonalProduct1 = matrix[i][j] * matrix[i-1][j-1] * matrix[i-2][j-2] * matrix[i-3][j-3]}
    if (((i-3)>=0) && ((j-3)<=0)) {maxDiagonalProduct2 = matrix[i][j] * matrix[i-1][j+1] * matrix[i-2][j+2] * matrix[i-3][j+3]}}}
  return maxDiagonalProduct1 > maxDiagonalProduct2 ? maxDiagonalProduct1 : maxDiagonalProduct2
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
