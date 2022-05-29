// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if(num1>num2){
    return num1;
  }else{
    return num2;
  }
}


// Iteration #2: Find longest word
const words1 = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(word) {
    
  if(word.length == 0){
    return null
  }

  let longestWord = word[0];

  for(let i = 1 ; i < word.length; i++){
      if(word[i].length > longestWord.length){
        longestWord =  word[i];
      }
    }
   // console.log(longestWord);
    return longestWord;
  };

  findLongestWord(words1);


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// 
function sumNumbers(number) {
  if (number.length == 0){
    return 0;
  }

  let numSum = 0
  number.forEach(function(num){
    numSum = numSum + num;
  })
 // console.log(numSum);
  return numSum
}

sumNumbers(numbers);


// Iteration #3.1 Bonus:
let otherNumbers = ["cuat" , 4 , true, false];

function sum(numbers) {
  if (numbers.length == 0){
    return 0;
  } else if(numbers.length == 1){
    return numbers[0];
  }
  let unsupported = "Unsupported data type sir or ma'am";
  let numbersSum = 0
  for(i = 0 ; i < numbers.length ; i++){
    if (typeof numbers[i] === 'number'){
          numbersSum = numbersSum + numbers[i];
     } else if (typeof numbers[i] === 'string'){
          numbersSum = numbersSum + numbers[i].length;
     } else if(numbers[i] === true){
          numbersSum = numbersSum + 1;
     }else if(numbers[i] === false){
          numbersSum = numbersSum + 0;
        } else{
          throw ("Unsupported data type sir or ma'am");
        }
  }
<<<<<<< HEAD
 // console.log(numbersSum)
=======
  console.log(numbersSum)
>>>>>>> 31b2c90f4d1636025fe5d548e81e1ce6ff6df522
  return numbersSum;
}

sum(otherNumbers);



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {

  if (numbers.length === 0){
    return null;
  }

  let sumNum = 0;
  numbers.forEach(function(num){
    sumNum = sumNum + num;
  })
  //console.log(sumNum);
  let averageNum = sumNum / numbers.length;
  //console.log(averageNum);
  return (averageNum);
}

averageNumbers(numbersAvg);


// Level 2: Array of strings
const wordsArr = [3 ,'seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) { 
  
  if (words.length === 0){
    return null;
  }

  let sumNumArray = 0;

  words.forEach(function(word){
    if(typeof word === 'number'){
      sumNumArray = sumNumArray + word;
    }
    if(typeof word === 'string'){
      sumNumArray = sumNumArray + word.length;
    }
  })

  let averageLengthWordArray = sumNumArray / words.length;
  console.log(averageLengthWordArray);
  return  averageLengthWordArray;

}

averageWordLength (wordsArr);

// Bonus - Iteration #4.1

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function avg(arrayMixed) {
  if (arrayMixed.length === 0){
    return null;
  }
  let sumNumArray = 0;
  arrayMixed.forEach(function(word){
    if(typeof word === 'number'){
      sumNumArray = sumNumArray + word;
    }else if(typeof word === 'string'){
      sumNumArray = sumNumArray + word.length;
    }else if(typeof word === 'boolean'){
      if(word === true){
        sumNumArray++
      }
    }
  
  })

  let averageLengthWordMixedArray = Number((sumNumArray / arrayMixed.length).toFixed(2))
  return averageLengthWordMixedArray
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

<<<<<<< HEAD
function uniquifyArray(words) {
  if (words.length === 0) {
    return null
  }

  let uniqueArray1 = [];

  words.forEach(word => {
    if (uniqueArray1.indexOf(word) === -1) {
      uniqueArray1.push(word)
=======
function uniquifyArray(arrayWords) {
  
  if (arrayWords.length === 0){
    return null;
  }

  let uniqueWords = [];
  arrayWords.forEach(function(word){
    let countRepetition = 0;
    for(i=0 ; i<arrayWords.length; i++){
      if(word == arrayWords[i]){
        countRepetition ++;
      }
    };
    if(countRepetition == 1){
      uniqueWords.push(word);
>>>>>>> 31b2c90f4d1636025fe5d548e81e1ce6ff6df522
    }
  })

  return uniqueArray1;
}




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

<<<<<<< HEAD
function doesWordExist(words, findWord) {
  if (words.length === 0) {
    return null
  }

  let wordExists = false;

  for(i = 0; i <= words.length; i++){
    
    const word = words[i];
    if(word === findWord){
      wordExists = true
      break;
    }
  } return wordExists;

  }   

=======
function doesWordExist(findWord) {
  if (wordsFind.length === 0){
    return null;
  }
  if (findWord.length === 0){
    return null;
  }

  if (wordsFind.length === 1 && findWord == wordsFind[0]) {
    console.log ("this word is the only one in the array");
    return true;
  }
  let repeat = 0;
  for(i=0 ; i<wordsFind.length ; i++){
    if(wordsFind[i] == findWord){
      console.log(`yeah bro, ${findWord} does exist`);
      repeat ++;
      } 
    } 
    if(repeat === 1) {
    return true;
     }else if (repeat === 0) {
      console.log(`nah bro, ${findWord} does not exist`);
       return false;
     }
  }   

doesWordExist('machine')
doesWordExist("suxset");
>>>>>>> 31b2c90f4d1636025fe5d548e81e1ce6ff6df522

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

function howManyTimes(arrayWords, wordToCount) {
  if (arrayWords.length === 0){
    return 0;
  }

  let times = 0;
  arrayWords.forEach(word =>{
    if (word === wordToCount){
      times++;
    }
  })
  return times;


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
  let total = 0

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const element = matrix[i][j]
      const top = i > 0 ? matrix[i - 1][j] : 1
      const right = j < row.length - 1 ? matrix[i][j + 1] : 1
      const bottom = i < matrix.length - 1 ? matrix[i + 1][j] : 1
      const left = j > 0 ? matrix[i][j - 1] : 1

      const product = top * right * bottom * left

      if (product > total) {
        total = product
      }
    }
  }

  return result
}








// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
