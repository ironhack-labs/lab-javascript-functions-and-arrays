// [Ironhack] Find the maximum
function maxOfTwoNumbers(number1, number2) {
  return Math.max(number1, number2)
}
// [Ironhack] Finding Longest Word
//[Bana]
//sort words by word length in decending order with the sort method and a compare function. Then return the word on index 0
function findLongestWord(array) {
  array.sort(function (a, b) {
    return b.length - a.length;
  })
  return array[0]
}

var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];


// [Ironhack] Calculating a Sum
// [Bana] use the reduce method and start with an initial value of "0" since we don't know the initial value of the array
function sumArray(array) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer, 0)
}

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// [Ironhack] Calculate the Average
// [Bana] check if array only includes numbers, then divide sum by array length
function averageNumbers(array) {
  if (array.every(function (element) { return typeof element === "number" }) && array.length > 0) {
    return sumArray(array) / array.length
  }
}

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// [Ironhack] Array of Strings
// [Bana]
// join all elements of the array to one word with join() menthod
// check the length of the word (sumLetters) and divide it by the length of the array (array.length)
function averageWordLength(array) {
  if (array.length > 0) {
    let sumLetters = array.join('').length

    return sumLetters / array.length
  }
}

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

// [Ironhack] Unique Arrays
// [Bana] 
// use the filter & indexOf method to create a new array of unique words
// since array.indexOf(element) returns the index of the first appearnace of that element in that array, 
// check if indexOf() the current element is equal to the current index
// if the element appears for the first time, indexOf() should be equal to current index
// if the element is repeated, then it's on a higher index than the first appearance of that element. 
// Hence, indexOf() of that repeated element won't equal array.indexOf(element) 
function uniquifyArray(array) {
  if(array.length > 0){
    let uniqueArray = array.filter((element, index) => array.indexOf(element) === index) 
    return uniqueArray
  }
}


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

// [Ironhack] Finding Elements
// [Bana] use include method in order to check if the word exists in that array 
function doesWordExist(array, word) {
  if(array.length > 0) {
    return array.includes(word)
  }
  else{
    return false
  }
}
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

// [Ironhack] Counting Repetion
// [Bana] 
// use filter method in oder to create a new array which filters each element of that array that's equal to that word
// and then return the length of that filtered array in order to get the number of times that word appears

function howManyTimes(array, word) {
  if(array.length > 0){
    let wordRepetition = array.filter(element => element === word)
    return wordRepetition.length
  }
  else{
    return false
  }
}

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
// [Ironhack] Bonus Quest 
//[Bana] NOT WORKING YET
// Those two functions not working: greatestProductUpToDown(grid) & greatestProductDownToUp(grid)
function greatestProduct(grid){
  let greatestProduct = Math.max(greatestProductLeftToRight(grid),greatestProductRightToLeft(grid),greatestProductUpToDown(grid),greatestProductDownToUp(grid))
  return greatestProduct
}

// find the greatest product from left to right
let greatestProductLeft = 0
function greatestProductLeftToRight(grid){
  for(i = 0; i < grid.length; i++){
    for(j = 0; j < grid[i].length; j++){
      //multiply grid[i][j] with the next 3 elements in that array if those elements exists
      //assign the value of the product to the global variable greatestProductLeft if the product is greater than the current value of greatestProductLeft
      if(doesWordExist(grid[i], grid[i][j+1]) && doesWordExist(grid[i], grid[i][j+2]) && doesWordExist(grid[i], grid[i][j+3])){ 
        if(grid[i][j]*grid[i][j+1]*grid[i][j+2]*grid[i][j+3] > greatestProductLeft) {
          greatestProductLeft = grid[i][j]*grid[i][j+1]*grid[i][j+2]*grid[i][j+3] 
        }
      }
      }

    }
    return greatestProductLeft
  }



// find the greatest product from right to left
let greatestProductRight = 0
function greatestProductRightToLeft(grid){
  for(i = 0; i < grid.length; i++){
    for(j = grid[i].length - 1; j >= 0; j--){
      //multiply grid[i][j] with the previous 3 elements in that array if those elements exists
      //assign the value of the product to the global variable greatestProductRight if the product is greater than the current value of greatestProductRight
      if(doesWordExist(grid[i], grid[i][j-1]) && doesWordExist(grid[i], grid[i][j-2]) && doesWordExist(grid[i], grid[i][j-3])){
        if(grid[i][j]*grid[i][j-1]*grid[i][j-2]*grid[i][j-3] > greatestProductRight){
          greatestProductRight = grid[i][j]*grid[i][j-1]*grid[i][j-2]*grid[i][j-3]
        }
      }

    }
    return greatestProductRight 
  }
}

// find the greatest product from top to bottom
let greatestProductUp = 0
function greatestProductUpToDown(grid){
  let i = 0
  for(let j = 0; j < grid[i].length; j++){
    for(i = 0; i < grid.length; i++){
      if(doesWordExist(grid[i], grid[i+1][j]) && doesWordExist(grid[i], grid[i+2][j]) && doesWordExist(grid[i], grid[i+3][j])){
        if(grid[i][j]*grid[i+1][j]*grid[i+2][j]*grid[i+3][j] > greatestProductUp) {
          greatestProductUp = grid[i][j]*grid[i+1][j]*grid[i+2][j]*grid[i+3][j]
        }
      }

    }
    return greatestProductUp
  }
}

// find the greatest product from bottom to top
let greatestProductDown = 0
function greatestProductDownToUp(grid){
  let i = 0
  for(let j = 0; j < grid[i].length; j++){
    for(i = grid.length - 1; i >= 0; i--){
      if(doesWordExist(grid[i], grid[i-1][j]) && doesWordExist(grid[i], grid[i-2][j]) && doesWordExist(grid[i], grid[i-3][j])){
        if(grid[i][j]*grid[i-1][j]*grid[i-2][j]*grid[i-3][j] > greatestProductDown){
          greatestProductDown = grid[i][j]*grid[i-1][j]*grid[i-2][j]*grid[i-3][j]
        }
      }

    }
    return greatestProductDown 
  }
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
