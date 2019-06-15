// Find the maximum
// function maxOfTwoNumbers(first, second) {
//   if (first > second) {
//     return first;
//   }
//   else {
//     return second;
//   };
// };

function maxOfTwoNumbers(first, second) {
  if (first > second) {                     // see if the first num is bigger than the num
    return first;                           // it's being compared to, and return the first
  } else {                                  // num if bigger, otherwise
    return second;                          // return the second num
  }
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

// function findLongestWord(arrayOfWords) {
//   let longestWord = arrayOfWords[0];
//   arrayOfWords.forEach((eachWord) => {
//     if(eachWord.length > longestWord.length){
//       longestWord = eachWord;
//     };
//   })
//   return longestWord;
// };

function findLongestWord(arrayOfWords) {
  let longestWord = arrayOfWords[0]; // sets the initial value to the first word in the array
                                     // so when we start the loop, the first word to check is
                                     // at position [0]. Will be updated when we reset longestWord
                                     // using the loop - could use for with [i] or foreach.
  arrayOfWords.forEach((eachWord)=>{
    if(eachWord.length > longestWord.length){ // uses > bc it will return the first if 2+ are
      longestWord = eachWord;                 // same length automatically.
    }
  })
  return longestWord;
}

// Calculating a Sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// function sumArray(arrayOfNumbers){
//   let total = 0;
//   arrayOfNumbers.forEach((eachNumber) => {
//     total += eachNumber;
//   })
//   return total;
// };

function sumArray(arrayOfNumbers){
  let total = 0;                          // initialize total as 0, then use forEach to loop
  arrayOfNumbers.forEach((eachNumber)=>{  // through all the elements in the array, storing 
    total += eachNumber;                  // the previous total in the variable, and adding
  })                                      // the next element's value to the previously stored
  return total;                           // total to get the sum.
}

// Calculate the Average
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// function averageNumbers(arrayOfNums) {
//   if(arrayOfNums.length === 0){
//     return undefined;
//   };
//   return sumArray(arrayOfNums)/arrayOfNums.length;
// };

function averageNumbers(arrayOfNums){
  if (arrayOfNums.length === 0){                      // check to make sure the array is not
    return undefined;                                 // empty; if empty return undefined.
  };                                                  // use previous sumArray function to
    return sumArray(arrayOfNums)/arrayOfNums.length;  // take total and divide my length of
}                                                     // array of Nums to get average.    
                                                      
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

// function averageWordLength(theArray) {
//   let newArray = [];
//   theArray.forEach((eachWord) => {
//     newArray.push(eachWord.length)
//   })
//   return averageNumbers(newArray);
// };

function averageWordLength(arrayOfWords) {
  let wordsArray = [];                      // initialize the temp word length array to null;
  arrayOfWords.forEach((eachWord)=>{        // use forEach to loop through all words in array,
    wordsArray.push(eachWord.length)        // get the length of each word and store in the
  })                                        // temp word length array, then return the previous
  return averageNumbers(wordsArray);        // averageNumbers function on that array
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

// function uniquifyArray(arrayOfWords) {
//   if(arrayOfWords.length === 0) {
//     return undefined;
//   };
//   let newArray = [];
//   arrayOfWords.forEach((eachWord) => {
//     if(newArray.indexOf(eachWord) === -1) {
//       newArray.push(eachWord);
//     };
//   })
//   return newArray;
// };

function uniquifyArray(arrayOfWords){
  if(arrayOfWords.length === 0){            // check to make sure word array isn't empty;
    return undefined;                       // if empty, return undefined;
  };
  let newArray = [];                        // initialize temp array holder to empty;
  arrayOfWords.forEach((eachWord)=>{        // loop through each word in the array
    if(newArray.indexOf(eachWord) === -1){  // if the indexOf method returns -1, means word
      newArray.push(eachWord);              // does not exist in the temp array holder, so
    }                                       // then put it into the temp array holder.
  })                                        // >> indexOf :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  return newArray;                          // return the unique words as the temp array holder
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

// function doesWordExist(theWords, searchTerm) {
//   let result = false;
//   theWords.forEach((singleWord) => {
//     if(singleWord === searchTerm) {
//      result = true;
//     };
//   })
//   return result;
// };

function doesWordExist(wordsArrayToSeach, eachWordToSeach){ // pass in two args (array, search term)
  let result = false;                                       // initialize result state to false;
  wordsArrayToSeach.forEach((eachWord)=>{                   // loop through array of words to search,
                                                            // pass in each word from the words array
    if(eachWord === eachWordToSeach) {                      // if word equals word we're looking for,
      result = true;                                        // set result to true;
    }
  })
  return result;                                            // return result state;
}

// Counting Repetition
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

// function howManyTimes(theWords, searchTerm) {
//   if(theWords.length === 0) {
//     return false;
//   };
//   let total = 0;
//   theWords.forEach((singleWord) => {
//     if(singleWord === searchTerm) {
//      total++;
//     };
//   })
//   return total;
// };

function howManyTimes(arrayOfWords, searchTerm){  // pass in two args, array of words, search term
  if(arrayOfWords.length === 0){                  // check to make sure array of words isn't empty;
    return false;                                 // if empty; return state false -> can't search array anymore
  };
  let count = 0;                                  // initialize count to 0, will add to count as we find occurrences
  arrayOfWords.forEach((eachWord)=>{              // forEach loop through the array of words, passing in each word
    if(eachWord === searchTerm){                  // if each word is found each to the search term,
      count++;                                    // increase the count for each word by one;
    };
  })
  return count;                                   // return count value to the array of words counter
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

// function greatestProduct(theMatrix) {
//   let greatest = 0;
//   theMatrix.forEach((eachRow) => {
//     for(let i=0; i < eachRow.length - 4; i++) {
//       let product = eachRow[i]*eachRow[i+1]*eachRow[i+2]*eachRow[i+3];
//       if(product > greatest) {
//         greatest = product;
//       };
//     };
//   })
//   for(let i=0; i< theMatrix.length - 4; i++) {
//     theMatrix[i].forEach((eachNumber, index) => {
//       let prod = theMatrix[i][index] *  theMatrix[i+1][index] * theMatrix[i+2][index] * theMatrix[i+3][index];
//          if(prod > greatest) {
//         greatest = prod;
//       };
//     })
//   };
//   return greatest;
// }

function greatestProduct(theMatrix) {           // declare the function, pass in the matrix array of row arrays
  let greatest = 0;                             // set the returned variable greatest to zero to start
                                                // first do rows, comparing each number to the next 3 in row unless
                                                // you're at the end of the row array where there are less than 3
                                                // to add to the previous
  theMatrix.forEach((eachRow)=>{
    for(let i = 0; i < eachRow.length - 4; i++){  // bc of length-4, will stop when then are less than 4 to multiply
      let product = eachRow[i]*eachRow[i+1]*eachRow[i+2]*eachRow[i+3]; // multiply each successive set of 4 values
      if (product > greatest){                  // if the product is bigger than the existing greatest value,
        greatest = product;                     // update greatest to product value
      }
    }
  })
    for(let i = 0; i < theMatrix.length - 4; i++){ // loop through the index values of the columns -4
      theMatrix[i].forEach((index)=>{  // pass in the index value for each column's position
        let prod = theMatrix[i][index]*theMatrix[i+1][index]*theMatrix[i+2][index]*theMatrix[i+3][index]; // multiply 4 numbers
        if(prod > greatest){           // if the product is bigger than the previously stored greatest value (including rows),
          greatest = prod;             // update greatest value
        }
      })
      return greatest;                 // return the greatest value whether rows or columns
    }
}