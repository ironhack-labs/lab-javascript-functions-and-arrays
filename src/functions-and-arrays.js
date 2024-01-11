// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1,number2) {
    return Math.max(number1,number2);
    }
    const result = maxOfTwoNumbers(1,9);
    console.log(result);

// Iteration 2 | Find the Longest Word
function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
     let longestWord = words[0];
     for (let i = 1; i < words.length; i++) {
         if (words[i].length > longestWord.length) {
         longestWord = words[i];
         return longestWord;    
     }
 }
 } 
 const wordsArray = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
 const longestWordResult = findLongestWord(wordsArray); 
 console.log(longestWordResult);




// Iteration 3 | Sum Numbers
function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
    const numbersArray = [1, 2, 3, 4, 5];
    const result = sumNumbers(numbersArray);
    console.log(result);



// Iteration 4 | Numbers Average
function averageNumbers(numbers) {
    const sum = sumNumbers(numbers);
    if (numbers.length === 0) {
        return null;
    }
    const average = sum / numbers.length;
    return average;
}
    const arrayofNumbers = [2, 6, 9, 10, 7, 4, 1, 9];
    const averageResult = averageNumbers(arrayofNumbers);
    console.log(averageResult);



// Iteration 5 | Find Elements
function doesWordExist(wordArray, findWord) {
    if (wordArray.length === 0) {
        return null;
 }
     return wordArray.includes(findWord);
 } 
     const wordsPuzzle = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
     const searchWord = "disobedience";
     const exists = doesWordExist(wordsPuzzle,searchWord);
     if (exists === null) {
         console.log("The array is empty.");
     } else if (exists) {
         console.log(`The word "${searchWord}" exists in the array.`);
     } else {
         console.log(`The word "${searchWord}" does not exist in the array.`);
     }