// Find the maximum
function maxOfTwoNumbers(firstNumber, secondNumber){ 
  if(firstNumber > secondNumber){
    return firstNumber;
  }
  else if( firstNumber === secondNumber){
    console.log('they are equal')
  }
  else {
    return secondNumber;
  }
}

// Finding Longest Word
// Create the array of words
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(words){
  var bigWord = "";
  for (i = 0; i < words.length; i++){
  if(words[i].length > bigWord.length)
  {
    bigWord = words[i];
  } 
 }
return bigWord;
}

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers){
var sumOf = 0;
for (i = 0; i < numbers.length; i++)
  {
   sumOf = sumOf + numbers[i]; 
  }
  return sumOf;
}


// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg){
  return sumArray(numbersAvg) / numbersAvg.length;
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

function averageWordLength(wordsArr){
  var wordsCount = [];
  for (i = 0; i < wordsArr.length; i++){
    wordsCount.push(wordsArr[i].length);
  }
return averageNumbers(wordsCount);
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

function uniquifyArray(wordsUnique){
  var uniqueArray = [];
  for (i = 0; i < wordsUnique.length; i++){
    if(uniqueArray.indexOf(wordsUnique[i]) === -1)
      {
        uniqueArray.push(wordsUnique[i]);
      } 
  }
  return uniqueArray;
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

function doesWordExist(wordsArray,searchWord){
  for (i = 0; i < wordsArray.length; i++){
    if (wordsArray[i] === searchWord){
      return true;
    }     
  }
return false;
}


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

function howManyTimes(wordsArray,searchWord){
  var wordCount = 0; 
  for (i = 0; i < wordsArray.length; i++){
     if (wordsArray[i] === searchWord){
       wordCount++
     }
   }
  return wordCount
}