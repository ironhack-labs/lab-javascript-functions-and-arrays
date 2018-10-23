// Find the maximum
var number1 = 1;
var number2 = 2;

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

// Calculating a Sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Calculate the Average
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

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



//callback function used in assignment 2 [Finding Longest Word] and assignment 5 [Calculating the avarage wordlength of an array of words (level2)].
function calcWordlength(words){
  let arr = [];
  for (i = 0; i < words.length; i++){
      arr.push(words[i].length);
  }
  return arr;
}

//callback function used in assignment 6 [remove duplicates from array]. 
function includes(checkWord, array){
  var checker
  var arr = wordsUnique
  for (i = 0; i < arr.length; i++){
      if (array[i] == checkWord) {
          return true;
      } else {
        checker = false;
      }
  }
  return checker;
}

//assignment 1 [Find the maximum] function.
function maxOfTwoNumbers(number1, number2){
  if (number1 > number2){
      return number1; 
  } else { 
      return number2;
  }
}

//assignment 2 [Finding Longest Word] function.
function findLongestWord(words){
  let arr = [];
  for (i = 0; i < words.length; i++){
      arr.push(words[i].length);
  }
  return(words[calcWordlength(words).indexOf(Math.max(...calcWordlength(words)))])
}

//assignment 3 [Calculating a Sum] function. 
function sumArray(numbers){
  result = 0;
  for (i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  return result;
}

//assignment 4 [Calculating the avarage of a sting of numbers (level1)] function. 
function avarageNumArray(numbers){
  return(sumArray(numbers)/numbers.length);
}

//assignment 5 [Calculating the avarage wordlength of an array of words (level2)] function. 
function avarageWordsArray(words){
  return(sumArray(calcWordlength(words))/calcWordlength(words).length);
}

//assignment 6 [remove duplicates from array] function. 
function uniquifyArray(words){
  var cleanArray = [];
  for (j = 0; j < words.length; j++){
      if (includes(words[j], cleanArray)){
          //
      } else {
          cleanArray.push(words[j]);
      }
  }   
  return cleanArray;
}

//assignment 7 [doesWordExist] function.
function doesWordExist(checkWord, array){
  var checker
  for (i = 0; i < array.length; i++){
      if (array[i] == checkWord) {
          return true;
      } else {
        checker = false;
      }
  }
  return checker;
}

//assignment 8 [counting repetition] function. 
function howManyTimes(checkWord, array){
  counter = 0;
  for (i = 0; i < array.length; i++){ 
      if (checkWord === array[i]){
          counter++;
      } else; 
  }
  return counter;
}

//bonus Quest [greatesProduct] function.
function greatestProduct(input){ 
  var product =[]
  for (j = 0; j < input.length; j++){
    for (i = 0; i < input[j].length -3; i++){
      product.push(input[j][i] * input[j][i+1] * input[j][i+2] * input[j][i+3]);
    } 
  }
  for (x = 0; x < input.length; x++){
    for (z = 0; z < input[x].length -3; z++){
      product.push(input[z][x] * input[z+1][x] * input[z+2][x] * input[z+3][x]);
    } 
  }  
  return Math.max(...product);
}


//function calls for all assignments >>>

//assignment 1 [Finding Longest Word] function call:
console.log(maxOfTwoNumbers(number1, number2));

//assignment 2 [Find the maximum] function call: 
console.log(findLongestWord(words));

//assignment 3 [calculating a sum] function call:
console.log(sumArray(numbers));

//assignment 4 [Calculating the avarage] function call. 
console.log(avarageNumArray(numbersAvg));

//assignment 5 [Calculating the avarage wordlength of an array of words (level2)] function call. 
console.log(avarageWordsArray(wordsArr));

//assignment 6 [remove duplicates from array] function call.
console.log(uniquifyArray(wordsUnique));

//assignment 7 [doesWordExist] function call. 
console.log(doesWordExist("machine", wordsFind));

//assignment 8 [howManyTimes] function call.
console.log(howManyTimes("matter", wordsCount));

//bonus Quest [greatestProduct] 
console.log(greatestProduct(matrix));