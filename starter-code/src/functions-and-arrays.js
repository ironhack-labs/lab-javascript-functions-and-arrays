// Find the maximum
function maxOfTwoNumbers(num1, num2){
  if (num1>num2) {
    return num1;
  }
  return num2;
}

console.log(maxOfTwoNumbers(10,7));

console.log(Math.max(4, 3));


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

function findLongestWord(array){
  for (var longestWord = '', i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }    
  }
  return longestWord;
}
console.log(findLongestWord(words));






// Calculating a Sum without method
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sum(array){
  for (var suma= 0, i = 0; i < array.length; i++) {
    suma+= array[i];   
  }
  return suma;
}
console.log(sum(numbers));


//// Calculating a Sum with reduce
var suma = numbers.reduce(function(acc, curr, i, arr){  
  return acc + curr;
}, 0);
console.log(suma);


//Calculating sum with reduce 2
function sum(array1){
  return numbers.reduce((acc, curr, i, arr) => acc + curr);
}
console.log(sum(numbers));






// // Calculate the Average
var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array){
  for (var suma= 0, i = 0; i < array.length; i++) {
    suma+= array[i]; 
  }
  return suma / array.length;
}

console.log(averageNumbers(numbers));




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

function averageWordLength(array){
  for (var suma= 0, i = 0; i < array.length; i++) {
    suma+= array[i].length; 
  }
  return suma / array.length;
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


function uniquifyArray(words) {
  var uniquifiedArray = [];

  for(var i = 0; i < words.length; i++){
    if(uniquifiedArray.indexOf(words[i]) === -1){
      uniquifiedArray.push(words[i]);      
    }
  }
  return uniquifiedArray;
}
console.log(uniquifyArray(wordsUnique));

// // Finding Elements 
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

// Finding elements WITHOUT METHOD 
function doesWordExist(wordsFind, wordToSearch){  
  for (var i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] !== wordToSearch) {      
      return true;
    }
    return false;
  }
}
console.log(doesWordExist(wordsFind, 'disobedience'));


// Finding elements WITH INCLUDES 
function doesWordExist1(wordsFind, word){
  for (let i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i].includes(word)) {
      return true;
    } 
  }
}

console.log(doesWordExist1(wordsFind, 'disobedience'));

//// Finding elements WITH INDEXOF 
function doesWordExist2(wordsFind, word){
  for (let i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i].indexOf(word) !== -1) {      
      return true;
    }
  }
  return false;
}
console.log(doesWordExist2(wordsFind, 'disobedience'));


//// Finding elements INDEXOF WITH NO LOOP
function doesWordExist3(words, word){
  if (wordsFind.indexOf(word) !== -1) {
    return true;
  }
  return false;
}

console.log(doesWordExist3(wordsFind, 'truth'));


// Finding elements INCLUDES
function doesWordExist3(words, word){
  return words.includes(word);
}
console.log(doesWordExist3(wordsFind, 'disobedience'));


// Finding elements FIND
function doesWordExist4(words, word){
  var found = wordsFind.find(function(element) {
    return element === word;
  });
  if (found) { return true; } 
  return false;
  
}
console.log(doesWordExist4(wordsFind, 'truth'));

// Counting Repetion 
var wordsCount = [
  'machine',
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

function howManyTimes(array, word){
  var count = 0;
  for (let i = 0; i < array.length; i++) {    
    if (word === array[i]) {
      count++;      
    } 
  }
  return count;
}
console.log(howManyTimes(wordsCount, 'matter'));
