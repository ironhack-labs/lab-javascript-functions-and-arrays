// Iteration #1: Find the maximum

// ES5
// function maxOfTwoNumbers(num1, num2){
//   if(num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };

// ES6 + Ternary Operator
const maxOfTwoNumbers = (num1, num2) => {
  return num1 > num2 ? num1 : num2; // checks conditions and returns highest number
};



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// ES5 + for loop
function findLongestWord(arr) {
  if(!arr.length) { // check if array is empty
    return null; // if so return null 
  } 

  let longestWord = ''; // create variable for word
  for(let i = 0; i < arr.length; i++){ // loop over array
    if(arr[i].length > longestWord.length){ // if length of index word is longer than current stored word
    longestWord = arr[i]; // change word into index word. longest word will stay
    }
  }
  return longestWord; // return the longest word
}

// ES6 + forEach
// const findLongestWord = arr => {
//   if(!arr.length) { // check if array is empty
//     return null; // if so return null 
//   } 
  
//   let longestWord = ''; // create variable for longest word
//   arr.forEach(word => {
//     if(word.length > longestWord.length) { // if length of word is shorter than index word =>
//       longestWord = word; // change word into index word. longest word will stay
//     }
//   })
//   return longestWord; // return the longest word
// };



// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// ES5 = for loop
// function sumNumbers(arr){
//   let sum = 0; // sum starts at 0
//   for(let i = 0; i < arr.length; i++) { // loop over array
//     sum += arr[i]; // add every number of array to sum
//   }
//   return sum; // when iteration of loop is done, return total of sum
// };

// ES6 +forEach
const sumNumbers = arr => {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return sum;
};



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// ES5
// function averageNumbers(arr){
//   if(!arr.length) { // check if array is empty
//     return null; // if so return null 
//   };

//   return sumNumbers(arr) / arr.length; // use sumNumbers function as callback and devide by length of arry  
// };

// ES6
const averageNumbers = arr => {
  if(!arr.length) { // check if array is empty
    return null; // if so return null 
  } 

  return sumNumbers(arr) / arr.length; // use sumNumbers function as callback and devide by length of array
};

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// ES5 + for loop
// function averageWordLength(arr){
//   if(!arr.length) { // check if array is empty
//     return null; // if so return null 
//   } 

//   let sumWords = 0;
//   for(let i = 0; i < arr.length; i++) { // loop over array
//     sumWords += arr[i].length; // add number of characters of word in array to sumWords
//   }
//   return sumWords / arr.length; // total of sumWords divided by length of array
// }

// ES6 + forEach
const averageWordLength = arr => {
  if(!arr.length) { // check if array is empty
    return null; // if so return null 
  }

  let sumWords = 0;
  arr.forEach(word => {
    sumWords += word.length; // add number of characters of word in array to sumWords
  })
  return sumWords / arr.length; // total of sumWords divided by length of array
};


// Bonus - Iteration #4.1: A generic avg() function
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

const sum = arr => {
  if(!arr.length) { // check if array is empty
    return 0; // if so return null 
  }

  let sum = 0; // create variable to store total of sum
  let chartsOfWord = 0; // create variable to store length of string as numbers
  arr.forEach(num => {
    if (typeof num === 'object') { // if num is array or object (array = object)
      throw new Error("Unsupported data type sir or ma'am");
    }
    if (typeof num === 'number'){ // if num is a number
      sum += num; // add number to sum
    }
    if (num === true) { // if num is boolean true
      sum++; // add 1 to sum
    }
    if (typeof num === 'string'){ // if num is a string
      chartsOfWord = num.length; // store length of string as a number into chartsOfWord variable
      sum += chartsOfWord; // add value of chartsOfWord to sum
    }
  });

  return sum; // return total of sum
};

const avg = arr => {
  if(!arr.length) { // check if array is empty
    return null; // if so return null 
  }

  return sum(arr) / arr.length; // returns avarage number of array elements
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

// ES5 + for loop + indexOf()
// function uniquifyArray(arr){
//   if(!arr.length) { // check if array is empty
//     return null; // if so return null 
//   } 

//   let newArr = []; // new empty array
//   for (let i = 0; i < arr.length; i++) { // loop over array
//     if (newArr.indexOf(arr[i]) === -1) { // checks if word does not exist in newArr
//       newArr.push(arr[i]); // if not already in newArr, store it into array
//     }
//   }
//   return newArr; // return newArr
// };

// ES6 + forEach + indexOf()
const uniquifyArray = arr => {
  if(!arr.length) { // check if array is empty
    return null; // if so return null 
  } 

  let newArr = []; // new empty array
  arr.forEach(word => {
    if(newArr.indexOf(word) === -1) { // checks if word does not exist in newArr
      newArr.push(word); // if not already in newArr, store it into array
    }
  })
  return newArr; // return newArr
};



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// ES5 + for loop
// function doesWordExist(arr, word) {
//   if(!arr.length) { // check if array is empty
//     return null; // if so return null 
//   } 

//   for (var i = 0; i < arr.length; i++) { // loop over array
//     if (arr[i] === word) { // check if specific word is in array
//       return true; // if so, return true
//     }
//   }
//   return false; // word is not in array, return false
// };


// ES6 #1 
const doesWordExist = (arr, word) => {
  if(!arr.length) { // check if array is empty
    return null; // if so return null 
  } 
  
  let result = false; // create result variable and set default to false
  arr.forEach(element => {
    if (element.includes(word)) { // if word is in the array
      result = true; // change result to true
    }
  })
  return result; // return result (true/false)
};


// ES6 #2 With Ternary
// const doesWordExist = (arr, word) => {
//   if(!arr.length) { // check if array is empty
//     return null; // if so return null 
//   }

//   let result = false;
//   arr.forEach(element => {
//     element.includes(word) ? result = true : result; // check conditions with ternary operator
//   });
//   return result;
// }

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

// ES5 + for loop
// function howManyTimes(arr, word) {
//   if(!arr.length) { // check if array is empty
//     return 0; // if so return null 
//   } 

//   let countWord = 0; // create new variable to count amount
//   for (var i = 0; i < arr.length; i++) { // loop over array
//     if(arr[i] === word){ // if specific word is in array =>
//       countWord++; // add 1 to countWord variable
//     }
//   }
//   return countWord; // return total of countWord
// }

// ES6 + forEach
const howManyTimes = (arr, word) => {
  if(!arr.length) { // check if array is empty
    return 0; // if so return null 
  } 

  let countWord = 0; // create new variable to count amount
  arr.forEach(element =>{
    if(element === word){ // if specific word is in array =>
      countWord++; // add 1 to countWord variable
    }
  }); 
  return countWord; // return total of countWord
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
