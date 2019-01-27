// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1>num2){
    return num1;
    }else {
      return num2;
    }
  }

  console.log(maxOfTwoNumbers(2,4));
// Finding Longest Word
//---------------------------------------------


function findLongestWord(wordsArray){

  var arrLength=[];
  for (var i=0; i<wordsArray.length; i++){
      arrLength.push(wordsArray[i].length);
  }

  var maxNum=Math.max(...arrLength);
  var longestWordIndex=arrLength.indexOf(maxNum);

  return wordsArray[longestWordIndex];

}
// var words = [
//   'mystery',
//   'brother',
//   'aviator',
//   'crocodile',
//   'pearl',
//   'orchard',
//   'crackpot'
// ];
console.log("Largest word index is  "+findLongestWord([
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
]));

//----------------------------


// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumArray(numbers){

  if (numbers.length==0){   //It will return 0 i case that array is empty. (test specification)!
    return 0;
  } 

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  

  return (numbers.reduce(reducer));
}


console.log("Sum of numbers in array is: " +sumArray(numbers));

//----------------------------------------------------


// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
//var numbersAvg = [];   We can also test it for empty area, and then it shoud return undefined. (based on test specification.)
function averageNumbers(numbers){
  var sumAvg;

  if (numbers.length==0){

    sumAvg=undefined;
    
  } else{

    sumAvg=sumArray(numbers)/numbers.length;
  }

  

  return sumAvg;
}

console.log(averageNumbers(numbersAvg));

//-------------------------------------

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

function averageWordLength (wordArray){

  if (wordArray.length==0){

    return undefined;
    
  }

  const map1 = wordArray.map(item => item.length);
  return averageNumbers(map1);
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

function uniquifyArray(wordsArr){

  if (wordsArr.length==0){
    return undefined;
  }
  var test=[];
  
  for (var i=0; i<wordsArr.length; i++){
       

    if (test.every(item=> item!=wordsArr[i])){
      test.push(wordsArr[i]);
     
    }
     
      
      
  }

  return test;

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

function doesWordExist (wordsUnique, word){

  var answer= wordsUnique.some(item=>item==word);
  return answer;
}

console.log(doesWordExist(wordsFind, "subset"));

//--------------------------
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


function howManyTimes(wordsArr, word) {

  if (wordsArr.length==0){
    return false;
  }
  
  var counter=0;
  var i=0;
  while (i<wordsArr.length){
    if (wordsArr[i]==word){
      counter++;
    }
    i++;
  }
return counter;
}

console.log(howManyTimes(wordsCount, "matter"));


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


function greatestProduct(matrixArg){
  prod=[];
  number=4; //it takes 4 adjacent numbers

  // right - horizontal (left will give the same result)
  for (var i=0; i<matrixArg.length; i++){   // first take a row (row=array of elements) and with var j iterate through it.
    for (var j=0; j<=matrixArg[i].length-number; j++){ 
      prod.push(matrixArg[i][j]*matrixArg[i][j+1]*matrixArg[i][j+2]*matrixArg[i][j+3]);//j can not be > (matrixArg[i].length-number). If it is we will be out of a grid when it comes to this formula for multiplication of 4 adjacent numbers 
    }
  }


  

  //for down - vertical (up will give the sam result)
  for (var j=0; j<matrixArg.length; j++){
    for (var i=0; i<=matrixArg[i].length-number; i++){
      prod.push(matrixArg[i][j]*matrixArg[i+1][j]*matrixArg[i+2][j]*matrixArg[i+3][j]);
    }
  }

//---------------------i was not sure if diagonal has also to be included as one of directions.-----//
  //for diagonal left to right 

//   var z=0;
//   while (z<=matrixArg.length-number){
//   for (var i=z; i<=matrixArg.length-number; i++){
//     for (var j=0; (j<i+3 && j<=16); j++){
//       prod.push(matrixArg[i][j]*matrixArg[i+1][j+1]*matrixArg[i+2][j+2]*matrixArg[i+3][j+3]);
//     }
//   }
//   z++;
// }

//for diagonal right to left
// var t=19;
// while (t>=0){
//   for (var i=t; i>=3; i--){
//     for (var j=16; j>=0; j--){
//       prod.push(matrixArg[i][j]*matrixArg[i-1][j+1]*matrixArg[i-2][j+2]*matrixArg[i-3][j+3]);
//     }
//   }
//   t--;
// }

return Math.max(...prod);

  //return prod;

  
}

console.log(greatestProduct(matrix));