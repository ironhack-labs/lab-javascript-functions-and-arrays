// Iteration #1: Find the maximum
  function maxOfTwoNumbers(a,b){
    if(a>b) return a;
    else return b;
  }
  maxOfTwoNumbers(47,73)
  // console.log(maxOfTwoNumbers(47,73));

// //================================================================================// //
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array){
  if(array === undefined || array.length === 0){
    return null;
  }
  let longestWord = array[0];
  for(let i=0;i<array.length;i++){
    if(array[i].length>longestWord.length){
      longestWord = array[i];
      
    }
  }
  // console.log(`Longest word of an array: ${longestWord}`);
  return longestWord;
}
findLongestWord(words);

// //================================================================================// //

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
  if(array === undefined || array.length === 0){
    return 0;
  }
let sum=0;
for(let i=0;i<array.length;i++){
  sum = sum + array[i];
}
// console.log(`sum of numbers is: ${sum}`);

return sum;
}
sumArray(numbers);

// //================================================================================// //

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(array){
  if(array === undefined || array.length === 0){
    return null;
  }
let sum=0;
let sumAvr;
for(let i=0;i<array.length;i++){
  sum = sum + array[i];
  sumAvr = sum/array.length;
}
// console.log(`avg number is: ${sumAvr}`); 

return sumAvr;
}
averageNumbers(numbersAvg);

// Level 2: Array of strings
const wordsArr = [
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

function averageWordLength(array){
  if(array === undefined || array.length === 0){
    return null;
  }
let avgLen;
let sumEachLen = 0;

array.forEach(el => {
  let len = array.length;
  
  sumEachLen += el.length;
  avgLen = Math.round(sumEachLen/len);

});
// console.log(sumEachLen);// to check.
// console.log(`avg words lenght :${avgLen}`);
return avgLen;
}
averageWordLength(wordsArr);


// //================================================================================// //

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

function uniquifyArray(array){
  let uniquified = [];
  let remEl = [];
  for(let i=0;i<array.length;i++){
    let checkItem = array[i];
    let searchItem = array.indexOf(checkItem,i+1);
    if(checkItem === array[searchItem]){
         remEl.push(array[searchItem]);
    } else  uniquified.push(checkItem);

  }
  // console.log(`These are duplicates: ${remEl}`); // duplicates array
  // console.log(`Uniq items array is: ${newArr}`);    //it should return uniq items array.
  return uniquified;
}
uniquifyArray(wordsUnique);
// console.log(wordsUnique);// to check if global wordsUniq arrays was mutated or not, and it's not! Good:)


// //================================================================================// //

// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(array, searchingItem){
  let item = array.includes(searchingItem);
  // console.log(item);
  return item;
}
doesWordExist(wordsFind, 'truth'); //returns: true
doesWordExist(wordsFind, 'hello'); //returns: false

// //================================================================================// //

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

function howManyTimes(arr, name){
  let count = 0;
  // for(let i=0;i<arr.length;i++){
  //   if(arr[i]===name){
  //     count+=1;
  //   }
  // }
    arr.map(e =>{
      if (e === name){
        count++;
      }
    });
  // console.log(`The word '${name}' in the array comes: ${count} times`);
  return count;
}

howManyTimes(wordsCount, 'matter'); 
// console.log(howManyTimes(wordsCount, 'matter')); //4

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

// //if we turn all array elements into 2, it will give 16.
// // Uncomment for-loop to turn all array elements with number 2(or any other number).
function switchArr(arr, toNumber){
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    arr[i][j]=toNumber;
  }
}
return arr;
}
// switchArr(matrix, 2); //switches whole arr el. with 2.


function get(arr, y, x) {

  if (0 <= y && y < arr.length && 0 <= x && x < arr[y].length) {
    return arr[y][x];
  }
  return 0;
}

function greatestProduct(arr, k) {

  let max = 0;
  let len = arr.length;
  for (let y = 0; y < len; y++) {
    for (let x = 0; x < len; x++) {

      let p1 = 1, p2 = 1, p3 = 1, p4 = 1;

      for (let i = 0; i < k; i++) {
        p1*= get(arr, y, x + i);
        p2*= get(arr, y + i, x);
        p3*= get(arr, y + i, x + i);
        p4*= get(arr, y + i, x - i);
      }
      max = Math.max(p1, p2, p3, p4, max);
    }
  }
  return max;
}
greatestProduct(matrix, 4);