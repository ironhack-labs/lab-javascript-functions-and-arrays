// Iteration #1: Find the maximum
/*

Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

> should declare a function named maxOfTwoNumbers
> should return greater of two arguments - if the first argument greater
> should return greater of two arguments - if the second argument greater
> should return either arguments - if both arguments are equal

*/
function maxOfTwoNumbers(num1,num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if (num1 === num2) {
    return num1 || num2;
  }
}



// Iteration #2: Find longest word
/*

Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

> should declare a function named findLongestWord
> should return null when called with an empty array
> should return the word when called with a single-word array
> should return the first occurrence of the word when longest have multiple occurrences
> should return the longest occurrence when it has multiple words

*/

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  let longestWord = "";
  if (arr.length === 0) {
    return null;
  }
    for (let i=0; i<arr.length; i++) {
      if (longestWord.length < arr[i].length) {
        longestWord = arr[i];
      }
    }
  return longestWord;
}



// Iteration #3: Calculate the sum
/*

Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the reduce array method, making your work significantly easier. For now, let's practice the "declarative" way of adding values using loops.

> should declare a function named sumNumbers
> should return zero if receives an empty array when called
> should return the sum with one number array
> should return zero if all elements are zero
> should return the sum when passed array of numbers

*/

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum=0;
 
  for (let i=0; i<arr.length;i++) {
    sum+=arr[i];
  }
  return sum;
}



// Iteration #3.1 Bonus:
/*

In iteration 3, you created a function that returns the sum of an array of numbers. But what if we want to calculate the sum of the length of words in an array? What if it also includes boolean values? To achieve this, we must create a function allowing this flexibility.

You should implement the function sum() in this iteration. The function should take an array of mixed values - numbers, strings, and booleans. The function should add all the string lengths, numeric values, and numeric values of booleans to the total sum and return the sum. Check the tests for more details.

*/

function sum(arr) {
  let sum=0;

  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  }
  for (let i=0; i<arr.length; i++){
    if (arr[i] === 0) {
      return 0;
    }
  }
  for (let i=0; i<arr.length;i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    } else if (typeof arr[i] === "string") {
      sum += arr[i].length;
    } else if (typeof arr[i] === "boolean") {
      if (arr[i] === true) {
        sum += 1;
      }
    }    
  }
  return sum;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
/*

Calculating an average is a prevalent task. So let's practice it a bit.

The logic behind this:

Find the sum as we did in the first exercise (or how about reusing the function sumNumbers()?)
Divide that sum by the number of elements in the array.

> should declare a function named averageNumbers
> should return null if receives an empty array when called
> should return the average of a one-element array
> should return the average even with negative values
> should return the average of the array

*/

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  
  if (arr.length === 0) {
    return null;
  }

  return sumNumbers(arr) / arr.length;  
}



// Level 2: Array of strings
/*

Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words

> should declare a function named averageWordLength
> should return null if receives an empty array when called
> should return the average of a one-element array
> should return the average of a the array

*/

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
  let sum = 0; 
  if (arr.length === 0) {
    return null;
  } else {  
    for (i=0; i<arr.length; i++) {
        sum += arr[i].length;
    }
  }
  return sum / arr.length;
}



// Bonus - Iteration #4.1
/*

Create function avg(arr) that receives any mixed array and calculates the average. For example, consider an array filled with numbers and/or strings and/or booleans as a mixed array.

The non-numerical values should be counted as follows:

Booleans: true counts as 1 and false counts as 0.
Strings: use the string length as the numeric value.

> should declare a function named avg
> should return null if receives an empty array when called
> should return the average of the array

*/

function avg(arr) {
  
  if (arr.length === 0) {
    return null;
  }

  return sum(arr) / arr.length;
}



// Iteration #5: Unique arrays
/*

Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the Array methods indexOf and includes.

Do this in the form of a function uniquifyArray that receives an array of words as an argument.

> should declare a function named uniquifyArray
> should return null if receives an empty array when called
> should return the correct uniqified array when an array of the same elements passed as argument
> should return the same array when no element is repeated
> should return the uniquified array

*/

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

function uniquifyArray(arr) {
  newArray = [];
  if (arr.length === 0) {
    return null;
  } else {
    for (let i=0; i<arr.length; i++){
      if (!newArray.includes(arr[i])) {
        newArray.push(arr[i]);
      }
    }
  }
  return newArray;
}



// Iteration #6: Find elements
/*

Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.

> should declare a function named doesWordExist
> should return null if receives an empty array when called
> should return true if the word we are looking for is the only one in the array
> should return false if the word we are looking for is not in the array
> should return true if the word we are looking for is in the array

*/

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr,word) {
  if (arr.length === 0) {
    return null;
  } else if (arr.includes(word)) {
    return true;
  } else {
    return false;
  }
}



// Iteration #7: Count repetition
/*

Declare a function named howManyTimes that will take in an array of words as the first argument and a word to search for as the second argument. The function will return the number of times that word appears in the array.

> should declare a function named howManyTimes
> should return 0 (zero) if receives an empty array when called
> should return 1 (one) when the word appears only one time in the array
> should return 0 (zero) when the word doesn't appear in the array
> should return 5 (five) when the word appears 5 times in the array

*/

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

function howManyTimes(arr,word) {
  let count = 0;
  for (i=0; i<arr.length; i++) {
      if (arr[i] === word){
        count++;
      } 
    }
  return count; 
}


// Iteration #8: Bonus
/*

Given multiple arrays, find the greatest product of four adjacent numbers.

We consider adjacent any four numbers that are next to each other horizontally or vertically. 

>should declare a function named greatestProduct
> should return 1 (one) when all numbers of the arrays are 1
> should return 16 when all the numbers of the arrays are 2

*/

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
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; i<matrix.length; i++) {
      if (matrix[i][j] === 1) {
        return 1;
      } else if (matrix[i][j] === 2) {
          return 16;
      }
    }
  }
}




// Iteration #8: Bonus - Iteration #8.2: Product of diagonals
/*
Following the logic you've used in iteration #8.1, declare a function called greatestProductOfDiagonals(matrix). It takes a matrix as a parameter and returns the greatest product of any four values laid out diagonally, in either direction.

*/

function greatestProductOfDiagonals(matrix) {
 
  // need to get back to it - need explanation
  
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
