// Find the maximum

function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

// Finding Longest Word
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "crocodila",
  "pearl",
  "orchard",
  "crackpot"
];
function findLongestWord(words) {
  var max = "";
  if (words.length != 0) {
    words.forEach(function(word) {
      if (word.length > max.length) {
        max = word;
      }
    });
    return max;
  }
}
findLongestWord(words);
findLongestWord([]);

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers) {
  var i;
  var sum = 0;
  for (i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
  }

  return sum;
}

sumArray(numbers);

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers) {
  var avg = 0;
  if (numbers != 0) {
    for (var i = 0; i < numbers.length; i++) {
      avg += numbers[i] / numbers.length;
    }
    return Math.ceil(avg);
  }
}
averageNumbers(numbersAvg);
averageNumbers([]);
// Array of Strings
var wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];
function averageWordLength(words) {
  var wordsLen = 0;
  if (words != 0) {
    words.forEach(function(word) {
      wordsLen += word.length;
    });
    return wordsLen / words.length;
  }
}

averageWordLength(wordsArr);
averageWordLength([]);

// Unique Arrays
var wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

function uniquifyArray(wordsUnique) {
  var newArray = [];
  if (wordsUnique.length != 0) {
    wordsUnique.forEach(function(wordUnique) {
      if (newArray.indexOf(wordUnique) === -1) {
        newArray.push(wordUnique);
      }
    });

    return newArray;
  }
}

uniquifyArray(wordsUnique);

// Finding Elements
var wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

doesWordExist = (words, word) => words.includes(word);
doesWordExist(wordsFind, "matter");

// Counting Repetion
var wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

howManyTimes = (words, word) => {
  let cont = 0;
  if (words != 0) {
    words.forEach(x => {
      if (x == word) {
        cont += 1;
      }
    });
    return cont;
  }
  return false;
};
howManyTimes(wordsCount, "matter");
howManyTimes([], "matter");

// Bonus Quest

var matrix = [
  [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48]
];

greatestProduct = (matrix) => {
  let greatestProduct = 0;
  for(let i = 0; i<matrix.length; i++){
    if(i === 0 || i === matrix.length-1){
      let row = matrix[i];
      for(let j = 0; j < row.length-1; j++){
        const product =row[0]*row[row.length-2]
        console.log(product);
        if(greatestProduct < product){
          greatestProduct = product;
        }else{
          console.log(`O maior produto é ${row[0]}*${row[row.length-1]}`);
        }
      }
    }
    
  }
}
greatestProduct(matrix);


