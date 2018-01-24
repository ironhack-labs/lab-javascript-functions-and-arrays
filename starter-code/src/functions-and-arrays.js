// Find the maximum
function maxOfTwoNumbers(num1,num2){
  if (num1>num2){
    return num1;
  } else if (num2>num1){
    return num2;
  } else {
    return num1;
    //console.log ("first and second parameteres are equal");
    
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

function findLongestWord (words){
  if (words.length>1){
    var array = []
    for (var i=0; i< words.length-1; i++ ){
      array.push(words[i].length);
    }
   
    array = array.sort();
    array = array.reverse();
    
    for (var i=0; i< words.length-1; i++ ){
      if(words[i].length === array[0]) {
        return words[i];
      }
    }
  } else if (words.length===1){
    return words[0];
  } else {
    return undefined;
  }

}

console.log(findLongestWord(words));

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers){
  var sum = 0;
  if (numbers.length===0){
    return sum;
  }else if(numbers.length===1){
    return sum=numbers[0];
  } else {
    for (i=0;i<numbers.length;i++){
      sum += numbers[i];
    }
    return sum;
  }
}

console.log(sumArray(numbers));
// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  var sum=0;
  if (numbersAvg.length === 0 ) {
    return undefined;
  } else if(numbersAvg.length===1){
    return sum=numbersAvg[0];
  } else {
    for (i=0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
    }
   return sum/numbersAvg.length;
  }
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

function averageWordLength(wordsArr) {
  var sum=0;
  if (wordsArr.length === 0 ) {
    return undefined;
  } else if(wordsArr.length===1){
    return sum=wordsArr[0].length;
  } else {
    for (i=0; i < wordsArr.length; i++) {
    sum += wordsArr[i].length;
    }
   return sum/wordsArr.length;
  }
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

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length === 0 ) {
    return undefined;
  } else if(wordsUnique.length===1){
    return sum=wordsUnique[0];
  } else {
    var uniquify= wordsUnique;
    for (i=0; i < wordsUnique.length; i++) {
        for (j=1+i; j < wordsUnique.length; j++){
         if (wordsUnique[i]===wordsUnique[j]){
          uniquify.splice(j,1);
         }
        }
    }
   return uniquify;
  }
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
var word= prompt("Write a word to search");
function doesWordExist(wordsFind, word){
  var exist= false;
  for (i=0; i < wordsFind.length; i++) {
       if (wordsFind[i]===word){
         exist = true;
         return exist;
       }
  }
  return exist;
}

console.log(doesWordExist(wordsFind,word));



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

var word= prompt("Write a word to check repetition");
function howManyTimes(wordsCount, word){
  var count= 0;
  for (i=0; i < wordsCount.length; i++) {
       if (wordsCount[i]===word){
         count +=1;
       }
  }
  return count;
}

console.log(howManyTimes(wordsCount,word));



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


function greatestProduct(matrix){
  var product=0;
  var max=0;
  for (x=0; x < matrix.length; x++){
    for (y=0; y < matrix.length; y++){
      if (x>0 && y>0 && y<matrix.length-1 && x<matrix.length-1){
      product= matrix[x+1][y]*matrix[x-1][y]*matrix[x][y+1]*matrix[x+1][y-1];
        if (product> max){
           max= product;
        }
     }else if (x===0 && y<matrix.length-1 && y>0){
        product= matrix[x+1][y]*matrix[x][y+1]*matrix[x+1][y-1];
        if (product> max){
           max= product;
        }
       }else if (x<matrix.length-1 && y<matrix.length-1 && y===0){
        product= matrix[x+1][y]*matrix[x][y+1]*matrix[x-1][y];
           if (product> max){
           max= product;
           }
       }else if (x>0 && y>0 && y===matrix.length-1 && x<matrix.length-1){
           product= matrix[x+1][y]*matrix[x-1][y]*matrix[x+1][y-1];
           if (product> max){
           max= product;
           } 
       }else  if (x>0 && y>0 && y<matrix.length-1 && x===matrix.length-1){
      product= matrix[x+1][y]*matrix[x-1][y]*matrix[x][y+1];
        if (product> max){
           max= product;
        }
      console.log ("fuera de rango");
    }
    }
  }
return max;
}

console.log(greatestProduct(matrix));