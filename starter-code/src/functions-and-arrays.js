// Find the maximum
/**
 * Returns the largest of two numbers
 * @param x first number to compare
 * @param y second number to compare
 */
function maxOfTwoNumbers(x, y){

  return (x < y)? y: x;


  // other potential methods :

  //return Math.max(x, y)

  // OR

  // if (x < y){
  //   return y;
  // }
  // else {
  //   return x;
  // }


}

// Finding Longest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

/**
 * takes an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.
 * @param arrayOfWords
 */
function findLongestWord(arrayOfWords){

  var currentWord;
  var longestWord = arrayOfWords[0];

  for(var i=0; i<arrayOfWords.length; i++){
    currentWord = arrayOfWords[i];
    if (currentWord.length > longestWord.length){
      longestWord = currentWord;
    }
  }

  // other potential solution
  // wordLengths   = arrayOfWords.map(function(x){return x.length});
  // maximalLength = wordLengths.reduce(maxOfTwoNumbers);
  // ixLongestWord = wordLengths.indexOf(maximalLength);
  // longestWord   = arrayOfWords[ixLongestWord];
  // return longestWord;


  return longestWord;
}


// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

/**
 * takes an array of numbers as a parameter, and calculate the sum of all its numbers
 * @param arrayOfNumbers
 */
function sumArray(arrayOfNumbers){
  // var total = 0;
  // for(var i=0; i< arrayOfNumbers.length; i++){
  //   total += arrayOfNumbers[i];
  // }
  // return total

  // other potential solution
  return arrayOfNumbers.reduce(function (x,y){return x+y;}, 0);
}


// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

/**
 * eceives an array of numbers and calculate the average of the numbers
 * @param arrayOfNumbers
 */
function averageNumbers(arrayOfNumbers){
  if (arrayOfNumbers === undefined || arrayOfNumbers.length === 0) {
    return undefined
  }

  return sumArray(arrayOfNumbers) / arrayOfNumbers.length;

}

// Array of Strings
var wordsArr = [
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


/**
 * receives an array of words and calculate the average length of the words
 * @param arrayOfWords
 */
function averageWordLength(arrayOfWords){

  // var lengthInArray = [];
  // for (var i=0; i < arrayOfWords.length; i++){
  //   lengthInArray.push(
  //       arrayOfWords[i].length
  //   );
  // }
  // return averageNumbers(lengthInArray)

  // other potential solution
  return averageNumbers(arrayOfWords.map(function(x){return x.length}))
}

// Unique Arrays
var wordsUnique = [
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

/**
 * Take the array on input, remove the duplicates, and return a new array
 * Idea of the implementation is that when we do not have a duplicate, the list of indexes is always increasing.
 * As soon as, we lose the monotonicity of the indexes, it means we are facing a duplicate.
 * @param arrayOfWords
 */
function uniquifyArray(arrayOfWords){

  // handle case where input list is empty
   if (arrayOfWords === undefined || arrayOfWords.length === 0) {
    return undefined
  }

  // normal case
  var maxIndex = -1;
  var elementsToKeep = [];

  arrayOfWords.forEach(function(x){
    var currentIndex = arrayOfWords.indexOf(x);
    if(currentIndex > maxIndex){
      // all going well
      elementsToKeep.push(x);
      maxIndex = currentIndex;
    }
  });

  return elementsToKeep
}

// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

/***
 * ake in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise, return false
 * @param arrayOfWords: array to search on
 * @param word: word to look for
 */
function doesWordExist(arrayOfWords, word){
  return arrayOfWords.some(function(x){return x === word});
}

doesWordExist(arrayOfWords=wordsFind, word='machine');

// Counting Repetion
var wordsCount = [
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

/**
 *  take in an array of words as one argument, and a word to search for as the other.
 *  The function will return the number of times that word appears in the array.
 * @param arrayOfWords
 * @param word
 */
function howManyTimes(arrayOfWords, word){

  return arrayOfWords.map((x)=>{ return (x === word) * 1}
      ).reduce((x, y)=>{return x+y}, false)

}
// Bonus Quest

var matrix = [
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

/**
 * calculates he greatest product of four adjacent numbers in the same direction (up, down, left, right)
 * @param matrix
 */

function greatestProduct(matrix){

  var maxProduct = 0;
  var product;

  for(var i=0; i<matrix.length; i++){
    var row = matrix[i];
    for(var j=0; j<row.length; j++){

      // up
      product = 1;
      for(var k=0; k<= Math.min(3, i); k++){
        product *= matrix[i-k][j];
      }
      maxProduct = (maxProduct<product)?product:maxProduct;

      // down
      product = 1;
      for(var k=0; k<= Math.min(3, matrix.length - i - 1); k++){
        console.log(i + " " +j + " " + k);
        product *= matrix[i+k][j];
      }
      maxProduct = (maxProduct<product)?product:maxProduct;

      // right
      product = 1;
      for(var k=0; k<= Math.min(3, row.length - j - 1); k++){
        product *= matrix[i][j+k];
      }
      maxProduct = (maxProduct<product)?product:maxProduct;

      // left
      product = 1;
      for(var k=0; k<= Math.min(3, j); k++){
        product *= matrix[i][j-k];
      }
      maxProduct = (maxProduct<product)?product:maxProduct;
    }
  }

  return maxProduct
}
