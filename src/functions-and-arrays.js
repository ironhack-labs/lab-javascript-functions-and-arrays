// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    if (wordsArray.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    let longestWord = wordsArray[0];

    for (let i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }

    return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }

    return sum;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (numbersArray.length === 0) {
        return 0; // Return 0 if the array is empty
    }
    const sum = sumNumbers(numbersArray);
    return sum / numbersArray.length;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {
    if (wordsArray.length === 0) {
        return null; // Return null if the array is empty
    }

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === wordToSearch) {
            return true; 
        }
    }

    return false; 
}