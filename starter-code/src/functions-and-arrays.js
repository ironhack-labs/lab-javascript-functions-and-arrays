//1. Find the maximum of 2 numbers
function maxOfTwoNumbers(n1, n2) {
    if (n1 >= n2) {
        return n1;
    }
    return n2;
}

maxOfTwoNumbers(2, 2);

//2. Finding Longest Word
var words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
];

function findLongestWord(arr) {
    if (arr.length === 0) {
        return;
    }
    var longest = "";
    arr.forEach(function(word) {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
}

findLongestWord(words);

//3. Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
}

sumArray(numbers);

//4. Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
}

function averageNumbers(arr) {
    if (arr.length === 0) {
        return;
    }
    return sumArray(arr) / arr.length;
}

averageNumbers(numbersAvg);

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

//Average word length
function averageWordLength(arr) {
    if (arr.length === 0) {
        return;
    }
    var sum = 0
    arr.forEach(function(word) {
        sum += word.length;
    });
    return sum / arr.length;
}

averageWordLength(wordsArr);

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


function uniquifyArray(arr) {
    //si no hay elementos en array devuelve undefined
    if (arr.length === 0) {
        return;
    }
    //crea un nuevo array vacío para ir agregando palabras
    var newArray = [];
    //recorre cada elemento del array
    arr.forEach(function(word) {
        //si no encuentra la palabra en el nuevo array index = -1, la agrega
        if (newArray.indexOf(word) < 0) {
            newArray.push(word);
        }
    });
    return newArray;
}

uniquifyArray(wordsUnique);

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

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        if (word === arr[i]) {
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


function howManyTimes(arr, word) {
    var repetition = 0;
    if (arr.length === 0) {
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        if (word === arr[i]) {
            repetition++;
        }
    }
    return repetition;
}