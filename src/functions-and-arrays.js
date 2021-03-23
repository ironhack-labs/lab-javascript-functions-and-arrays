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