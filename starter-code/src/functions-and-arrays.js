// Find the maximum
function maxOfTwoNumbers(number1,number2) {
  if (number1>number2) {return number1;}
  if (number2>number1) {return number2;}
  return number1; // if non of the other conditions are applied, it means both number are equal
}

console.log(maxOfTwoNumbers(15,10));

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



function findLongestWord(stringArray) {
  // Create a new array with the length of each word, using a callback function
  var arrayLong=stringArray.map(function(num) {return num.length});
  // We get the largest number of characters
  var largestNumber=Math.max(...arrayLong);
  // We find the posisition of the largest length. If there are occurrences with the same length, indexOf returns the first position of the array
  var positionLargest = arrayLong.indexOf(largestNumber);
  return stringArray[positionLargest];
}

console.log(findLongestWord(words));

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arrayToSum) {
  if (arrayToSum.length!=0) {
    var sumaValoresArray=arrayToSum.reduce(function (total, currentValue, currentIndex, arr) {return total+currentValue;}); 
    return sumaValoresArray;
  } else {
      return 0;
  }  

}

console.log(sumArray(numbers));

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
  if (numberArray.length===0) {
    return undefined;
  }  
    var sumaValuesArray = sumArray(numberArray);
    var averageValue = sumaValuesArray/numberArray.length;
    return averageValue;
 
}

console.log(averageNumbers(numbersAvg));

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

function averageWordLength(stringArray){
  // Create a new array with the length of each word, using a callback function
  var arrayLong=stringArray.map(function(num) {return num.length});
  // We have now a number array, so we can call the function averageNumbers
  var averageWordLength = averageNumbers(arrayLong);
  return averageWordLength;
}

console.log(averageWordLength(wordsArr));

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

function uniquifyArray(wordArray) {
  var k=0;
  var newArray= [];

  if (wordArray.length===0) {
    return undefined;
  }  

  for (i=0;i<wordArray.length;i++) {
    if (newArray.indexOf(wordArray[i])===-1) {
      newArray[k]=wordArray[i];
      k=k+1;
    }
  }
return newArray; 


}

console.log(uniquifyArray(wordsUnique));

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

function doesWordExist(wordArray,wordToSearch) {
  var exist= wordArray.find(function(element) {return element===wordToSearch});
  if (exist!=undefined) {
    return true;
  } else {
    return false;
  }
}

console.log(doesWordExist(wordsFind,'truth'));

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

function howManyTimes(arrayToSearchIn,wordToSearch) {
  var counter = 0;

  if (arrayToSearchIn.length===0) {
    return false;
  }  
    arrayToSearchIn.forEach(function (element) { if (element === wordToSearch) {counter++}});
    return counter;
}

console.log(howManyTimes(wordsCount,'matter'));

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

var newMatrix= [];
var newMatrix1=[];


  for (i=0;i<20;i++) {
    newMatrix.push(1);
  }
  console.log(newMatrix);
 for (j=0;j<20;j++) { 
  newMatrix1.push(newMatrix);
  console.log(newMatrix1[j].length)  
}

// Cartesian product of 4 consecutive positions of the matrix
// We program to be able to multiply any adjacent numbers specified in variable consecutiveNumbers

function greatestProduct(matrixToCalculate) {

  var consecutiveNumbers = 4;
  var greatestProductInMatrix=0;
    
  // we start calculating the cartesian product for each row in the matrix 
  var arrayTotalResult1= calculateCartesianProductMatrix(matrixToCalculate,consecutiveNumbers);
  
  // We transpond rows and cols of the matrixToCalculate
  var matrixTransponded=transpondRowsColsMatrix(matrixToCalculate);
  // We calculate the cartesian product for the transponded matrix and push de array result to the existing arrayTotalResult
  var arrayTotalResult2=calculateCartesianProductMatrix(matrixTransponded,consecutiveNumbers);
  console.log(arrayTotalResult1);

  var arrayTotalResult=arrayTotalResult1.concat(arrayTotalResult2);

  largestNumber=Math.max(...arrayTotalResult);
  
return largestNumber;

}

function calculateCartesianProductMatrix(matrixEvaluate,adjacentNumbers) {
  
  var arrayResult = []; // we store in this array the different result of cartesian product.

  
  matrixEvaluate.forEach(function(element){ 
    for (i=0;i<element.length-adjacentNumbers;i++) {
      var productItem=element.slice(i,i+adjacentNumbers).reduce(function(totalProduct,itemVectorSlice){
        return totalProduct*itemVectorSlice;
      });
      arrayResult.push(productItem);
    }

  });

  return arrayResult;
}

function transpondRowsColsMatrix(matrixToTranspond){

  // We transpond the rows and cols of the matrix. Every col is now a row, every row is a col
  var transpondedArray=[];
  for (col=0;col<matrixToTranspond.length;col++){
    var colArray=[];
    for (row=0;row<matrixToTranspond.length;row++) {
      colArray.push(matrixToTranspond[row][col]);
    }
    transpondedArray.push(colArray);
  }
  return transpondedArray;
}

console.log("the largest value is: ",greatestProduct(matrix));
