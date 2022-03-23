// Iteration #1: Find the maximum
function maxOfTwoNumbers(firstNumber,secondNumber) {
  let largestNumber;
  if(firstNumber > secondNumber){
    largestNumber = firstNumber;
  }else if(firstNumber < secondNumber){
    largestNumber = secondNumber;
  }else{
    largestNumber = firstNumber;
  }
  return largestNumber;
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(inputArray) {
  let longestWord = 0;
  let longestWordIndex;
  if (inputArray.length > 0 ){
  inputArray.forEach(function(inputWord, index){
      if(inputWord.length > longestWord){
          console.log(`${inputWord} is the longest word so far!`);
          longestWord = inputWord.length;
          longestWordIndex = index;
      }      
  });
  }else{
    return null;
  }
 return(inputArray[longestWordIndex]);
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(inputArray) {
  let calculatedSum = 0;
  inputArray.forEach(function(inputNumber){
    // console.log(typeof inputNumber);
    if(typeof inputNumber === "number"){
      calculatedSum = calculatedSum + inputNumber;
    }else{
      throw new Error("Unsupported data type sir or ma'am");
    }
  });
  return calculatedSum;
}

// Iteration #3.1 Bonus:
//Re-factoring to take anything in, string, number, bool, and making it numeric to send to sumNumbers
function sum(inputArray) {
    arrayAsNumbers = [];
    inputArray.forEach(function(arrayItem){
      if(typeof arrayItem === "object" || arrayItem.isArray){
        throw new Error("Unsupported data type sir or ma'am");
      }else{
      if(typeof arrayItem === "string"){
            console.log(arrayItem.length);   
            arrayAsNumbers.push(arrayItem.length);
      }else{
        arrayAsNumbers.push(+arrayItem);
      }
    }
    });
    return sumNumbers(arrayAsNumbers);
}

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(inputArray) {
  if (inputArray.length > 0 ){
    let sumOfArray = sumNumbers(inputArray);
    let averageOfArray = sumOfArray/inputArray.length;
    return averageOfArray;
  }else{
    return null;
  }
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(inputArray) { 
  let lengthOfWords = [];
  inputArray.forEach(function(arrayItem){
      lengthOfWords.push(arrayItem.length);
  });
  let getAverage = averageNumbers(lengthOfWords);
  return getAverage;
}

// Bonus - Iteration #4.1
function avg(inputArray) {
  if(inputArray.length === 0){
    return null;
  }
  arrayAsNumbers = [];
  inputArray.forEach(function(arrayItem){
    if(typeof arrayItem === "string"){
          //console.log(arrayItem.length);   
          arrayAsNumbers.push(arrayItem.length);
    }else{
      arrayAsNumbers.push(+arrayItem);
    }
  });
  //return averageNumbers(Math.round(arrayAsNumbers*10)/10);    
  // Notes from class: Should've just used .toFixed(2) - this is over-complicated 
  let avgRounded = (Math.round(averageNumbers(arrayAsNumbers)*100)/100);
  return avgRounded;
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

function uniquifyArray(inputArray) {
  let resultArray = [];
  if(inputArray.length === 0){
      return null;
  }
  inputArray.forEach(function(arrayItem){
    if ( resultArray.indexOf(arrayItem) < 0 ) {
      resultArray.push(arrayItem);
    } else {
      console.log(`${arrayItem} is already in the array.`);
    }
  });
  return resultArray; 
}


// function uniquifyArraySet(inputArray) {
    // if(inputArray.length === 0){
      // return null;
  // }
  // let returnArray = []
  // let setOfArray = new Set(inputArray);
  // returnArray = Array.from(setOfArray);
  // let newArray = Array.from(new Set(inputArray));

// The 'easy way'  
function uniquifyArraySet(inputArray) {  
  return inputArray.length === 0 ? null : Array.from(new Set(inputArray));
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(inputArray,searchWord) {
  if(inputArray.length === 0){
      return null;
  }
  let found = false;
  inputArray.forEach(function(arrayItem){
    // console.log(`Comparing ${arrayItem} with ${searchWord}`);
    if (arrayItem === searchWord){
      // return true; ah, I can't do this because I'm in a function inside a function - it only breaks out of the first
      // making it behave differently looks very confusing to read
      found = true;
    }
  });
  // return false;
  // Ternary operator
  // return arr.length ? null : found;
  return found;
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

function howManyTimes(inputArray,searchWord) {
  let count = 0;
  inputArray.forEach(function(arrayItem){
    if (arrayItem === searchWord){
      count++;
    }
  });
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

function productByRow(inputMatrix){
  const productOf = 3;
  let inputSize = inputMatrix.length;
  let fourAcross;
  rowResult = [];
  let i;
  for(x of inputMatrix){
    i = 0;
    while(i + productOf < inputSize){
      fourAcross = x[i]*x[i+1]*x[i+2]*x[i+3];
      rowResult.push(fourAcross);
      i++;
    }
  }
  return rowResult;
}

function makeTwoDee(inputMatrix){
  let resultArray = [];
  //this presumes we're in A Matrix [square, so using index 0], woah
  for ( x = 0; x < inputMatrix.length; x++){
    let innerArray = [];
    for ( y = 0; y < inputMatrix[0].length; y++){
        innerArray.push(inputMatrix[y][x]);
    }
    resultArray[x] = innerArray;
  }
  return (resultArray);
}

function greatestProduct(inputMatrix) {
  let productsByRow = Math.max(...(productByRow(inputMatrix)));
  let productsByCol = Math.max(...(productByRow(makeTwoDee(inputMatrix))));
  let findMax = Math.max(productsByRow,productsByCol);
  return(findMax);
} 

//I haven't actually made certain this works properly - but I'm tired of looking at it :D
//by my logic, the highest is 89*94*97*87 - 70600674
//starts at matrix[12][6] going diagonally to the left ?
//
function greatestProductOfDiagonals(inputMatrix){
  const productOf = 3;
  let inputSize = inputMatrix.length;
  let fourAcross;
  diaResult = [];
  let i;
  inputMatrix.forEach(function(innerArray, index){
    i = 0;    
    while(i + productOf < inputSize && index + productOf < inputSize){
      fourDiag = inputMatrix[index][i]*inputMatrix[index+1][i+1]*inputMatrix[index+2][i+2]*inputMatrix[index+3][i+3];
      if(i>=3){
        fourOpposite = inputMatrix[index][i]*inputMatrix[index+1][i-1]*inputMatrix[index+2][i-2]*inputMatrix[index+3][i-3];
        diaResult.push(fourOpposite);
      }
      diaResult.push(fourDiag);
      i++;
    }    
  });
  return Math.max(...diaResult);
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
    greatestProduct
  };
}
