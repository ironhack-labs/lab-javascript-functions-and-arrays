// Find the maximum. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.
// function maxOfTwoNumbers(){
    // }
// 1. assign two the function arguments numbOne and numbTwo
function maxOfTwoNumbers(numbOne, numbTwo){
    }
// 2. Then add instructionns - if numbOne is bigger than numbTwo, else numbOne is smaller than numbTwo
function maxOfTwoNumbers(numbOne, numbTwo) {
  if (numbOne > numbTwo) {
    console.log(numbOne + " is bigger than " + numbTwo);
  } else {
    console.log(numbOne + " is smaller than " + numbTwo);

  }
}
//3.  then we want to return the result

function maxOfTwoNumbers(numbOne, numbTwo) {
  if (numbOne > numbTwo) {
    console.log(numbOne + " is bigger than " + numbTwo);
  } else {
    console.log(numbOne + " is smaller than " + numbTwo);
  }
  return 
}
// Let's compare two numbers - maxOfTwoNumbers(10,25)
function maxOfTwoNumbers(numbOne, numbTwo) {
  if (numbOne > numbTwo) {
    console.log(numbOne + " is bigger than " + numbTwo);
  } else {
    console.log(numbOne + " is smaller than " + numbTwo);
  }
  return 
}
maxOfTwoNumbers(10,25)

// it looks to work ;-)

// ======================================

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
// 1. Creating a function findingLongestWord
function findingLongestWord() {
}
// 2. creating variable var longestWord

function findingLongestWord() {
   var longestWord = "";
}
// 3. Creating the loop to find the longest word from the array words using .length
function findingLongestWord() {
   var longestWord = "";
   for(i = 0; i < words.length; i++) 
}

// 4. If we find the longest word we want it to be saved in variable longestWord
function findingLongestWord() {
    var longestWord = "";
    for(i = o; i < words.length; i++) {
      if(words[i].length > longestWord.length) {
        longestWord = word[i];
      }
    }
}
// 5. then we want to return the result
function findingLongestWord() {
    var longestWord = "";
    for(i = 0; i < longestWord; i++) {
      if(words[i].length > longestWord.length) {
        longestWord = words[i]
      }
    }
    return longestWord 
}
// 6. Finally we are calling the function findingLongestWord
function findingLongestword() {
    var longestWord = "";
    for(i = 0; i < longestWord; i++) {
      if(words[i].length > longestWord.length) {
        longestWord = words[i]
      }
    }
  return longestWord
}

findLongestWord();
// ===================================
// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// 1. We are creating the function sumOfArray 

function sumOfArray() {
}

//2. Creating variable sum
function sumOfArray() {
    var sum = 0;
}

//3. creating a loop using array length
function sumOfArray() {
  var sum = 0;
  for(i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
}

//4. We want to return result 
function sumOfArray() {
  var sum = 0;
  for(i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum;

//5. And finally we will call the function

function sumOfArray() {
  var sum = 0;
  for(i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum;
}
sumOfArray(numbers);

// =============================================

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

//1. First I will create a function to calculate the sum of the array numbersAvg as in exercise above

function sumOfArray() {
  var sum = 0;
  for(i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i]
  }
  return sum;
}
sumOfArray(numbers);

// Then we can create a function avergaeNumbers and divide the result od function sumOfArray by the length of the array and get an average
  function averageNumbers () {
  return sumOfArray(numbersAvg)/(numbersAvg.length)
  }
  
  averageNumbers(numbersAvg);


// =============================================

// Array of Strings - Write a function averageWordLength that receives an array of words and calculate the average length of the words:

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

// 1. We are creating a function sumOfArray

function sumOfArray() {

}

// 2. Loop over an array to calculate a sum of the words
function sumOfArray(){
  var sum = 0;
  for(var i=0; i < words.length; i++)  {
   sum += words[i].length;
    }
   
  }
  
  // 3. return value 
  function sumOfArray(){
    var sum = 0;
    for(var i=0; i < words.length; i++)  {
     sum += words[i].length;
      }
      return sum;
    }
  
    // 4. calling the function 
    function sumOfArray(){
      var sum = 0;
      for(var i=0; i < words.length; i++)  {
       sum += words[i].length;
        }
        return sum;
      }

  sum(words);

  // 5. creating of function averageWordLength to calculate average word length by dividing sum of the words by the number of words in the array
  function sumOfArray(){
    var sum = 0;
    for(var i=0; i < words.length; i++)  {
     sum += words[i].length;
      }
      return sum;
    }

sum(words);
  function averageWordLength (arr) {
  return sum(words)/words.length
  }
  averageWordLength(words);


// =============================================
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

// 1. Creating new empty variable newArray

var newArray = []

//2. creating function uniquifyArray 

function uniquifyArray (array) {
}

//3. creating a loop around an array 

var newArray = []
function uniquifyArray (array) {
	for(var i = 0; i < array.length; i++){
  }

// 4. using function if to check by indexOf every index in array we looped over

var newArray = []
function uniquifyArray (array) {
	for(var i = 0; i < array.length; i++){
    if(newArray.indexOf(array[i]) === -1) {
    }

    // 5. anything which isn't equal to -1 we are pushing to the newArray

    var newArray = []
    function uniquifyArray (array) {
      for(var i = 0; i < array.length; i++){
        if(newArray.indexOf(array[i]) === -1) {
          newArray.push(array[i])
            }
      }
    }

//6. Finally we are calling the function 

var newArray = []
function uniquifyArray (array) {
	for(var i = 0; i < array.length; i++){
		if(newArray.indexOf(array[i]) === -1) {
			newArray.push(array[i])
        }
	}
}
uniquifyArray(words)
newArray;

// =============================================
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

var newArray = []

// function doesWordExist (array) {
//   for(var i = 0; i < array.length; i++){
//         if(newArray(array[i]) === -1) {
//           newArray.push(array[i])
//             }
// }


var words = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];
function doesWordExist(el, index, arr) {
    for(var i = 0; i < words.length; i++){
       if (index === 0){
         return true;
         } else {
           return false;
    }
  }
}

doesWordExist()


// =============================================
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

function howManyTimes(arr, val) {
  let x = 0;
    for(let i = 0; i < arr.length; i++) {
      if(val == arr[i]) {
        x++;
      } 
    }
  return x;
}

console.log(howManyTimes(wordsCount, 'matter'));

//works!!! result - 4
// =============================================

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
