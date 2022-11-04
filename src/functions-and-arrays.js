
function maxOfTwoNumbers (num1, num2) {
  
  if (num1 > num2){
    return num1;
  } else if (num1 < num2){
    return num2;
  }
  if (num1 === num2) {
    return num1
  }
  
}


const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArray){
  
  if (wordsArray.length === 0) {
    return null;
  }
 
  let longestWord = " ";
 

  for (let x = 0; x < wordsArray.length){ 
    if (wordsArray[x].length > longestWord) { 
        longestWord = wordsArray[x] 
        }
  }
  return longestWord 
}


     
const array = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumOfNumbers(array){
  let count = 0; //This is just declaring a variable to use for the array - To put things in it and return the value
  for (let x = 0; x < array.length; x++) { //Going through the array
    count = count + array[x];
  }
  return count;
}
