// Iteration #1: Find the maximum
function maxOfTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber){ return firstNumber} else {return secondNumber}
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  if (array.length == 0){return null}
  let longestWord = ''
  array.forEach(element => {element.length>longestWord.length? longestWord = element:null})
  return longestWord
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  let sum = 0
  array.forEach(element=>{sum+=element})
  if(sum){return sum}
  return 0
}



// Iteration #3.1 Bonus:

//CALCULATES THE SUM OF ANYTHING INSIDE THE ARRAY. IF IT'S NOT AN ARRAY, THROWS AN ERROR!
function sum(array,arrayIndex=0) { 
  if(!Array.isArray(array)){return 'Error: Not an array!'}
  switch (typeof array[arrayIndex]){
    case 'number':
      if(arrayIndex == array.length-1){
        return array[arrayIndex]
      } else {return array[arrayIndex]+sum(array,arrayIndex+1)}
    case "string":
      if(arrayIndex == array.length-1){
        return +array[arrayIndex].length
      } else {return array[arrayIndex].length+sum(array,arrayIndex+1)}
    case "boolean":
      if(arrayIndex == array.length-1){
        return array[arrayIndex] ? 1:0
      } else {return array[arrayIndex] ? 1+sum(array,arrayIndex+1):0+sum(array,arrayIndex+1)}
    case "object":
      if (Array.isArray(array[arrayIndex])){ // check if the element is an array or object
        if(arrayIndex == array.length-1){
          return sum(array[arrayIndex])
        } else {return sum(array[arrayIndex])+sum(array,arrayIndex+1)}
      } else { // if object, basically transform it into an array
        if(arrayIndex == array.length-1){
          return sum(Object.values(array[arrayIndex]))
        } else {return sum(Object.values(array[arrayIndex]))+sum(array,arrayIndex+1)}
      }
    default:
      if(arrayIndex >= array.length-1){//"greater or equals than" in order to catch an EMPTY ARRAY case, with length = 0
        return 0
      } else {return 0 + sum(array,arrayIndex+1)}
  }
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numericArray) {
  if (numericArray.length == 0){return null}
  return sumNumbers(numericArray)/numericArray.length
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(stringArray) {
  if(stringArray.length == 0){return null}
  let sum = 0
  stringArray.forEach(element=>{
     if(typeof element != 'string'){return 'Error: not a string!'}
     sum+=element.length
 })
  return sum/stringArray.length
}

// Bonus - Iteration #4.1

function avg(array) {
  if(array.length == 0){return null}
  return +(sum(array)/array.length).toFixed(2)
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

function uniquifyArray(array) {
  if(array.length===0){return null}
  const newArray=[]
  array.forEach(element=>{
    if(newArray.indexOf(element) === -1){newArray.push(element)}
  })
  return newArray
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordArray,searchedWord) {
  if(wordArray.length===0){return null}
  let result=false
  wordArray.forEach(element=>{if(element === searchedWord){return result=true}})
  return result
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

function howManyTimes(wordArray,searchedWord) {
  let searchedWordIndex = wordArray.indexOf(searchedWord)
  return searchedWordIndex === -1 ? 0 : 1+howManyTimes(wordArray.slice(searchedWordIndex+1),searchedWord)  
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

function multiplyNumbers(array) {
  let result = 1
  array.forEach(element=>{result*=element})
  if(result){return result}
  return 0
}

function greatestProduct(matrix) {
  if(matrix.length<4){
    return 'ERROR: MATRIX LESSER THAN 4X4!'
  }
  if(matrix[0].length<4){
    return 'ERROR: MATRIX LESSER THAN 4X4!'
  }
  if(matrix.length !== matrix[0].length){
    return 'ERROR: MATRIX NOT SQUARE!'
  }
  let allOne = true
  for(let lines = 0;lines<matrix.length;lines++){
    for(let columns = 0;columns<matrix[0].length-3;columns++){
      if(matrix[lines][columns]!==1){allOne = false}
    }
  }
  if(allOne){return 1}
  let greatest = 0
  for(lines = 0;lines<matrix.length-3;lines++){ // go throw lines
    for(columns = 0;columns<matrix[0].length-3;columns++){ // go throw columns
      let horizontalItems = [matrix[lines][columns],matrix[lines][columns+1],matrix[lines][columns+2],matrix[lines][columns+3]]
      let horizontalProduct=multiplyNumbers(horizontalItems)
      let verticalItems = [matrix[lines][columns],matrix[lines+1][columns],matrix[lines+2][columns],matrix[lines+3][columns]]
      let verticalProduct=multiplyNumbers(verticalItems)
      console.log(horizontalItems)
      console.log(verticalItems)
      let localGreatest = horizontalProduct > verticalProduct ? horizontalProduct:verticalProduct
      if (localGreatest>greatest){greatest = localGreatest}
    }
  }
  return greatest
}

function greatestProductOfDiagonals(matrix){
  if(matrix.length<4){
    return 'ERROR: MATRIX LESSER THAN 4X4!'
  }
  if(matrix[0].length<4){
    return 'ERROR: MATRIX LESSER THAN 4X4!'
  }
  if(matrix.length !== matrix[0].length){
    return 'ERROR: MATRIX NOT SQUARE!'
  }
  let allOne = true
  for(let lines = 0;lines<matrix.length;lines++){
    for(let columns = 0;columns<matrix[0].length-3;columns++){
      if(matrix[lines][columns]!==1){allOne = false}
    }
  }
  if(allOne){return 1}
  let greatest = 0
  let diagonalRightProduct = 0
  let diagonalLeftProduct = 0
  for(lines = 0;lines<matrix.length-3;lines++){ // go throw lines
    for(columns = 0;columns<matrix[0].length;columns++){ // go throw columns
      if(matrix[lines+3][columns+3]){ // check if the last right diagonal item exists
          let diagonalRightItems = [matrix[lines][columns],matrix[lines+1][columns+1],matrix[lines+2][columns+2],matrix[lines+3][columns+3]]
          diagonalRightProduct = multiplyNumbers(diagonalRightItems)
          console.log(diagonalRightItems)
      }
      if(matrix[lines+3][columns-3]){ // check if the last left diagonal item exists
          let diagonalLeftItems = [matrix[lines][columns],matrix[lines+1][columns-1],matrix[lines+2][columns-2],matrix[lines+3][columns-3]]
          diagonalLeftProduct = multiplyNumbers(diagonalLeftItems)
          console.log(diagonalLeftItems)
      }
      let greatestOfDiagonals = diagonalRightProduct > diagonalLeftProduct ? diagonalRightProduct:diagonalLeftProduct
      if(greatestOfDiagonals> greatest){greatest = greatestOfDiagonals} 
      }
  }
  return greatest
}

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
