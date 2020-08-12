// Iteration #1: Find the maximum
const maxOfTwoNumbers = (number1,number2) => {
  if (number1 > number2) {
    return number1;
  }
  return number2;
}
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(words) {
  let longest_word = "";
  if (words.length == 0) {
    return null;
  } else if (words.length == 1) {
    return words[0];
  }
  for (let i = 0 ; i < words.length ; i++) {
    if (longest_word.length < words[i].length) {
      longest_word = words[i];
    }
  }
  return longest_word;
}


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  let total = 0;
  if (numbers.length == 0) {
    return 0;
  }else if (numbers.length == 1) {
    return numbers[0];
  }
  for (let number of numbers) {
    if (number == 0) {
      return 0;
    }
  }
  numbers.reduce((sum, currVal) => {
    return total = sum + currVal;
  })
  return total;
}

//Bonus
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(mixedArr) {
  total = 0 ;
  for (let item of mixedArr){
    if (typeof item == "object" || typeof item == "array"){
    throw new Error("Unsupported data type sir or ma'am");
  }
  }
  mixedArr.forEach( function(item) {
    if (typeof item == "boolean") {
      total += item;
    } else if (typeof item == "string"){
      total += item.length;
    } else {
      total += +item;
    } 
  });
  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array_of_numbers) {
  if (array_of_numbers.length == 0) {
    return null;
  }
  let summed_numbers = sumNumbers(array_of_numbers);
  return summed_numbers / array_of_numbers.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(array_of_strings) {
  let total_characters = 0;
  if (array_of_strings.length == 0) {
    return null;
  } else if (array_of_strings.length == 1) {
    return array_of_strings[0].length;
  } 
  for (let word of array_of_strings) {
    total_characters += word.length;
  }
  return total_characters / array_of_strings.length;
}

//Bonus
function avg(arr) {
  if (arr.length == 0) {
    return null;
  }
  let avg = sum(arr);
  return parseFloat((avg / arr.length).toFixed(2));
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
function uniquifyArray(array_of_words) {
  let new_words_unique = [];
  if (array_of_words.length == 0) {
    return null;
}
  for (let word of array_of_words) {
    if (new_words_unique.indexOf(word) == -1) {
      new_words_unique.push(word);
    }
  }
  return new_words_unique;
}

uniquifyArray(wordsUnique);


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(array_of_words, word) {
  if (array_of_words.length == 0) {
    return null;
} else if (array_of_words.length == 1 && array_of_words[0] == word) {
  return true;
} else if (array_of_words.includes(word)) {
    return true;
  } 
  return false;
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

function howManyTimes(array_of_words, word) {
  total = 0;
  if (array_of_words.length == 0) {
    return 0;
} else if (array_of_words.length == 1 && array_of_words[0] == word) {
  return 1;
} 

for (let i = 0; i < array_of_words.length; i++)
 if (array_of_words[i] == word){
     total++;
  } 
  return total;
}


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

function greatestProduct(matrix) {
  let horizontal_max = 0;
  let vertical_max = 0;
  let greatest_product = 0;
  for (let i = 0; i < matrix.length-4; i++){
    let vertical_product = matrix[i][i] * matrix[i+1][i] * matrix[i+2][i] * matrix[i+3][i];
    let horizontal_product = matrix[i][i] * matrix[i][i+1] * matrix[i][i+2] * matrix[i][i+3];
  if ( horizontal_max < horizontal_product ) {
    horizontal_max = horizontal_product;
  }
    if ( vertical_max < vertical_product ) {
    vertical_max = vertical_product;
  } 
  }
  if (horizontal_max < vertical_max){
    greatest_product = vertical_max;
  } else {
    greatest_product=horizontal_max;
  }
  
  return greatest_product;
}
