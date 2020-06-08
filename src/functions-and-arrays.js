// Iteration #1: Find the maximum
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.

function maxOfTwoNumbers (num1, num2) {
  if (num1>num2) {
    return num1;
  }else if (num2>num1) {
    return num2;
  }else if (num1 === num2) {
    return num1;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(words) {
  if (!words.length) return null;
  var longest = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (numbers) {

    if (!numbers.length) return 0;

  let sum = numbers [0];
  for (let i=1; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

return sum;
}

//Bonus 3.1
//create a new function sum() that calculates the sum for array filled with (almost) any type of data. 
function sum (anyData) {
  if (!anyData.length) return 0;
  let sumOfElements = 0;
  let unSupportedFlag = false;
  anyData.forEach(element => {
    switch (typeof element) {
      case 'string' : 
        sumOfElements = sumOfElements + element.length;
        break;
      case 'number' :
      case 'boolean' :
        sumOfElements = sumOfElements + element;
        break;   
      default :
        unSupportedFlag = true;
    }
  });
if (unSupportedFlag) throw new Error("Unsupported data type sir or ma'am")
  else return sumOfElements;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers (numbers) {

  if (!numbers.length) return null;

  let sum = numbers[0];
  for (let i=1; i<numbers.length; i++) {
    sum = sum+numbers[i];
  }
  //console.log(sum);
  let average = sum / numbers.length;
  return average;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {

  if (!words.length) return null;
  
  let sum = words[0].length;
  for (let i=1; i<words.length; i++) {
    sum = sum+words[i].length;
  }
  //console.log(sum);
  let average = sum / words.length;
  return average;  

}

// Bonus 4.1 Create function avg(arr) that receives any mixed array and calculates average
function avg (anyData) {
  if (!anyData.length) return null;
  let sumOfElements = 0;
  let unSupportedFlag = false;
  anyData.forEach(element => {
    switch (typeof element) {
      case 'string' : 
        sumOfElements = sumOfElements + element.length;
        break;
      case 'number' :
      case 'boolean' :
        sumOfElements = sumOfElements + element;
        break;   
      default :
        unSupportedFlag = true;
    }
  });
if (unSupportedFlag) return "Invalid data type";
  else return (Number(sumOfElements / anyData.length).toFixed(2)); 
  // For some reasons 2 tests didn't work
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

function uniquifyArray(words) {
  if (!words.length) return null;
  for (let i=0; i<words.length; i++) {
    if (words.indexOf(words[i], i+1) > -1) {
        words.splice(words.indexOf(words[i], i+1),1);
        i--;
    }}
    return words;
  }

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist (arrayOfWords, searchWord) {
  if (!arrayOfWords.length) return null;
  let wordFound = false;
  for (let i=0; i<arrayOfWords.length;i++) {
    if (searchWord === arrayOfWords[i]) wordFound = true;
  }
  return wordFound;
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

function howManyTimes (arrayOfWords, searchWord) {
  if (!arrayOfWords.length) return 0;
  let count = 0;
  for (let i=0; i<arrayOfWords.length;i++) {
     if (searchWord === arrayOfWords[i]) count++;
   }
   return count;
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

function greatestProduct(matrix) {
  let greatest = 0;
  for (let x=0; x<matrix.length-4; x++) {
    for (let y=0; y<matrix[0].length; y++) {
    newGreatest = matrix[x][y] * matrix[x][y] * matrix[x][y] * matrix[x][y];
    if (newGreatest > greatest) greatest = newGreatest;
    }  
  }
  for (let y=0; y<matrix[0].length-4; y++) {
    for (let x=0; x<matrix.length; x++) {
    newGreatest = matrix[x][y] * matrix[x][y+1] * matrix[x][y+2] * matrix[x][y+3];
    console.log(x, y);
    if (newGreatest > greatest) greatest = newGreatest;
    }  
  }  
  return greatest;
}