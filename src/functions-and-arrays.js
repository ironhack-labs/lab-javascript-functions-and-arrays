// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2){
    return num1;
  } else if (num1 < num2){
    return num2;
  } else {
    return num1;
  }
}
console.log(maxOfTwoNumbers(11,10));

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

let findLongestWord = (arr) => {
  let result;
  if (arr.length > 0){
    let largest = "";
    words.forEach((el) => {
      if(largest.length < el.length){
        largest = el;
      } 
    });
    return largest;
  } else if (arr.length = 1){

    return arr[0];

  } else if (arr.length === 0){
     result = null;
  }
  return result;
}

console.log(findLongestWord(words));

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sumNumbers = (array) => {
  let sum = 0;
  array.forEach((el) => sum += el);
  return sum;
}
console.log(sumNumbers(numbers));

// Iteration #3.1: A generic sum() function
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

let sum = (array) => {
  let totalSum = 0;
  array.forEach((el) => {
    switch (typeof el){
      case "number":
        totalSum += el;
        break;
      
      case "string":
        totalSum += el.length;
        break;
      
      case "boolean":
        if (el === true){
          totalSum ++;
          break;
        } else {
          break;
        }  
      
      default:
        throw new Error("ERROR. TYPE OF DATA NOT ALLOWED.");
    }
  });
  return totalSum;
}

console.log(sum(mixedArr));

