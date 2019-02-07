// Find the maximum
function maxOfTwoNumbers (a, b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

// Finding Longest Word

function findLongestWord(array) {
  if (array == 0) {return undefined}
  var word = '';
  for (i= 0; i < array.length; i++) {
    if (word.length < array[i].length) {
      var word = array[i];
    }
  }
  return word;
}

var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];


// Calculating a Sum

function sumArray(array) {
  var suma = 0;
  for (i = 0; i < array.length; i++) {
  suma = suma + array[i];
  }
  return suma;
}
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];



// Calculate the Average

function averageNumbers (array) {
  if (array == 0) {return undefined}
  var suma = 0;
  for (i = 0; i < array.length;i++ ) {
    suma+= array[i];
  }
  element = suma/array.length;
  return element;
  }

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];
averageNumbers (numbers)

// Array of Strings
function averageWordLength(array) {
  if (array == 0) {return undefined}
  var suma = 0;
  for (i = 0; i < array.length; i++) {
    suma += array[i].length;
    average = suma/array.length;

  }
  return average;
  }
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

function uniquifyArray (array) {
  if (array == 0) {return undefined}
  uniqueArray = array.filter(function(item, pos) {
  return array.indexOf(item) == pos;
});
  return uniqueArray;
}


// Finding Elements
function doesWordExist(array, query) {
  return array.includes(query);
}
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
doesWordExist (words, 'subset');

// Counting Repetion

function howManyTimes(array, query) {
  if (array == 0) {return false}
  contador = 0;
  posicion = array.indexOf(query);
  while ( posicion != -1 ) {
     contador++;
     posicion = array.indexOf(query, posicion+1);
  }
  return contador;
  }
  var words = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'machine',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  howManyTimes (words, 'matter')
  
// Bonus Quest
