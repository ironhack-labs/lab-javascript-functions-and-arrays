// Find the maximum
function maxOfTwoNumbers (num1,num2){
if (num1>num2) return num1;
if (num2>num1) return num2y;
}

maxOfTwoNumbers (6,3);
// Finding Longest Word

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(total, num) {
    return total + num;
}
console.log(numbers.reduce(sumArray));

console.log(numbers.reduce(sumArray)/numbers.length);

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(total, num) {
    return total + num;
}

console.log(numbersAvg.reduce(averageNumbers)/numbersAvg.length);

// Array of Strings
var words = [
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

var counter = 0;

function averageWordLength (arreglo){
  arreglo.forEach(function(elem){
  counter +=elem.length;
  })
  return counter/arreglo.length;
}

averageWordLength(words);

// Unique Arrays
var words = [
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

Array.prototype.unique=function(uniquifyArray){
  return function(){return this.filter(uniquifyArray)}}(function(uniquifyArray,b,c){return c.indexOf(uniquifyArray,b+1)<0
});

console.log(words.unique());

// Finding Elements

var words = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

var palabra = prompt ("¿Qué palabra buscas?");

function doesWordExist(arreglo) {
  for (i=0; i<arreglo.length; i++){
    if (arreglo[i] === palabra) return true;
  }
  return false;
}

doesWordExist(words);

// Counting Repetion

// Bonus Quest
