// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if(number1 > number2){
    return number1;
  }
  else {
    return number2;
  }
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const empty = [];

findLongestWord(empty)

function findLongestWord(words) 
{
  if (words.length === 0)
    {
     return null;
    } 
    else if (words.length === 1)
      {
        return words[0];
      }
      else {
        return words.sort ((a, b) => b.length - a.length)[0];
      }
      
}




// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  if (numbers.length !== 0) 
   {
        for (let i = 0; i < numbers.length; i++) {

        sum = sum + numbers[i];
        
        }
      }
  else {

    sum = 0;
     }
      return sum;
}

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];


let typeOfArray;


// Iteration #3.1 Bonus:
function sum(chaosarray) 
{ 
  let counter = 0;
  let totals=0;
  if (chaosarray.length !== 0) 
    {
 
 
      for (let i = 0; i < chaosarray.length; i++)
       { 
    
         typeOfArray = typeof chaosarray[i];
     
           switch (typeOfArray) 
          {
            case "string":
              {
                counter = chaosarray[i].length;
                totals += counter;
            
              }

            break;

            case "number":
            totals = totals + (chaosarray[i]);
          
            break;
 
            case "boolean":
              let booleanTranslate = 0;
              
                if (chaosarray[i] === true)
                {
                  totals ++;
                }
                
          
              
            break;

            default:
              throw new Error("The value is not a number, string o boolean");
           // break;
          } 

        }
  } 
  else {
       return 0;
       }
  return totals;
}

  //console.log("Totals from sum function: " + sum(mixedArr));



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

let result;

function averageNumbers(avg) 
{
  if (avg.length !== 0){
  result = parseInt(sumNumbers(avg)) / avg.length;
}
  else {
        result = null;
       }
  return result;
}
//console.log("Result final:" + result);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
let totalwordlength;

function averageWordLength(wordsarray) 
{
  totalwordlength = 0;

  if(wordsarray.length !== 0)
  {
    for(i=0; i<wordsarray.length; i++)
      {
       totalwordlength = totalwordlength + wordsarray[i].length;
      }
     
  let wordlength = totalwordlength / wordsarray.length;
  return wordlength;
  }
  else return null;
  
  
}
// console.log(averageWordLength(wordsArr));

// Bonus - Iteration #4.1

function avg(arrayItems) 
{
  let sumAverage = 0;

  if (arrayItems.length !== 0)
   {
     sumAverage = sum(arrayItems) / arrayItems.length;
  }
  else {
    sumAverage = null;
    }
  
  return sumAverage;
  
}

//console.log("Average of mixed: " + avg(mixedArr));

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


function uniquifyArray(wordsToTest) 
{
  let newarray = [];
  if(wordsToTest.length !== 0)
  {
   for(i=0; i < wordsToTest.length; i++)
     {
        if (!newarray.includes(wordsToTest[i])) 
         {
           newarray.push(wordsToTest[i]);
         }
        
     }
  }
  
  else {
    newarray = null;
  }

  return newarray;
}

//console.log("Newarray: " + uniquifyArray(wordsUnique));

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsToFind, searchTerm) 
{
  if (wordsToFind.length !== 0)
  {
      if (wordsToFind.includes(searchTerm))
        {
          searchResult = true;
        }
      else 
      {
        searchResult = false;
       }
  }
  else {
    searchResult = null;
  }
  return searchResult;
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

function howManyTimes(inputWords, searchTerm) 
{
  let counter = 0;
  if(inputWords.length !== 0)
  {
    for (i=0; i<inputWords.length; i++)
     {  
       if (inputWords[i] === searchTerm)
          {
           counter ++;
           }
     }   
  }
  else{
    counter = 0;
  }  
  return counter;  
}

//console.log("Appeared times: " + howManyTimes(wordsCount, 'matter'));

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

function greatestProduct(arrayMatrix) 
{
  // Get row length
  const rowLength = matrix[0].length;
  console.log(rowLength);
  
  // Get number of rows and columns
  const rowNumber = arrayMatrix.length;
  const columnNumber = arrayMatrix.length;
  console.log(rowNumber);
  
  // Dissolve two-dimensional array into one array
  let allValues = [];
  for (let row of arrayMatrix) {
    for (let value of row) {
      allValues.push(value);
    }
  }
  
  // Define steps that correspond to a direction
  const dir = {
    horizontal: 4,
    vertical: 20,
    diagonalLTR: 21,
    diagonalRTL: 19
  }
  
  // Create a variable for the step count
  const step = 4;
  
  // Create an array that stores all products
  let products = [];
  
  // 4 horizontal values
  for (let i = 0; i < rowNumber; i++) {
    // Loop through each character as long as there are enough characters in the row left
    for (let j = rowLength * i; j < rowLength * (i + 1) - 3; j++) {
      let product = 1;
      // Iterate for 4 indexes ahead from current character
      for (let k = j; k <= j + step - 1; k++) {
        product *= allValues[k]; 
      }
      products.push(product);
    } 
  }
  
  // 4 vertical values
  for (let i = 0; i < columnNumber - (step - 1); i++) {
    // Loop through each character until the end of the row
    //console.log(i);
    for (let j = i * dir.vertical; j < rowLength * i; j++) {
      let product = 1;
      // Iterate for 20 indexes ahead from current character
      for (let k = j; k <= j + (step - 1) * dir.vertical; k += dir.vertical) {
        product *= allValues[k]; 
      }
      products.push(product);
    } 
  }
  
  // Product per 4
  for (let i = 0; i < columnNumber - (step - 1); i++) {
    // Loop through each character as long as there are enough characters in the row left
    for (let j = rowLength * i; j < rowLength * (i + 1) - 3; j++) {
      let product = 1;
      // Iterate for 21 indexes ahead from current character
      for (let k = j; k <= j + (step - 1) * dir.diagonalLTR; k += dir.diagonalLTR) {
        product *= allValues[k]; 
      }
      products.push(product);
    } 
  }
  
  // Calculate diagonal product
  for (let i = 0; i < columnNumber - (step - 1); i++) {
    for (let j = i * rowLength + 3; j < rowLength * (i + 1); j++) {
      let product = 1;
      for (let k = j; k <= j + (step - 1) * dir.diagonalRTL; k += dir.diagonalRTL) {
        product *= allValues[k]; 
      }
      products.push(product);
    } 
  }

  var largest = Math.max.apply(0, products);
  return largest;

}
//console.log("Result: " + greatestProduct(arrayMatrix));



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
