// Find the maximum

function maxOfTwoNumbers(nb1,nb2){
  return nb1 > nb2 ? nb1 : nb2;
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

function findLongestWord(arr){
  let longest = "";
  if (typeof arr == 'undefined' || arr.length == 0 || arr[0] ==""){
    return undefined;
  }

  for (let i = 0; i < arr.length ; i++){
    if (arr.length==0 || typeof(arr)==undefined){
      return undefined;
    }
    else if (arr[i].length > longest.length){
      longest = arr[i];
  }
}
return longest;
}



// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arr){
  let s = 0;
  for (let i = 0; i < arr.length ; i++){
    s += arr[i];
  }
  return s;
}

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr){
  if (typeof arr == 'undefined' || arr.length == 0 || arr[0] ==""){
    return undefined;
  }
  let s = 0;
  for (let i = 0; i < arr.length ; i++){
    s += arr[i];
  }
  return s/(arr.length);
}


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

function averageWordLength(arr){
  if (typeof arr == 'undefined' || arr.length == 0 ){
    return undefined;
  }

  let s = 0;

  
  for (let i = 0; i < arr.length ; i++){
    s += arr[i].length;
  }

  return s/arr.length;

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

function uniquifyArray(arr){
  
  let same = false;
  let c_same = 0;
  if (typeof arr == 'undefined' || arr.length == 0 ){
    return undefined;
  }
  for (let j = 0; j < arr.length ; j++){
    if (arr[0]==arr[j+1]){
      arr.pop();
    }
  }

  for (let w = 0; w < arr.length ; w ++){
  
  }

  for (let i = 0; i < arr.length ; i ++){
      let check = arr.indexOf(arr[i],i+1);
      if (check != -1){
        arr.splice(check,1);
      }
    }
    return arr;
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


function doesWordExist(arr,query){
  for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] == query){
      return true;
    }
  }
  return false;
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

howManyTimes = (arr,query) => {
  
  let c = 0;
  if (typeof arr == 'undefined' || arr.length == 0){
    return false;
  }

  for (let i = 0; i < arr.length; i++){
    if (arr[i] == query){
      c ++;
    }
  }
  return c;
}

// function howManyTimes(arr,query){
//   let c = 0;
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] == query){
//       c ++;
//     }
//   }
//   return c;
// }




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


function greatestProduct(arr){
  let n = 0;
  let max = 0;
  
  for (let y = 0; y < arr.length ; y ++){
    for (let x = 0; x < arr[y].length ; x ++){
      // cannot multiple towards up
      console.log(arr[y][x]);
      n = check(arr, y, x);
      if (n > max) {
        max = n;
      }
    }
}
return max;
}

function check(arr, y, x){
  let top, down, right, left;

  if (arr[y] > 3){
  top =  multipleTop(arr,y,x)
  }

  else {
  top = 1;
  }

  if (arr[y] < arr.length-4){
  down = multipleDown(arr,y,x);
  }

  else {
  down = 1;
  }

  if (arr[y][x] > 3){
  left = multipleLeft(arr,y,x);
  }
  else {
  left = 1;
  }

  if (arr[y][x] < arr.length-4){
  right = multipleRight(arr,y,x);
  }
  else {
  right = 1;
  }
  return top*down*left*right;
}

// prend y
function multipleTop(arr,y,x){
  return arr[y][x]*arr[y-1][x]*arr[y-2][x]*arr[y-3][x];
}

function multipleRight(arr,y,x){
  return arr[y][x]*arr[y][x+1]*arr[y][x+2]*arr[y][x+3];
}

function multipleDown(arr,y,x){
  return arr[y][x]*arr[y+1][x]*arr[y+2][x]*arr[y+3][x];
}

function multipleLeft(arr,y,x){
  return arr[y][x]*arr[y][x-1]*arr[y][x-2]* arr[y][x-3];
}

console.log(greatestProduct(matrix));