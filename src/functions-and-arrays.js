// Iteration #1: Find the maximum
function maxOfTwoNumbers(numOne, numTwo) {

   //Version 01 - To have all tests passing!
  // If - else - conditionals

   // should return greater of two arguments - if the first argument greater
   if (numOne > numTwo) {
    console.log(`${numOne} is greater than ${numTwo}`);
    return numOne;
}
 //should return greater of two arguments - if the second argument greater
 else if (numOne < numTwo) {
  console.log(`${numTwo} is greater than ${numOne}`);
  return numTwo;
}
else {
  console.log(`${numTwo} is the same as ${numOne}`);
  return numOne;
}
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {

  if (!array.length) return null;

  let longestWord = "";

  for (let i = 0; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}





// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sumArray) {

  let totalSum = 0;
  // For each - method
  // given thsat we have an implied return inside the for Each, let's remove the curlyBrackets!
  sumArray.forEach((number) => (totalSum += number));

  // Return totalSunm
  console.log(totalSum);
  return totalSum;
}





// Iteration #3.1 Bonus:
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10]
function sum(array) {
  let mixedTotalSum = 0;
  for (let i = 0; i < array.length; i++) {
    // Here if we get a string, we will split that string and add each position of thespliitedStirng into the mixedTotalSum !
    if (typeof array[i] === "string") {
      let string = array[i].split("");
      // we will be addsing each position of the string as a numeric value to the mixedTotalSum
      for (let i = 0; i < string.length; i++) {
        mixedTotalSum += string[i].length;
      }
    } // for booleans we will create a else-if condition, thatn will cehck the boolean data and if is true we will add +1 to the count
    else if (array[i] === true) {
      mixedTotalSum += 1;
    } // conndiiton if we get an obnject or array inside, what do we do ? , in those cases we will generate an error and not take into account for the sum!
    else if (typeof array[i] === "object" || typeof array[i] === "array") {
      throw new Error(
        "no no, we will not count any arrays or objects into consideration....."
      );
    } else {
      // addding each inidivual possition of the array to the count!
      mixedTotalSum += array[i];
  }
}
console.log(mixedTotalSum);
return mixedTotalSum;
}




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  // return null if empty
  if (!numbersAvg.length) return null;
  // Use this to store operation
  let total = 0;
  for (let i = 0; i < numbersAvg.length; i++) {
    total += numbersAvg[i];
  }
  return total / numbersAvg.length;
}



// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
   // should return null if receives an empty array when called
   if (!wordsArr.length) return null;
   // should return the average of a one-element array
   let total = 0;
   for (let i = 0; i < wordsArr.length; i++) {
     total += wordsArr[i].length;
   }
   // should return the average of a the array
   let totalAverage = total / wordsArr.length;
   console.log(totalAverage);
   return totalAverage;
 }


// Bonus - Iteration #4.1
const mixedArrTwo = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
function avg(mixedArray) {
  if (!mixedArr.length) {
    return null;
  } else {
    console.log(sum(mixedArray) / mixedArray.length);
    sum(mixedArray) / mixedArray.length;
  }
}
avg(mixedArrTwo);

const averageTwo = (mixedArr) => {
  let test = !mixedArr.length ? null : sum(mixedArr) / mixedArr.length;
  console.log(test);
  return test;

};
!mixedArr.length ? null : sum(mixedArr) / mixedArr.length;
averageTwo(mixedArrTwo);



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
console.table(wordsUnique);
function uniquifyArray(array) {
   // should return null if receives an empty array when called
   if (!array.length) return null;
   // should return the correct uniqified array when an array of the same elements passed as argument
   // should return the same array when no element is repeated
   // should return the uniquified array
   let uniqueArray = [];
   array.forEach((word) => {
     if (!uniqueArray.includes(word)) {
       uniqueArray.push(word);
     }
   })
   // Return new array with the words that are not duplicated
   console.table(uniqueArray);
   return uniqueArray;
 }
 uniquifyArray(wordsUnique);
 




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
// Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.
function doesWordExist(array,word) {
  if (!array.length) return null;
  console.log(array.includes(word));
  return array.includes(word);
}
doesWordExist(wordsFind, "truth");

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

function howManyTimes(wordsCount) {
  for (const word of wordsCount) {
    if (wordCountMap[word]) {
      wordCountMap[word]++;
    } else {
      wordCountMap[word] = 1;
    }
}
}
console.log (wordsCount);{
  machine: 1
  matter: 4
  subset: 1
  trouble: 1
  starting: 1
  eating: 1
  truth: 1
  disobedience: 1
};




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

function greatestProduct() {}




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
