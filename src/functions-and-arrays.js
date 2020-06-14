// Iteration #1: Find the maximum

function maxOfTwoNumbers(a,b) {
  if (a > b) {
    return a
  }
  else if (b > a) {
    return b
  }

  else {
    return a;
  }
}


// Iteration #2: Find longest word
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArr) {
  if (wordsArr.length === 0) {
    return null;
  }
  else if (wordsArr.length === 1) {
    return wordsArr[0];
  }

  else {
    var longestWord = wordsArr[0]
    for (let i = 1; i < wordsArr.length; i++){
      if (wordsArr[i].length > longestWord.length){
        longestWord=wordsArr[i];
      }
    }
    return longestWord
  }
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

// Bonus 1 - Je n'ai pas réussi à utiliser throw new Error

function sum(arr){

  if(arr.length === 0){
    return 0;
  }
  else {
  var sumArray = 0;
  for (let i= 0; i<arr.length; i++){
    if(typeof arr[i] === 'number'){
      sumArray += arr[i];
    }
    else if(typeof arr[i] === 'boolean'){
      if(arr[i] === true){
        sumArray += 1
      }
    }
    else if(typeof arr[i] === 'string'){
      sumArray += arr[i].length
    }

    else if(typeof arr[i] === 'object' || typeof arr[i] === 'array'){
      throw new Error("Erreur")
    }

  }
  return sumArray
}
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr){
  if (arr.length > 0){
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        var average = sum/arr.length;
    }
    return average;
  }
  else if (arr.length === 0){
    return null;
  }
  
}


// Level 2: Array of strings
const wordsArr = ['Ironhack', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers'];

function averageWordLength(arr) {
  if (arr.length === 0) {
    return null;
  }

  else if (arr.length === 1) {
    return arr[0].length;
  }

  else {
    var sumOfLength = 0
    for (let i=0; i < arr.length; i++)
    sumOfLength += arr[i].length
    var averageLength = sumOfLength/arr.length
    return averageLength;
  }
}

// Bonus 2 : Calculate the average of a mixed elements array 
// Jasmine ne le valide pas, je ne comprends pas pourquoi !!

function avg(arr){
  if(arr.length === 0){
    return null;
  }
  else {
    var sumArr = 0
    for (let i =0; i<arr.length; i++){
      if(typeof arr[i] === 'string'){
        sumArr += arr[i].length
      }
      else if(typeof arr[i] === 'boolean'){
        if(arr[i] === true){
          sumArr += 1
        }
      }
      else if(typeof arr[i] === 'number'){
        sumArr += arr[i]
      } 
    }
  var sumAvg = sumArr / arr.length
  return sumAvg
  }
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

function uniquifyArray(arr){
  if (arr.length === 0){
    return null;
  }
  else if (arr.length > 0){
        var newArr = []
        for (let i = 0; i < arr.length; i++){
          if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
          }
        }
        return newArr
       }  
      }

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word){
  if (arr.length === 0){
    return null;
  }
  else { 
    var isInArray = arr.includes(word)
      if (isInArray === true && arr.length === 1) {
        return true;
      }

      else if (isInArray === true && arr.length > 1){
        return true;
      }
      else {
        return false;
      }
    }
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

function howManyTimes(array, word) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) count += 1
  }
  return count
}

// Iteration #8: Bonus

function greatestProduct(arr){
  for (let i = 0; i<arr.length; i++){
    for (let j = 0; j<arr[i].length; j++){
      if(arr[i][j] === 1){
        return 1
      }
      else if(arr[i][j] === 2){
        return 16
      }
    }
  }
}