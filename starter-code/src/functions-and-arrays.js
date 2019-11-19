/*Iteration #1: Find the maximum
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

Iteration #2: Find longest word
Declare a function named findLongestWord that takes as an argument an array of words and returns the longest one. 
If there are 2 with the same length, it should return the first occurrence.

Iteration #3: Calculate the sum
Calculating a sum is as simple as iterating over an array and adding each of the elements together.

Declare a function named sumArray that takes as an argument an array of numbers, 
and returns the sum of all of the numbers in the array. 
Later in the course we'll learn how to do this by using the reduce array method, 
which will make your work significantly easier. For now, let's practice "manual" way using loops.

Starter Code

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];*/

// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
    return Math.max(number1, number2);
}

//console.log(maxOfTwoNumbers(3, 5));



// Iteration #2: Find longest word
//const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const words = ["a", "zab", "12abc", "$$abcd", "abcde", "ironhack"];

function findLongestWord(wordarray) {
    let currentLongest = '';
    if (wordarray.length === 0) return null;
    wordarray.forEach(function(item) {
        if (item.length > currentLongest.length)
            currentLongest = item;
    });
    return currentLongest;
}

//console.log(findLongestWord(words));

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numArray) {
    let sumOfArray = 0;
    for (let i = 0; i < numArray.length; i++)
        sumOfArray += numArray[i];
    return sumOfArray;
}
//console.log(sumArray(numbers));

/* Iteration #4: Calculate the average
Calculating an average is an extremely common task. Let's practice it a bit.

Algorithm

Find the sum as we did in the first exercise
Take the sum from step 1, and divide it by the number of elements in the list.

Level 2: Array of strings
Declare a function named averageWordLength that receives as a single argument an array of words and returns the 
average length of the words:

Starter Code

const words = [
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
];*/
// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
    if (numberArray.length === 0) return null;
    return sumArray(numberArray) / numberArray.length;
}

//console.log(averageNumbers(numbersAvg));

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

function averageWordLength(wordsArray) {
    if (wordsArray.length === 0) return null;
    let itemlen = 0;
    wordsArray.forEach(function(item) {
        itemlen += item.length;
    });
    return itemlen / wordsArray.length;

}

/*Iteration #5: Unique arrays
Take the following array, remove the duplicates, and return a new array. You're more than likely 
going to want to check out the indexOf Array method.

Do this in the form of a function uniquifyArray that receives an array of words as a argument.

Starter Code

const words = [
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
];*/

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

function uniquifyArray(wordsArr) {
    if (wordsArr.length === 0) return [];
    return wordsArr.filter(filterUniqueElements);
}

function filterUniqueElements(item, index, array) {
    let firstOccurence = array.indexOf(item);
    return index === firstOccurence;
}

//console.log(uniquifyArray(wordsUnique));

/*Iteration #6: Find elements
Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument, 
and a word to search for as the other.
Return true if it exists, otherwise, return false. Don't use indexOf for this one. */

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

function doesWordExist(wordarray, word) {
    if (wordarray.length === 0) return false;
    for (let i = 0; i < wordarray.length; i++) {
        if (wordarray[i] === word)
            return true;
        else continue;
    };
    return false;
}

/*Iteration #7: Count repetition
Declare a function named howManyTimes that will take in an array of words as the first argument, 
and a word to search for as the second argument. 
The function will return the number of times that word appears in the array. */

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

function howManyTimes(wordarray, word) {
    if (wordarray.length === 0) return 0;
    let wordCount = 0;
    for (let i = 0; i < wordarray.length; i++) {
        if (wordarray[i] === word)
            wordCount += 1;
    };
    return wordCount;
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

//console.log(greatestProduct (matrix));
//Assumption: dim = number of rows = number of columns = matrix.length
//Concept: slide a winSize x winSize window across the matrix and calculate max product
//         over each row, column, forward-diagonal, and back-diagonal (total 10 products per window).  
//         In order to cover the complete matrix the upper-left corner of each window 
//         must move in the range: [row = 0..dim - winSize][col = 0..dim - winSize]
//         where winSize = window size (in this case 4)

console.log("Final Result: " + greatestProduct(matrix));

function greatestProduct(matrix) {
    let winSize = 4;
    let rmax = matrix.length - winSize;
    let maxProd = 0;
    for (let r = 0; r <= rmax; r++) {
        for (let c = 0; c <= rmax; c++) {
            maxProd = Math.max(maxProd, maxWindowProduct(matrix, r, c, winSize));
            console.log(`Sliding window at ${r} ${c} Largest product: ${maxProd} `);
        }
    }
    return maxProd;
}

function maxWindowProduct(matrix, row, col, winSize) {
    let rmax = row + winSize - 1;
    let cmax = col + winSize - 1;
    let maxWinProd = 0;
    let prod = 1;

    //calculate max product in rows
    for (let r = row; r <= rmax; r++) {
        prod = 1;
        for (let c = col; c <= cmax; c++)
            prod = prod * matrix[r][c];
        maxWinProd = Math.max(prod, maxWinProd);
    }
    //calculate max product in columns
    for (let c = col; c <= cmax; c++) {
        prod = 1;
        for (let r = row; r <= rmax; r++)
            prod = prod * matrix[r][c];
        maxWinProd = Math.max(prod, maxWinProd);
    }
    //calculate product in back-diagonal
    prod = 1;
    for (let r = row, c = col; r <= rmax; r++, c++)
        prod = prod * matrix[r][c];
    maxWinProd = Math.max(prod, maxWinProd);

    //calculate product in forward-diagonal
    prod = 1;
    for (let r = row, c = cmax; r <= rmax; r++, c--)
        prod = prod * matrix[r][c];
    maxWinProd = Math.max(prod, maxWinProd);

    return maxWinProd;
}