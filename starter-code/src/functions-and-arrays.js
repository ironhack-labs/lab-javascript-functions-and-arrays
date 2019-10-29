
// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b)
    return a
  else
    return b
};

// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot', 'paralelepipedo'];

function findLongestWord (arrayOfWords) { 
  let longestWord = ''; // create a variable and assign it to an empty string to store the value of the for loop below
    for (i = 0; i < arrayOfWords.length; i++) { // run the array through the loop to determine length
      if (longestWord.length < arrayOfWords[i].length) // if current length of i is longer than previous, assign value to longestWord
        longestWord = arrayOfWords[i]; // this assign the current value of i to longestWord
    }
  return longestWord || null; // if conditions met, return longestWord; or else, return null
}

findLongestWord(words); // function call

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray (arrayOfNumbers) { 
  let sumOfNumbers = 0; // create a variable to store the sum of each iteration of the loop
    for (i = 0; i < arrayOfNumbers.length; i++) { // loop to run for the length of the array (10x)
      sumOfNumbers += arrayOfNumbers[i]; // every time the loop runs, add the value of i to sumOfNumbers
    }
  return sumOfNumbers; // returns the final value of sumOfNumbers after the loop iterates all the way
}

// // Iteration #4: Calculate the average
// // Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers (arrayOfNumbers) { 
  if (arrayOfNumbers.length == 0) // return null if the array is empty to avoid division by zero
    return null;
  let sumOfNumbers = sumArray (arrayOfNumbers); // stores the sum of numbers using the previous function
    return sumOfNumbers / arrayOfNumbers.length; // calculates the average by devided the sumOfNumbers by the length of the array and returns the calculated value
};

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

function averageWordLength (arrayOfWords) {
  if (arrayOfWords.length == 0) // if length of array is 0 (no content), return null
    return null;
  let sumOfLetters = 0; // variable initialized to zero to store calculation of loop
    for (i = 0; i < arrayOfWords.length; i++) {
      sumOfLetters += arrayOfWords[i].length; // calculates average of stored value and the current word running through the loop
    }
  return sumOfLetters / arrayOfWords.length; // calculates value of stored word devided by length of the array
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

function uniquifyArray (arrayOfWords) {
  let uniqueWords = []; // declare varible to store unique words found
  for (i = 0; i < arrayOfWords.length; i++) { // loop through the array
    let index = uniqueWords.indexOf(arrayOfWords[i]); // declare variable and store value of the index of the current word in the loop
    if (index == -1) // verifies if the word is already stored in the variable uniqueWords
      uniqueWords.push(arrayOfWords[i]); // after looping through the array, pushes new word into uniqueWords
  }
  return uniqueWords; // returns the new array
}

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

function doesWordExist (arrayOfWords, wordToFind) { // passing 2 arguments - 1 with array to look through, and the other with term to look for
    for (i = 0; i < arrayOfWords.length; i++) {
      if (arrayOfWords[i] == wordToFind) // if word in the loop = word we are looking for, return true
        return true;
    }
    return false; // else, returns false - outside of the loop because otherwise it will never evaluate to false
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

function howManyTimes (arrayOfWords, wordToFind) {
  let repeatedWords = 0; // declare variable to store how many times the word appears in the array
  for (i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i] == wordToFind) // compare word in the array with second argument
      repeatedWords += 1; // if "if statement" is true, add 1 to repeatedWords variable
  }
  return repeatedWords; // return the final sum in repeatedWords
}

howManyTimes (wordsCount, 'wordsFind')

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
