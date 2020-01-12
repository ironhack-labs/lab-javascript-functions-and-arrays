// Iteration #1: Find the maximum

const maxOfTwoNumbers = function (num1, num2) {
  // if num1 is bigger than num2, return num1
  if (num1 > num2) {
    return num1
    // if num2 is bigger than num1, return num2
  } else if (num2 > 1) {
    return num2
  } else {
    // if they are equal, return error message
    console.log('Your numbers are equal.')
  }
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

let findLongestWord = function (array) {
  var longest = "";
  // if there is only one item in the array, return that item
  if (array.length === 1) {
    return array[0];
    // if the array is empty or undefined, return undefined
  } else if (array.length < 1 || array == undefined) {
    return undefined;
  } else {
    // loop through each item in the array and check for the length of each item. Each time the item's length is longer than the one stored in the 'longest' variable, overwrite it.
    for (var i = 0; i < array.length; i++) {
      if (longest.length < array[i].length) {
        longest = array[i];
      }
    }
    return longest;
  }
}

findLongestWord(words);

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array) {
  // !array.length is the same as writing array.length === 0
  let sum = 0
  if (!array.length) {
    return 0;
  } else {
    // loop through each item in the array and add its value to the sum variable
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
}
sumArray(numbers);

// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  // !array.length is the same as writing array.length === 0
  let sum = 0
  if (!array.length) {
    return null;
  } else {
    // loop through each item in the array and add it to the sum variable
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }
    // divide the total by the number of items inside the array to arrive at the average
    return sum / array.length;
  }
}


// Level 2: Array of strings
const wordsArr = [
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

function averageWordLength(array) {
  // !array.length is the same as writing array.length === 0
  let sum = 0
  if (!array.length) {
    return null;
  } else {
    // loop through each item in the array and add its length to the sum variable
    for (i = 0; i < array.length; i++) {
      sum += array[i].length;
    }
    return sum / array.length;
  }
}

console.log(averageWordLength(wordsArr));


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

function uniquifyArray(array) {
  // start a new empty array
  let unique_array = []
  // return empty array if there is nothing in the array to begin with
  if (!array.length) {
    return [];
  } else {
    //loop through each item in the old array and check if this item is already in the new item. If it is not in the new item, it gets pushed into the new item. 
    for (let i = 0; i < array.length; i++) {
      if (unique_array.indexOf(array[i]) === -1) {
        unique_array.push(array[i])
      }
    }
    return unique_array
  }
}

// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(array, searchWord) {
  // if array is empty, return false
  if (!array.length) {
    return false;
    // if array only contains 1 item and this item is the search word, return true
  } else if (array.length === 1 && array[0] === searchWord) {
    console.log('is it this one?');
    return true;
  } else {
    // Loop through each item of the array and check if it’s the search word to return true
    for (var i = 0; i < array.length; i++) {
      if (array[i] === searchWord) {
        console.log(`search word is: ${array[i]}`);
        return true;
      }
    }
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

function howManyTimes(array, searchWord) {
  let counter = 0
  // if array is empty, return 0
  if (!array.length) {
    return 0;
  } else {
    // loop through each item in the array and check if it is the search word. If it is, 1 is added to the counter variable.
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchWord) {
        counter += 1
      }
    }
  } return counter;
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
