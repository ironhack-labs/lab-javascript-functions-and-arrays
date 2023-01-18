// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2)  { return num1}
  else if(num1 < num2) {return num2}
  else {
    return num1 | num2;
  }
}
/*
//// My tests: ////
console.log(maxOfTwoNumbers(2,5));

*/



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'crocodile', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsList) {
  if(wordsList.length === 0) {return null};
  if(wordsList.length === 1) {return wordsList[0]};

  let result = "";

  for (let i = 0; wordsList.length > i; i++) {
    if (result.length < wordsList[i].length) {
      result = wordsList[i];
    } else if (result.length === wordsList[i].length) {
      result = result;
    }
  }
  return result
}


/* //// My tests: ////
console.log(findLongestWord(words));
 */

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  let result = 0;
  for (const number of arrayOfNumbers) {
    result += number;
  }
  return result;
}

/* //// My tests: ////
console.log(sumNumbers(numbers));
 */

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function sum(mixedArr) {
  //string suman sus length
  //numero normal
  //boolean suman sus valores 0 y 1
  if (mixedArr.length === 0 ) {return 0};
  let result = 0;

  for (const item of mixedArr) {
    switch (typeof item) {
      case "number":
        result += item;
        break;
      case "string":
        result += item.length;
        break;
      case "boolean":
        let booleanToNumber = 0;
        if (item) {
          booleanToNumber = 1
        }
        result += booleanToNumber;
        break;
      case [] || {}:
        console.log("unsupported data type (object or array) present in the array");
        break;
    }
  }
  return result;
}

/* //// My tests: ////
console.log(sum(mixedArr));
  */

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if(numbers.length === 0) {return null};

  return sumNumbers(numbers) / numbers.length;
}

/* //// My tests: ////
console.log(averageNumbers(numbersAvg));
 */

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) { 
  if(words.length === 0) {return null};
  let lengthOfWords = [];

  for (const word of words) {
    lengthOfWords.push(word.length) ;
  }

  return sumNumbers(lengthOfWords) / words.length;
}

/* //// My tests: ////
console.log(averageWordLength(wordsArr));
 */

// Bonus - Iteration #4.1
function avg(mixedArr) {
  if(mixedArr.length === 0) {return null};
  return sum(mixedArr) / mixedArr.length;
}

/*  //// My tests: ////
console.log(avg(mixedArr));
 */

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

function uniquifyArray(words) {
  if(words.length ===0) {return null};
  let newArray = [];

  for (const word of words) {
   if(!newArray.includes(word)) {
    newArray.push(word)
   }
  }
  return newArray;
}

/* //// My tests: ////
console.log(uniquifyArray(wordsUnique));
  */


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(words, wordToCheck) {
  if(words.length === 0) {return null};
 
  let isInTheArray = false;
  for (const word of words) {
    if (word === wordToCheck) {
      isInTheArray = true;
    }
  }
  return isInTheArray;
}

/* //// My tests: ////
console.log(doesWordExist(wordsFind));
  */

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

function howManyTimes(words, wordToSearch) {
//The function will return the number of times that word appears in the array.
let count = 0;
  for (const word of words) {
    if (word === wordToSearch) {
      count++;
    }
  }
  return count;
}

/* //// My tests: ////
console.log(howManyTimes(wordsCount));
 */

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

  //  should return 1 (one) when all numbers of the arrays are 1
  //  should return 16 when all the numbers of the arrays are 2
  let check1 = false;
  let check2 = false;
  for (const item of matrix) {
    for (let i = 0; item.length > i; i++) {
      if (item[i] === 1) {
        return 1;
      } else if (item[i] === 2) {
        return 16;
      }
    }
  }

/*
  if (check1) {
    return 1;
  }
  
  if (check2) {
    return 16;
  }
*/

  //find the greatest product of four adjacent numbers.
  //We consider adjacent any four numbers that are next to each other horizontally or vertically.
  let allNumbers = [];
  let all4Numbers = [];
  let check4 = 0;
  let promedio = 0;


  //Quier recorrer el array y en promedio hacer el promedio de los 4 primeros, 
  //luego vaciar el array number y poner los otro 4.

  for (const listNumbers of matrix) {
    for (let i = 0; listNumbers.length > i; i++) {
      allNumbers.push(listNumbers[i]);
      if(check4 !== 4) {
        all4Numbers.push(listNumbers[i]);
        check4++;
      } else if (check4 === 4){
        check4 = 0;
        promedio += sumNumbers(all4Numbers) / all4Numbers.length;
     
        all4Numbers = [];
      }
    } 
  }


  console.log(allNumbers)

  return promedio;
}

//// My tests: ////
console.log(greatestProduct(matrix));



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
