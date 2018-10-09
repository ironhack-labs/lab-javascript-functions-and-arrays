// Find the maximum

function maxOfTwoNumbers(a,b) {
  if (a>=b) return a
  else if (a<b) return b
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

function findLongestWord (wordArray) {
  if (wordArray.length === 0) return
  var max = "";
  var index = 0;
  //   for (let i=0; i < wordArray.length; i++) {
  //   if (wordArray[i].length > max) {
  //     max = wordArray[i].length;
  //     index = i;
  //   }
  // }
  // return wordArray[index]

  wordArray.forEach(function(element){
    if (element.length > max.length) max = element
  })
  return max


}


// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray (arraySum) {
  return arraySum.reduce(function(total, num){return total + num},0)
}



// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers (array) {
  if (array.length === 0) return
  return sumArray(array) / array.length;
}

console.log(typeof averageNumbers)

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


function averageWordLength (arrayStrings) {
  if (arrayStrings.length === 0) return
var arraySum = 0;
  for (let i=0; i < arrayStrings.length; i++) {
    arraySum += arrayStrings[i].length;
  }
  return arraySum / arrayStrings.length;
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


function uniquifyArray (arrayString) {

  // for (let i=0; i < arrayStrings.length; i++) {
  //   for (let j=arrayString.toI; j< arraystrings.length;)
  //   if (arrayString[i] === stringStored) {
  //     arrayString.splice(i, 1);
  //   }
  // }
  if (arrayString.length === 0) return
  var  temp = [];
  for (let i=0; i < arrayString.length; i++) {
    if (temp.indexOf(arrayString[i]) == -1) temp.push(arrayString[i])
  }
  return temp;
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


function doesWordExist (arrayOfWords, word) {
  let isWord = false;
  if (arrayOfWords.length === 0) return false
  // for (let i=0; i<arrayOfWords.length; i++) {
  //   if (word == arrayOfWords[i]) return true
  // }
  // return false
  arrayOfWords.forEach(function(element){
      if (word == element) isWord=true;
  })
  if (isWord) return true;
  return false;
}

function howManyTimes (arrayOfWords, word) {
  var tracker = 0;
  if (arrayOfWords.length === 0) return false
  for (let i=0; i<arrayOfWords.length; i++) {
    if (word == arrayOfWords[i]) tracker++;
  }
  return tracker;
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
// Bonus Quest

function product(a,b,c,d) {
  return a*b*c*d;
}

function greatestProduct(arrayMatrix) {
  var maxresult = 0;
  var temp = 0;
  for (let i=0; i<arrayMatrix.length; i++) {
    for (let j=0; j<arrayMatrix[0].length-4; j++) {
      temp = product(arrayMatrix[i][j], arrayMatrix[i][j+1], arrayMatrix[i][j+2], arrayMatrix[i][j+3])
      if(temp > maxresult) maxresult = temp;
    }
  }

  for (let k=0; k<arrayMatrix[0].length; k++) {
    for (let l=0; l<arrayMatrix.length-4; l++) {
      temp = product(arrayMatrix[l][k], arrayMatrix[l][k+1], arrayMatrix[l][k+2], arrayMatrix[l][k+3])
      if(temp > maxresult) maxresult = temp;
    }
  }

  return maxresult;
}

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
