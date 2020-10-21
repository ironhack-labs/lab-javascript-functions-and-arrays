//jshint esversion: 6
// Iteration #1: Find the maximum

function maxOfTwoNumbers(num1, num2){
  let largestNumber = num1;
  if(largestNumber > num2){
    largestNumber = largestNumber;
  }else{
    largestNumber = num2;
  }
  return largestNumber; 
}
console.log(maxOfTwoNumbers(2, 3));

// Iteration #2: Find longest word

// Declare a function named findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  if(!arr.length) return null; 
  let longestWord = arr[0];
  for(let value of arr){
    if(value.length > longestWord.length){
      longestWord = value;
    }
  }
  return longestWord;

}
console.log(findLongestWord(words));




// // Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums){
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
}
console.log(sumNumbers(numbers));



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arr){
  if(arr.length === 0){
    return null;
  }else {
  let sum = sumNumbers(arr) / arr.length; 
  return sum;
  }
}
console.log(averageNumbers(numbersAvg));

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr){
  if(!arr.length) return null; 
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i].length;
  };
  return sum / arr.length;

}

// // Iteration #5: Unique arrays

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

function uniquifyArray(arr){
  if(!arr) return null;
  let newArr = [];
  for(i=0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
}
  
return newArr;
  
};
console.log(uniquifyArray(wordsUnique));

// function uniquifyArray(arr) {
//   let newArr = [];
//   if(array.length === 0) {
//     return null;
//   }else {
//     for(i=0; i < arr.length; i++){
//       if(newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i]);
//       }
//   }
// }
  
// return newArr;
  
// }
// console.log(uniquifyArray(wordsUnique));

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word){
    if(arr.includes(word)){
      return true;
    }else { 
      return false; 
    }
  }
console.log(doesWordExist(wordsFind, 'machine'));

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

function howManyTimes(arr, word){
  let counter = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === word){
      counter++;
    }
  }
  return counter; 
}
console.log(howManyTimes(wordsCount, 'matter'));
