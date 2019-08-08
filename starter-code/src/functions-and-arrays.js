// Find the maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}
// Finding Longest Word
// var words = [
//   'mystery',
//   'brother',
//   'aviator',
//   'crocodile',
//   'pearl',
//   'orchard',
//   'crackpot',
//   'anticonstitutionnellement',
// ];

function findLongestWord(words) {
  if (words.length == 0) {
    return undefined;
  }
  let word = "";
  for (i = 0; i < words.length; i += 1) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }
  return word;
}



// Calculating a Sum

//var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers) {
  if (numbers.length == 1) {
    return numbers[0];
  } else {
    let sum = numbers.reduce((acc, currentVal) => {
      acc += currentVal;
      return acc
    }, 0);
    return sum;
  }
}
// if (numbers == 0 ){
//   return 0;
// }

sumArray([4]);



// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(chiffres) {
  if (chiffres.length == 0) {
    return undefined;
  } else {
    let sum = chiffres.reduce((acc, currentVal) => {
      acc += currentVal;
      return acc
    }, 0);
    return sum / chiffres.length;
  }

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

function averageWordLength(paroles) {
  const pirate = [];
  if (paroles.length == 0) {
    return undefined;
  }
  for (i = 0; i < paroles.length; i += 1) {
    let mots = paroles[i].length;
    pirate.push(mots);

  }
  let sum = pirate.reduce((acc, currentVal) => {
    acc += currentVal;

    return acc;
  });
  return sum / paroles.length;
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

function uniquifyArray(unique) {
  if (unique.length == 0) {
    return undefined;
  }
  return ([...new Set(unique)]);
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

function doesWordExist(list, word) {
  if (list.length == 0) {
    return false;
  }
  for (i = 0; i < list.length; i += 1) {
    if (list[i] == word) {
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


function howManyTimes(bleh, yah) {
  if (bleh.length == 0) {
    return false;
  }
  let stump =[];
  for(i= 0 ; i < bleh.length; i+=1){
    if(yah == bleh[i]){
      stump.push(yah);
      
    }

  }
  return stump.length;
}
// Bonus Quest

var matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(golly){
  for (let y = 0 ; y<golly.length; y+=1){
    for (let x = 0 ; x<golly[x].length; x+=1){
      console.log(golly[y][x]);
      jeanmich = multiply([x],[y]);
    }
    
  }
return jeanmich;
}

function multiply(){
  
}


function multiplyRight(){
  let right = golly[x][y] * golly[x+1][y] * golly[x+2][y] * golly[x+3][y];
  return right;
  }
function multiplyLeft(){
  let left = golly[x] * golly[x-1][y] * golly[x-2][y] * golly[x-3][y];
  return left;
  }
function multiplyTop(){
  let top = golly[y] * golly[y-1][x] * golly[y-2][x] * golly[y-3][x];
  return top;
  }
function multiplyRight(){
  let bottom = golly[y] * golly[y+1][x] * golly[y+2][x] * golly[y+3][x];
  return bottom;
  }


