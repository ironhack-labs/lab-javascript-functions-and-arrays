// Find the maximum
function maxOfTwoNumbers(numberOne, numberTwo){
  var largestNumber = Math.max(numberOne, numberTwo);
  console.log(largestNumber);
  }

// Finding Longest Word --- my answer
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function longest(words) {
var longest;
 for(i=1;i < words.length;i++) {
   if(words[i-1].length > words[i].length) {
     longest = words[i-1];
     } else {
       continue;
     }
   }
 return(longest);
 }
console.log(longest(words));

// CLASSROOM ANSWER--------------------------------
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(wordsArray){
  var longestWord = "";
  wordsArray.forEach(function(eachWord){
    if(eachWord.length > longestWord.length){
      longestWord = eachWord;
    }
  });
  return longestWord;
}

console.log(findLongestWord(words));

//remember that each iteration of theloop will take one word
// and then replace that word, for second loop the new word
// is the previous iteration of the loop. first time = mystery, second time
// == brother, and so on, this way we can compare the two in the array
// Nick refers to this as an anonymous function, it exists only within
//the forEeach loop.

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sum(numbers){
  var adding = 0;
  for(x=0; x < numbers.length; x++){
    adding += numbers[x];
  }
  return adding;
}

console.log(sum(numbers));

// CLASSROOM ANSWERS---------------------------------------------

function calculateSum(arrayOfNumbers){
  var sum = 0;
  arrayOfNumbers.forEach(function(oneParticularNumber){
    sum += oneParticularNumber;
  });
  return sum;
}

console.log(calculateSum(numbers));

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function avg(numbersAvg){
  var sum = 0;
  for(x=0; x < numbersAvg.length; x++){
    sum += numbersAvg[x];
  }
  var average = sum / numbersAvg.length;
  return average;
}

console.log(avg(numbersAvg));

//CLASSROOM ANSWER---------------------------------------

function calculateAverage(numberArray){
  return (calculateSum(numberArray) / numberArray.length);
}

console.log(calculateAverage(numbers));

/* here we are using the calculateSum function that we created in order
to call the sum and save us a step in the calculateAverage function*/

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

function avgWordLength(wordsArr){
  var sum = 0;
  for(x=0; x < wordsArr.length; x++) {
    sum += wordsArr[x].length;
    }
  var ave = sum/wordsArr.length;
}

console.log(avgWordLength);

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

function uniquifyArray(wordsUnique){
  for(i=0; i < wordsUnique.length; i++){

  }
}

/* Classroom Answer */

var wordsWithDuplicates = [
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

function uniquifyArray(theArray){
  if(theArray.length < 1){
    return undefined;
    }
    var newArray = [];
    wordsWithDuplicates.forEach(function(eachWord){

      if(newArray.indexOf(eachWord) === -1){
        newArray.push(eachWord);
      }
    });
  return newArray;
}
console.log(uniquifyArray(wordsWithDuplicates));

/* In this example, the professor took a function and checked the avgWordLength
first to make sure we have no undefined elements. Then we created a new blank
array that will be the place holder for creating a new array absent of duplicates
the conditions now check each word in a For each loop and made sure the value
is === to -1 (meaning that its not part of the new array), it places the words
into the new Array and removes duplicates if a -1 is not returned

We can also us if(!NewArray.includes(eachWord)) .icludes returned a T or F value.
saves us from using === and comparison expressions
*/

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

function doesItExist(arrayOfWords, wordToSearchFor){
  var doesIt = false;
  arrayOfWords.forEach(function(eachWord){
    if(eachWord === wordToSearchFor)
    {doesIt = true;}
  });
  return doesIt;
}
console.log (doesItExist(wordsWithDuplicates, 'kentucky'));

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

function numberOfTimes(theArray, theWord){
  var count = 0;
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
