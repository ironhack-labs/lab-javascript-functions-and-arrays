//This is to create function with 2 paramters

//Part One
function maxOfTwoNumbers (num1, num2) {
  //We have to see if num1 is greater than or equal to num2
  if (num1 > num2){
    return num1;
  } else if (num1 < num2){
    return num2;
  }
  if (num1 === num2) {
    return num1
  }
  // This condition is based on the requirements in the Lab
}

// Part Two - Find the longest word

// This is the given array
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArray){
  // Condition stating that if the value is 0, disregard (null)
  if (wordsArray.length === 0) {
    return null;
  }
 
  let longestWord = " "; // We use this variable to put things into it from the array, if that makes sense , im referring to longestWord = " " , its empty and we can just put elements into it, like a repo basically, I know its confusing
 
  // For loop to look through the elements of the array
  for (let x = 0; x < wordsArray.length){ //Displays entire array
    if (wordsArray[x].length > longestWord) { //The condition
        longestWord = wordsArray[x] // These 2 are the same, as stated in the problem, so we return first instance
        }
  }
  return longestWord //return the var we created at the top
}

// Third Part

// This is given to us
     
const array = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumOfNumbers(array){
  let count = 0; //This is just declaring a variable to use for the array - To put things in it and return the value
  for (let x = 0; x < array.length; x++) { //Going through the array
    count = count + array[x];
  }
  return count;
}
