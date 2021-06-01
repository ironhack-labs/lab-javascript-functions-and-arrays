// Iteration #1: Find the maximum: Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.
//////1.1 Create a function with 2 numbers as arguments
function maxOfTwoNumbers(num1, num2) {
  //////2.1 Check if the first parameter is greater than the second
  if (num1 > num2) {
    //////2.2 If yes, return the first parameter
    return num1
  } else {
    //////2.3 If not, return the second parameter.
    return num2
  }
}

//console.log(maxOfTwoNumbers(1,2))

// Iteration #2: Find longest word: Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

//////2.1 Create a function with 1 parameter (that will be an array)
function findLongestWord(wordsArr) {
  //////2.2 Create a variable to store a word of the array to compare with the others:
  if (wordsArr.length === 0) {
    return null
  };
  let longestWord = "";
  //////2.3 Use for loop that will loop for all the length of the parameter  
  for (let i = 0; i < wordsArr.length; i++) {
    //////2.4 Check if the word of i position is longer than the word stored in let:
    if (wordsArr[i].length > longestWord.length) {
      ///////If yes, the word that is in the position i will be stored at let longestWord.      
      longestWord = wordsArr[i];
    }
  }
  return longestWord;
}

//console.log(findLongestWord(words));




// Iteration #3: Calculate the sum: Calculating a sum can be as simple as iterating over an array and adding each of the elements together.
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
////// 3.1 Implement the function named sumNumbers that takes an array of numbers as an argu5ment:
function sumNumbers(num) {
  ////// 3.1 Create variable that will store the sum of the numbers.  
  let sum = 0;
  ////// 3.2 Create a for loop that will loop until the end of the array.
  for (let i = 0; i < num.length; i++) {
    ////// 3.3 Redeclare the let sum with the sum of the amount that was already there and the amount of the number that is in i position.
    sum += num[i]
  }
  /////return sum
  return sum
}

//console.log(sumNumbers(numbers));



// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(num) {
  ////// 3.1 Create variable that will store the sum of the numbers.  
  let sum = 0;
  ////// 3.2 Create a for loop that will loop until the end of the array.
  for (let i = 0; i < num.length; i++) {
    ////// 3.3 Redeclare the let sum with the sum of the amount that was already there and the amount of the number that is in i position.
    if (typeof num[i] === 'number') {
      sum += num[i];
    } else if (typeof num[i] === 'string') {
      sum += num[i].length
    } else if (typeof num[i] === 'boolean') {
      if (num[i] === true) {
        sum += 1
      }
    } else {
      throw "Unsupported data type sir or ma'am"
    }
  }
  /////return sum
  return sum
}

// console.log(sum(mixedArr));


// Iteration #4: Calculate the average
// Level 1: Array of numbers: 
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
//////4.1 Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers:
function averageNumbers(numArr) {
  if (numArr.length === 0) {
    return null
  };
  ////// 4.2 Create variable that will store the sum of the numbers.  
  let sum = 0;
  ////// 4.3 Create a for loop that will loop until the end of the array.
  for (let i = 0; i < numArr.length; i++) {
    ////// 4.4 Redeclare the let sum with the sum of the amount that was already there and the amount of the number that is in i position.
    sum += numArr[i]
  }
  ////// 4.5 Return the sum divided by the number of elements in the list
  return (sum / numArr.length)

}

//console.log (averageNumbers(numbersAvg));

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
//////4.1 Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words:
function averageWordLength(characters) {
  if (characters.length === 0) {
    return null
  };
  ////// 4.2 Create variable that will store the sum of the characters of each word of the array.  
  let sum = 0;
  ////// 4.3 Create a for loop that will loop until the end of the array.
  for (let i = 0; i < characters.length; i++) {
    ////// 4.4 Redeclare the let sum with the sum of the amount that was already there and the amount of the characters of the word that is in i position.
    sum += characters[i].length;
  }
  //////4.5 Return the sum divided by the number of elements in the list
  return sum / characters.length;
}

//console.log (averageWordLength(wordsArr));

// Bonus - Iteration #4.1
function avg(mix) {
  if (mix.length === 0) {
    return null
  };
  ////// 3.1 Create variable that will store the sum of the numbers.  
  let sumAvg = 0;
  ////// 3.2 Create a for loop that will loop until the end of the array.
  for (let i = 0; i < mix.length; i++) {
    ////// 3.3 Redeclare the let sum with the sum of the amount that was already there and the amount of the number that is in i position.
    if (typeof mix[i] === 'number') {
      sumAvg += mix[i];
    } else if (typeof mix[i] === 'string') {
      sumAvg += mix[i].length
    } else if (typeof mix[i] === 'boolean' && mix[i] === true) {
      sumAvg += 1
    }
  }

  return sumAvg / mix.length
}

//console.log(avg(mixedArr))

// Iteration #5: Unique arrays: Take the following array, remove the duplicates, and return a new array. 
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
////// 2.1 Create a function with 1 parameter (that will be an array)
function uniquifyArray(uni) {
  if (uni.length === 0) {
    return null
  };
  let words = uni
  //////2.2 Use for loop that will loop for all the length of the parameter 
  for (let i = 0; i < words.length; i++) {
    ////// 2.3 Check if the word in the position i of the array passed as a parameter appear again from the index i+1 (because we want to check from the word immediately after the i). We use >= 0 because indexOf returns the position of the word in the array, if existes, and -1 if not exists. So we know that if the result of indexOf is greater or equal to 0 is because the word appears again.
    if (words.indexOf(words[i], i + 1) >= 0) {
      //////2.4 Use the splice method to delete the position i if the word appears more than once.
      words.splice(i, 1);
      ////// 2.5 redeclare i = 0 to start the for loop again until not have any words repeated
      i = 0
    }
  }
  ////// 2.6 return words;
  return words;
}

//console.log(uniquifyArray(wordsUnique));

//indexOf returns the position

// Iteration #6: Find elements: Let's create a simple array search.
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
//6.1 Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other:
function doesWordExist(words, search) {
  if (words.length === 0) {
    return null
  };
  //6.2 Create a for loop that will loop until the end of the array.
  for (let i = 0; i < words.length; i++) {
    //6.3 Check if the word in the position i of the array is equal to the word
    if (words[i] === search) {
      //6.4 If yes, return true. If not, the for loop will loop for another i position.
      return true
    }
  }
  //6.5 After the for loop loops for all the length of the array, if any word is equal to the word passed in the search parameter, return false:
  return false
};

// console.log (doesWordExist(wordsFind, "machin")); 
// console.log (doesWordExist(wordsFind, "trouble")); 


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
//7.1 Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument.
function howManyTimes(words, search) {
  //7.2 Create a variable where you will store the times that the word passed as a search appears
  let counter = 0;
  //7.3 Create a for loop that will loop until the end of the array.
  for (let i = 0; i < words.length; i++) {
    //7.4 Check if the word in the position i of the array is equal to the word
    if (words[i] === search) {
      //7.5 If yes, add 1 to the counter.
      counter++
    }
  }
  //7.6 return the counter
  return counter
};

//console.log(howManyTimes(wordsCount, "matter"))


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

function greatestProduct() { }




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
