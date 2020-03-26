// Iteration #1: Find the maximum

function maxOfTwoNumbers(num1, num2){
  if(num1 > num2){
    return num1
  } else {
    return num2
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array){
  let longestWord = "";
  array.forEach(function(arg){
    if(arg.length > longestWord.length){
      longestWord = arg;
    }
  })
  if(array.length === 0){
    longestWord = null;
  }
  return longestWord;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array){
  let sum = 0;
  array.forEach(function(element){
    sum += element;
  })
  return sum;
}

// Bonus

function makeNum(item){
  switch(typeof(item)) {
    case "number":
      return item;
    case "boolean":
      if(item == true){
        return 1;
      } else {
        return 0;
      }
    case "string":
      return item.length;
    default:
      throw Error("Unsupported data type sir or ma'am");
  }
}

function sum(array){
  let sum = 0;
  array.forEach(function(element){
    sum += makeNum(element);
  })
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array){
  if(array.length === 0){
    return null;
  }
  let sum = sumNumbers(array);
  let num = array.length;
  let avg = sum / num;
  return avg;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// Declare a function named `averageWordLength` that receives as a single argument an array of words and returns the average length of the words:

function averageWordLength(array){
  if(array.length === 0){
    return null;
  }
  let add = sum(array);
  let num = array.length;
  let avr = add / num;
  return avr;
}

// Create function `avg(arr)` that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans. We are following a similar logic to the one applied on the bonus iteration 4.1. :wink:

function avg(array){
  if(array.length === 0){
    return null;
  }
  let add = sum(array);
  let num = array.length;
  let avr = add / num;

// THIS IS RIDICULOUS 👇

  return Math.round(avr * 100)/100;
}


// Iteration #5: Unique arrays
const wordsUnique = [
  // 'Ironhack', 'Ironhack', 'Ironhack'
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

function uniquifyArray(array){
  const newArray = []
  if(array.length === 0){
    return null;
  }
  array.forEach(function(element,index){
    if(newArray.indexOf(element) === -1){
      newArray.push(element);
    }
  })
  return newArray;
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


// Let's create a simple array search.

// Declare a function named `doesWordExist` that will take in an array of words as one argument, and a word to search for as the other. Return `true` if it exists, otherwise, return `false`. **Don't** use `indexOf` for this one.

function doesWordExist(array,word){
  if(array.length === 0){
    return null;
  }
  return array.includes(word)
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

function howManyTimes(array,word){
  if(array.length === 0){
    return 0;
  }
  let counter = 0;
  array.forEach(function(element){
    if(element === word){
      counter++
    }
  })
  return counter;
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

// This is actually not correct, because it ignores the three right-most and bottom-most rows/columns 👇

// function greatestProduct(mat){
//   let bigNum = 0;
//   for(i = 0; i < mat.length - 3; i++){
//     for(j = 0; j < mat.length - 3; j++){
//       let horz = mat[i][j] * mat[i][j + 1] * mat[i][j + 2] * mat[i][j + 3];
//       let vert = mat[i][j] * mat[i + 1][j] * mat[i + 2][j] * mat[i + 3][j];
//       if(horz > bigNum){
//         bigNum = horz;
//       }
//       if(vert > bigNum){
//         bigNum = vert;
//       }
//     }
//   }
//   return bigNum;
// }

function greatestProduct(mat){
  let bigNum = 0;
  for(i = 0; i < mat.length; i++){
    for(j = 0; j < mat.length - 3; j++){
      let horz = mat[i][j] * mat[i][j + 1] * mat[i][j + 2] * mat[i][j + 3];
      if(horz > bigNum){
        bigNum = horz;
      }
    }
  }
  for(i = 0; i < mat.length - 3; i++){
    for(j = 0; j < mat.length; j++){
      let vert = mat[i][j] * mat[i + 1][j] * mat[i + 2][j] * mat[i + 3][j];
      if(vert > bigNum){
        bigNum = vert;
      }
    }
  }
  return bigNum;
}

// Iteration 8.1: Bonus

function greatestProductOfDiagonals(mat){
  let bigNum = 0;
  for(i = 0; i < mat.length - 3; i++){
    for(j = 0; j < mat.length - 3; j++){
      let downRight = mat[i][j] * mat[i + 1][j + 1] * mat[i + 2][j + 2] * mat[i + 3][j + 3];
      if(downRight > bigNum){
        // console.log("Down, right: " + i + ", " + j + ": " + downRight);
        bigNum = downRight;
      }
    }
  }
  for(i = 0; i < mat.length - 3; i++){
    for(j = 3; j < mat.length; j++){
      let downLeft = mat[i][j] * mat[i + 1][j - 1] * mat[i + 2][j - 2] * mat[i + 3][j - 3];
      if(downLeft > bigNum){
        // console.log("Down, left: " + i + ", " + j + ": " + downLeft);
        bigNum = downLeft;
      }
    }
  }
  return bigNum;
}

greatestProductOfDiagonals(matrix);