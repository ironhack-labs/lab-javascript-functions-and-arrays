// Find the maximum
function maxOfTwoNumbers (num1, num2){
  if(num1 > num2){
    return num1;
  }else{
    return num2;
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

function findLongestWord(val){
  words.length[val]
}

findLongestWord()

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers){
  var sum = 0;
  for(var i = 0;i < numbers.length; i++){
  sum += numbers[i];
  }
  return sum
}

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg){
  return sumArray(numbersAvg)/numbersAvg.length;
}
averageNumbers(numbersAvg)

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


function averageWordLength (arr){
  for(var i = 0; i < arr.length; i++){

  }
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


function doesWorkExist(wordsFind, val){
  for(var i = 0; i < wordsFind.length; i++){
    if( wordsFind[i] === val){
      return true;
    }else{
      return false;
    }
  }
}
doesWorkExist(wordsFind, "truth");