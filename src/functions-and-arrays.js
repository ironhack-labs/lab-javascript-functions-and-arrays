// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 < number2){
        return number2;
    }else if (number1 > number2){
        return number1;
    }else {
        return number1, number2;
    }
}
console.log(maxOfTwoNumbers(7,15));

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];



function findLongestWord(words) {

    if (words.length === 0) {
        return 0;
    }
    for (let i=0; i < words.length; i++){
       if (findLongestWord.length < words[i].length){
            longestWord = words[i];
            return longestWord;
        }  
    }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum = 0;

function sumNumbers(numbers) {

    if (numbers.length === 0){
        return 0;
    }else if (numbers.length === 1){
        return numbers[0];
    }for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0){
        return 0;
    }
    let average = sumNumbers(numbers2) / numbers2.length;
    return average;
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, searchWord) {
    if (words2.length === 0){
        return null;
    }
    for (let i=0; i < words2.length; i++){
        if (words2[i] === searchWord){
            return true;
        } 
    }
    return false;
}
