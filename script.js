//Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " seems to be the bigger number");
    }
    else if (num1 < num2) {
        console.log(num2 + " seems to be the bigger number");
    }
    else if (num1 === num2) {
        console.log("That's the same number!");
    }
};
// maxOfTwoNumbers(77, 7);


//Iteration #2: Find the longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
    const wordsLengths = arr.map(len => len.length);
    var biggestNum = wordsLengths[0];

    for (var i = 0; i < wordsLengths.length; i++) {
        if (wordsLengths[i] > biggestNum) {
            biggestNum = wordsLengths[i];
        }
    }
    return arr[wordsLengths.indexOf(biggestNum)];
};
// console.log("The longest word seems to be: " + findLongestWord(words));


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
    let numbersTotal = 0;
    for (let index = 0; index < numberArray.length; index++) {
        numbersTotal += numberArray[index];
    }
    return numbersTotal
};
// console.log("The sum of the numbers stored in your array is: " + sumNumbers(numbers));


//Bonus - Iteration #3.2: A generic sum() function
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(arr) {
    ourSum = 0;

    for (let index = 0; index < arr.length; index++) {
        if (typeof arr[index] === "number") {
            ourSum += arr[index];
        }
        else if (typeof arr[index] === "string") {
            ourSum += arr[index].length;
        }
        else if (typeof arr[index] === "boolean") {
            if (arr[index] = true) {
                ourSum += 1;
            }
            else if (arr[index] = false) {
                continue;
            }
        }
        else if (typeof arr[index] !== "boolean" && typeof arr[index] !== "string" && typeof arr[index] !== "number") {
            throw new Error('Your array contains a type of value different to: boolean, string or ');
        }
    }
    return ourSum;
};
// should return: 57


//Iteration #4: Calculate the average
//Iteration #4.1: Array of numbers
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumber(arr) {
    let numbersTotal = 0;
    for (let index = 0; index < arr.length; index++) {
        numbersTotal += arr[index];
    }

    return numbersTotal / arr.length;
};
// console.log("The average of your array is: " + averageNumber(numbers2));


//Iteration #4.2: Array of strings
const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words222) {
    let wordsLengths = words222.map(len => len.length);
    let numbersTotal = 0;
    for (let index = 0; index < wordsLengths.length; index++) {
        numbersTotal += wordsLengths[index];
    };
    average222 = numbersTotal / wordsLengths.length;
    return average222;
};
// console.log("The average length of your word is: "+averageWordLength(words2));


//Bonus - Iteration #4.3: A generic avg() function
const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arr) {
    ourSum = 0;

    for (let index = 0; index < arr.length; index++) {
        if (typeof arr[index] === "number") {
            ourSum += arr[index];
        }
        else if (typeof arr[index] === "string") {
            ourSum += arr[index].length;
        }
        else if (typeof arr[index] === "boolean") {
            if (arr[index] = true) {
                ourSum += 1;
            }
            else if (arr[index] = false) {
                continue;
            }
        }
        else if (typeof arr[index] !== "boolean" && typeof arr[index] !== "string" && typeof arr[index] !== "number") {
            throw new Error('Your array contains a type of value different to: boolean, string or ');
        }
    }
    return ourSum / arr.length;
};
// should return: 5.7




//Iteration #5: Unique arrays
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

function uniquifyArray(words333) {
    let uniqueArray = [];

    for (let index = 0; index < words333.length; index++) {
        if (uniqueArray.includes(words333[index])) {
            continue;
        }
        else {
            uniqueArray.push(words333[index]);
        }
    }
    return uniqueArray;
};
// console.log(uniquifyArray(words3));


//Iteration #6: Find elements
const words4 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, arg) {
    if (arr.includes(arg)) {
        return true;
    }
    else {
        return false;
    }
};
// console.log(doesWordExist(words4, 'subset'));
// console.log(doesWordExist(words4, 'sunset'));


//Iteration #7: Count repetition
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

function howManyTimes(arr, word) {
    wordCount5 = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === word) {
            wordCount5 += 1;
            continue;
        }
        else {
            continue;
        }
    }
    return wordCount5;
};
// console.log("This words appears in your array "+howManyTimes(words5, 'matters')+" times");


//Bonus - Iteration #8
//Bonus - Iteration #8.1: Product of adjacent numbers
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

function greatestProduct(arr) {
    let returnArray = [];

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];

        for (let j = 0; j < row.length - 3; j++) {
            let results = row[j] * row[j + 1] * row[j + 2] * row[j + 3];
            returnArray.push(results);
        }
    }

    for (let k = 0; k < arr[0].length; k++) {
        let verticalRow = arr.map(array => array[k]);

        for (let l = 0; l < verticalRow.length - 3; l++) {
            let results = verticalRow[l] * verticalRow[l + 1] * verticalRow[l + 2] * verticalRow[l + 3];
            returnArray.push(results);
        }
    }
    let sortedArray = returnArray.sort((a, b) => b - a);
    return sortedArray[0];
};

// console.log(greatestProduct(matrix));


//Bonus - Iteration #8.2: Product of diagonals
// let matrix2 = [
//     [1, 2, 3, 4, 5],
//     [1, 20, 3, 4, 5],
//     [1, 20, 3, 4, 5],
//     [1, 20, 3, 4, 5],
//     [1, 4, 3, 4, 5]]

// function greatestProductOfDiagonals(arr) {
//     let rowR = [];
//     let rowL = [];

//     let returnArrayR = [];

//     for (let i = 0; i < arr.length; i++) {
//         rowR.push(arr[i][i]);
        
//         for (let j = 0; j < rowR.length - 4; j++) {
//             let results = rowR[j] * rowR[j + 1] * rowR[j + 2] * rowR[j + 3];
//             returnArrayR.push(results);
//         }
//     };

//     for (let k = 0; k < arr[0].length; k++) {
//         let verticalRow = arr.map(array => array[k]);

//         for (let l = 0; l < verticalRow.length - 3; l++) {
//             let results = verticalRow[l] * verticalRow[l + 1] * verticalRow[l + 2] * verticalRow[l + 3];
//             returnArray.push(results);
//         }
//     }


//     return rowR;
//     };

//     console.log(greatestProductOfDiagonals(matrix2));