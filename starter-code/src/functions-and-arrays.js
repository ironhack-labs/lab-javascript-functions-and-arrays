// Find the maximum
function maxOfTwoNumbers(number1, number2) {
  return Math.max(number1, number2);
}
// Finding Longest Word
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(words) {
  if (words.length == 0) {
    return undefined;
  }
  var longestWord = "";
  for (i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }
  return longestWord;
}

// Calculating a Sum
// sumArray

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers) {
  //returns zero with an empty array
  if (numbers.length === 0) {
    return 0;
  }
  //returns the sum with one number array
  //returns the sum
  else if (numbers.length > 0) {
    const result = numbers.reduce((a, c) => {
      return (a + c);
    });
    //returns zero if all elements are zero
    if (result === 0) {
      return 0;
    }
    console.log(result);
    return result;
    //return beendet die funktion, auch console.log 
    //immer des else ifs kann ich nochn if ="scope"
  }
  console.log(sumArray(numbers));
}


// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));


// 1 + 2 + 3 + 4
console.log(number.reduce(reducer));

// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbersAvg) {
  const avg = sumArray(numbersAvg) / (numbersAvg.length);
  console.log(avg);
  return avg;
};


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
//...that receives an array of words and calculate the average length of the words
function averageWordLength(wordsArr){
  const wordsResult = wordsArr.reduce((a, c) => {
      return (a + c);
    });
  const wordsAvg = wordsResult(wordsArr) / (wordsArr.length);
  console.log(wordsAvg);
  return wordsAvg;
};
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


//Take the following array, remove the duplicates, and return a new array.
function uniquifyArray(words) {
  //for each element I want to see what the index is and if the element
  //already exists
  //how do I say the .indexOf that it should look for every character in every single array element?
    words.forEach(function(){
      if (words.indexOf() >= 0) {    
      }
        if (words.indexOf() === -1) {
          result.push("test");
        }
    });
  
    return words;
  }
uniquifyArray();

// Finding Elements
// we need a function that goes over every single element .forEach and Return true if it exists, otherwise, return false
//as we have words > typeOf
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

var value = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

function doesWordExist (wordsFind) {
wordsFind.includes(value);
console.log(doesWordExist);
};

doesWordExist ();


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
//reduce to count, sort the elements if they are defined and already exist, e.g. matter:4

function howManyTimes (wordsCount) {
  const countRepetion = wordsCount.reduce ((a, c) => {
//only count if word = true, not if element does not exist
    if (typeof a[c] == 'undefined'){
    a[c] = 0;
    }
    else {
    a [c] += 1;
    }
    return a;
}, {});
howManyTimes ();


// Bonus Quest

var matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    4,
    56,
    62,
    0
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    3,
    49,
    13,
    36,
    65
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80
  ],
  [
    24,
    47,
    32,
    60,
    99,
    3,
    45,
    2,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70
  ],
  [
    67,
    26,
    20,
    68,
    2,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    8,
    40,
    91,
    66,
    49,
    94,
    21
  ],
  [
    24,
    55,
    58,
    5,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16,
    39,
    5,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    0,
    17,
    54,
    24,
    36,
    29,
    85,
    57
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19,
    80,
    81,
    68,
    5,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    4,
    89,
    55,
    40
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    3,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69
  ],
  [
    4,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    8,
    46,
    29,
    32,
    40,
    62,
    76,
    36
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    4,
    36,
    16
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    1,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    5,
    54
  ],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
/*In the 20×20 grid below; What is the greatest product of four adjacent numbers in the same direction (up, down, left, right)? */
//move up down left right but only in one direction
//first declare a grit of 20x20 ??????
var grid = function () {
  this.x = 0;
  this.y = 0;
}

function moveOnGrid (matrix) {
  for (x=0; x<=20; x++) {
//moving right but not down/up
  [x][y] * [x+1][y] * [x+2][y] * [x+3][y]
//moving left but not down/up
 [x][y] * [x-1][y] * [x-2][y] * [x-3][y]

  for (y=1; y<30; y++) {
    //moving down but not right/left
[x][y] * [x][y-1] * [x][y-2] * [x][y-3]
//moving up but not right/left
  [x][y] * [x][y+1] * [x][y+2] * [x][y+3]
  }
  y.push;
  }


funtion greatestProduct (matrix)  {
  var grid (() )
}
