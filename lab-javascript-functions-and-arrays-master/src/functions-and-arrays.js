////    Iteration #1: Find the maximum

//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.


function maxOfTwoNumbers(num1, num2){

  let largest = 0;

  if (num1 === num2)
  {
    return "Are equal";
  }

  else if (num1 > num2){
    largest = num1;
    return largest;
  }

  else {
    largest = num2;
    return largest;
  }
  
  
};

console.log(`The max number is: ${maxOfTwoNumbers(10, 8)}`);


//       Iteration #2: Find longest word

/*Declare a function named findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.*/

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(someArray){

  let longest = someArray[0];
  let wordLength = someArray[0].length;

  for( i = 0; i < someArray.length; i++){
   
  
    if (someArray[i].length > wordLength){
      longest = someArray[i];
      wordLength = someArray[i].length;
    
    }

    }

   return longest;
    
  }


console.log(`The longest word is: ${findLongestWord(words)}`)

//       Iteration #3: Calculate the sum

/*Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Declare a function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice "declarative" way adding values, using loops.*/

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(someArray){
      let sumaAll = 0;
  for (i = 0; i < someArray.length; i++){
    sumaAll+= someArray[i];
  }
  return sumaAll;
}

console.log(`Sum of numbers are: ${sumNumbers(numbers)}`);

//Bonus - Iteration #3.1: A generic sum() function

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(someArray)
{
  let sumaAll = 0;
  let aux = 0;

  for (i = 0; i < someArray.length; i++){

    switch (typeof someArray[i]){
       case 'string':
       sumaAll += someArray[i].length;
      break;

    case 'boolean':
      someArray[i] === true ? aux = 1 : aux = 0;
      sumaAll += aux;
      break;

    case `number`:
      sumaAll += someArray[i];
      break;
    }

  
  }
return sumaAll;
}

console.log(`Sum of all types of the array are: ${sum(mixedArr)}`);

//Bonus - Iteration #4.1: A generic avg() function

const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arr)
{
  let totalArr = 0;
  totalArr = arr.length;
  totalArr = sum(arr) / totalArr;
  return totalArr;
  

}


console.log(`The average of all types of the array are: ${avg(mixedArr2)}`);


//       Iteration #4: Calculate the average

//Level 1: Array of numbers

/*Declare a function named averageNumbers that expects an array of numbers and returns the average of the numbers*/

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(someArray){

let average = 0;

average = (sumNumbers(someArray) / someArray.length)

return average;

}

console.log(`Average of numbers is: ${averageNumbers(numbers2)}`);

//Level 2: Array of strings

/*Declare a function named averageWordLength that receives as a single argument an array of words and returns the average length of the words*/

const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(someArray){

let averageLength = ``;

averageLength = someArray.join(``);

averageLength = averageLength.length;

averageLength /= someArray.length;

return averageLength;
}

console.log(`The average of words length is: ${averageWordLength(words2)}`);

//       Iteration #5: Unique arrays

/*Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the indexOf Array method.

Do this in the form of a function uniquifyArray that receives an array of words as a argument.*/

const words3 = [
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

function uniquifyArray(someArray){

let fixedArray = [];

for (i = 0; i < someArray.length; i++){
  if (fixedArray.indexOf(someArray[i]) === -1){
      fixedArray.push(someArray[i]);
  }
};

return fixedArray;
}



console.log(`Uniquified array: ${uniquifyArray(words3)}`);


//       Iteration #6: Find elements

/*Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise, return false. Don't use indexOf for this one.*/

const words4 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(someArray, string){

  for(i = 0; i < someArray.length; i++ ){

    if (someArray[i] === string){ return true}
  }
return false;
}

console.log(`The word exists?: ${doesWordExist(words4, `subset`)}`);

//       Iteration #7: Count repetition

/*Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.*/
const words5 = [
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
function howManyTimes(someArray, string){
  let wordAppears = 0;

  for(i = 0; i < someArray.length; i++ ){

    if (someArray[i] === string){ wordAppears++}
  }
return wordAppears;
}


console.log(`The times that the word is appears: ${howManyTimes(words5, `matter`)}`);

//Bonus - Iteration #8: Product of adjacent numbers
const matrix = 
[[ 1,  2, 3, 4, 5],
[ 1, 20, 3, 4, 5],
[ 1, 20, 3, 4, 5],
[ 1, 20, 3, 4, 5],
[ 1,  4, 3, 4, 5]];


function greatestProduct(matrix){
let greatestNum = 0;

//Find the biggest nummber
for (let i = 0; i < matrix[i].length; i++) {
  console.log(i);
  for (let k = 0; k < matrix[i][k].length; k++) {
  console.log(k);
  
  }

}

  }



greatestProduct(matrix);