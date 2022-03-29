//Iteration ironhack-labs#1: Find the maximum
function maxOfTwoNumbers(num1, num2){
  if(num1 > num2)
    return num1;
  else {
    return num2;
  }
 }
console.log(maxOfTwoNumbers(5, 11));

//Iteration ironhack-labs#2: Find the longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arrOfWords){
  let longestWord = "";

  arrOfWords.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
};
console.log(findLongestWord(words))

//Iteration ironhack-labs#3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sum){
  count = 0;
  for(i = 0; i < sum.length; i++){
    count = count + sum[i]
  }
  return count
};
console.log(sumNumbers(numbers))

//Iteration ironhack-labs#4: Calculate the average

const numberss = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(num){
  count = 0;
  for(i = 0; i < num.length; i++){
    count = (count + num[i]) / num.length
  }
  return count
};
console.log(averageNumbers(numberss))

//

 
 
