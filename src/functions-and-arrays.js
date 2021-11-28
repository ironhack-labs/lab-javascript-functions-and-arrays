// Iteration #1: Find the maximum
//Function that finds the maximum of two gived numbers
function maxOfTwoNumbers(number1, number2) {
  //If number1 is equal to number2, number1 is returned
  if(number1>=number2){
    return number1;
  }
  else {
    return number2;
  }
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

//Function that returns the longest word.
function findLongestWord(words) {
  //If words is an empty array, null is returned
  if(!words.length){
    return null;
  }
  //I am using two variables, one stores the length of the word and the other stores the word
  let maxLength=0;
  let largestWord;
  words.forEach(function(word,index){
    if(maxLength<word.length){
      maxLength=word.length;
      largestWord=word;
    }
  });
  return largestWord; 
}


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

//Function that calculates the sum of a numbers array given.
function sumNumbers(numbers) {
  //If numbers is an empty array, 0 is returned
  if(!numbers.length){
    return 0;
  }
  let sumNumbers=0;
  numbers.forEach(function(number){
    sumNumbers += number;
  });
  return sumNumbers;
}


// Iteration #3.1 Bonus:

//Function that calculates the sum of a polymorfic array given, but only the variables numbers, booleans, and strings are permitted.
function sum(polimorphicArray) {
  //If polimorphicArray is an empty array, 0 is returned
  if(!polimorphicArray.length){
    return 0;
  }
  //I decided use typeof to know the type of the item and this way I can add the right value 
  let sumAll=0;
  polimorphicArray.forEach(function(item){
    let typeOf = typeof item;
    switch(typeOf){
      case "number":
        sumAll += item;
        break;
      case "boolean":
        if(item){
          sumAll++;
        }
        break;
      case "string":
        sumAll += item.length;
        break;
      default:
        throw new Error("Unsupported data type sir or ma'am");
    }
  });
  return sumAll;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

//Function that calculates the average of a numbers array given.
function averageNumbers(numbersAverage) {
  //Find the sum as we did in the first exercise (or how about reusing that the sumNumbers()?)
  //Take that sum and divide it by the number of elements in the list.
  //If numbersAverage is an empty array, null is returned
  if(!numbersAverage.length){
    return null;
  }  
  return sumNumbers(numbersAverage)/numbersAverage.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

//Function that returns the average of a strings array given.
function averageWordLength(words) {
  //If words is an empty array, null is returned
  if(!words.length){
    return null;
  }
  let sumLetters=0;
  words.forEach(word => sumLetters += word.length);
  return sumLetters/words.length;
}

// Bonus - Iteration #4.1
//Function that returns the average of an polimorphic array given. Only numbers, booleans and strings are permitted.
function avg(arr) {
  //If arr is an empty array, null is returned
  if(!arr.length){
    return null;
  }
  //I am rounding to 2 decimals with toFixed.
  return +(sum(arr)/arr.length).toFixed(2);
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

//Function that returns the gived array, but without repeated elements .
function uniquifyArray(arr) {
  //If arr is an empty array, null is returned
  if(!arr.length){
    return null;
  }
  const uniqueArr = [];
  for(let i=0;i<arr.length;i++){
    //I am using includes to know if the item is already in
    if(!uniqueArr.includes(arr[i])){
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;  
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

//Function that search the given word into the given array
function doesWordExist(arr, word) {
  //If arr is an empty array, null is returned
  if(!arr.length){
    return null;
  }
  return arr.includes(word);
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

//Function that counts how many times the given word appears in the given array
function howManyTimes(arr, word) {
  //If arr is an empty array, null is returned
  if(!arr.length){
    return 0;
  }
  let position = 0;
  let appearances = 0;
  while(arr.indexOf(word, position) !== -1 ){
    position = arr.indexOf(word, position)+1;
    appearances++;
  }
  return appearances;
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

//Function that returns the greatest product of 4 elements of the given matrix grouped in horizontal or vertical
function greatestProduct(matrix) {
  let max = 0
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      //Only calculates the product if the variable "i" is between the first position and the fourth position starting by the end. 
      if(matrix.length-i>3){
        let horizontal = matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j];
        if(horizontal>max){
          max=horizontal;
        }
      }
      //Only calculates the product if the variable "j" is between the first position and the fourth position starting by the end. 
      if(matrix[i].length-j>3){
        let vertical = matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3];
        if(vertical>max){
          max=vertical;
        }
      }
    }    
  }
  return max;
}

// Iteration #8.1: Bonus
//Function that returns the greatest product of 4 elements of the given matrix grouped in horizontal, vertical, or diagonal
function greatestProductOfDiagonals(matrix){
  let max = 0
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix.length-i>3){
        let horizontal = matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j];
        if(horizontal>max){
          max=horizontal;
        }
      }
      if(matrix[i].length-j>3){
        let vertical = matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3];
        if(vertical>max){
          max=vertical;
        }
      }
      //about name of the diagonal variables, the two final letters is a combination to especify the direction - N: nord, S: sud, W: west, E: east.
      if(matrix.length-i>3 && matrix[i].length-j>3){
        let diagonalSE = matrix[i][j]*matrix[i+1][j+1]*matrix[i+2][j+2]*matrix[i+3][j+3];
        if(diagonalSE>max){
          max=diagonalSE;
        }
      }
      if(matrix.length-i>3 && j>=3){
        let diagonalNE = matrix[i][j]*matrix[i+1][j-1]*matrix[i+2][j-2]*matrix[i+3][j-3];
        if(diagonalNE>max){
          max=diagonalNE;
        }
      }
      if(i>=3 && matrix[i].length-j>3){
        let diagonalSW = matrix[i][j]*matrix[i-1][j+1]*matrix[i-2][j+2]*matrix[i-3][j+3];
        if(diagonalSW>max){
          max=diagonalSW;
        }
      }
      if(i>=3 && j>=3){
        let diagonalNW = matrix[i][j]*matrix[i-1][j-1]*matrix[i-2][j-2]*matrix[i-3][j-3];
        if(diagonalNW>max){
          max=diagonalNW;
        }
      }
    }    
  }
  return max;
}

//I made the necessary changes to test greatestProductOfDiagonals too

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
    greatestProduct,
    greatestProductOfDiagonals
  };
}
