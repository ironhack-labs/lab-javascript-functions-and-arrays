// Iteration #1: Find the maximum
function maxOfTwoNumbers (number1, number2){
  if (number1>number2){
    return number1;
  } else {
    return number2;
  }
}
console.log(maxOfTwoNumbers(900,3));

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const words2 = [];
function findLongestWord(wordArray){
  let longestWord = null;
  if (wordArray.length > 0){
  longestWord = wordArray[0];
  for(let i = 0; i < wordArray.length; i++){
    if (wordArray[i].length > longestWord.length){
      longestWord = wordArray[i];
    }
  }
}
  return longestWord;
}
console.log(findLongestWord(words));
console.log(findLongestWord(words2));
// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sumNumbers = arrayOfNumbers => {
  let aggregateSum = 0;
  for(let i = 0; i < arrayOfNumbers.length; i++) { 
    aggregateSum += arrayOfNumbers[i];
  }
  return Math.round(aggregateSum*100)/100;
}
console.log(sumNumbers(numbers));

// Iteration #3.1: A generic sum() function
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

let sum = someInput => {
  let final = 0;
  for (let i = 0; i < someInput.length; i++) {
    switch (typeof someInput[i]) {
      case 'number':
        final += someInput[i];
        break;
      case 'string':
        final += someInput[i].length;
        break;
      case 'boolean':
        if (someInput[i] === true){
          final += 1;
        }
        break;
      case 'object':
      case 'array':
        throw Error(`Unsupported data type sir or ma'am`);
        break;
      default:
        final += 0;
    }
  }
  return Math.round(final*100)/100;
}
// sum(mixedArr);

// Iteration #4: Calculate the average
// Level 1: Array of numbersExpected 5.111111111111111 to be 5.11.
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

let averageNumbers = someInput2 => {
  if(someInput2.length === 0){
    return null;
  } else{
  return Math.round(sumNumbers(someInput2)/someInput2.length*100)/100;
  }
}
console.log(averageNumbers(numbersAvg));

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
let averageWordLength = someInput3 => {
  if(someInput3.length === 0){
    return null;
  } else {
    return Math.round(sum(someInput3)/someInput3.length*100)/100;
}s
}
console.log(averageWordLength(wordsArr));

// Bonus - Iteration #4.1: A generic avg() function
let avg = averageWordLength;
console.log(avg(mixedArr));
const mixedArr2 = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false];
console.log(avg(mixedArr2));


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

let uniquifyArray = someInput4 =>{
  if(someInput4.length === 0){
    return null;
  } else {
  let uniqueArray = [];
  for(let i=0; i<someInput4.length; i++){
    if(uniqueArray.indexOf(someInput4[i]) === -1){
      uniqueArray.push(someInput4[i]);
    }
  }
  return uniqueArray;
  }
}
console.log(uniquifyArray(wordsUnique));

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

let doesWordExist = (wordArray, searchWord) => {
  if( wordArray.length === 0 || searchWord.length === 0){
    return null;
  } else if (wordArray.indexOf(searchWord) === -1){
    return false;
  } else {
    return true;
  }
}

console.log(doesWordExist(wordsFind, 'papa'));

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

let howManyTimes = (someWordArray, someSearchWord) => {
  if (someWordArray.length === 0 || someSearchWord.length === 0){
    return 0;
  } else {
    let counter = 0;
    for(let i = 0; i< someWordArray.length; i++){
      if (someWordArray[i] == someSearchWord){
        counter ++;
      }
    }
    return counter;
  }
}

console.log(howManyTimes(wordsCount, 'matter'));
console.log(howManyTimes(wordsCount, 'whatever'));

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

console.log(matrix[1].length);

let greatestProduct = someMatrix => {
  let product = 0;
  let horizontalProduct = 0;
  let verticalProduct = 0;
  // loop for horizontal product
  for (let y = 0; y<someMatrix.length; y++){
    for (let x=0; x<someMatrix[1].length -4; x++){
      horizontalProduct = someMatrix[y][x]*someMatrix[y][x+1]*someMatrix[y][x+2]*someMatrix[y][x+3];
      if(horizontalProduct > product){
        product = horizontalProduct;
      }
    }
}
  // Loop for Vertical Product
  for (let xx=0; xx<someMatrix[1].length; xx++) {
    for (let yy=0; yy<someMatrix.length-4; yy++){
      verticalProduct = someMatrix[yy][xx]*someMatrix[yy+1][xx]*someMatrix[yy+2][xx]*someMatrix[yy+3][xx];
      if( verticalProduct > product){
        product = verticalProduct
      }
    }
  }
  return product;
}
console.log(greatestProduct(matrix));

let greatestProductOfDiagonal = someMatrix2 => {
  let product = 0;
  let leftToRight = 1;
  let rightToLeft = 1;
  // loop for left to right diagonal

    for (let x = 0; x < someMatrix2[1].length; x++){
      for (let i = 0; i < someMatrix2.length - x; i++){
        leftToRight = leftToRight*someMatrix2[i][i+x];
        if(leftToRight > product){
          product = leftToRight
        }
      }
    
  }
  
    for (let y = 0; y < someMatrix2.length; y++){
      for (let i = 0; i < someMatrix2.length - y; i++){
        leftToRight = leftToRight*someMatrix2[i+y][i];
        if(leftToRight > product){
          product = leftToRight
        }
      }
    
  }

  // loop for right to left diagonal
  
    for (let x = someMatrix2[1].length - 1; x <= 0; x--){
      for (let i = 0; i <= x; i--){
        rightToLeft = rightToLeft*someMatrix2[i][x-i];
        if(rightToLeft > product){
          product = rightToLeft
        }
      }
    
  }
  
    for (let y = someMatrix2.length -1; y <= 0; y--){
      for (let i = 0; i <= y; i--){
        rightToLeft = rightToLeft*someMatrix2[y-i][i];
        if(rightToLeft > product){
          product = rightToLeft
        }
      }
    
  }
return product;
}
console.log(greatestProductOfDiagonal(matrix));