// Iteration #1: Find the maximum
const maxOfTwoNumbers = (a, b) => a > b ? a : b;

// Iteration #2: Find longest word
const findLongestWord = (arr) => {
    let longestWord = '';
    switch (arr.length) {
        case 0:
            longestWord = null;
            break;
        case 1:
            longestWord = arr[0];
            break;
        case 2: 
            arr[0].length === arr[1].length ? longestWord = arr[0] 
            : arr[0].length > arr[1].length ? longestWord = arr[0] : longestWord = arr[1];
            break;
        default:
            for (let word of arr) {
                word.length > longestWord.length ? longestWord = word : null;
            }
            break;
    }
    return longestWord;
}

// Iteration #3: Calculate the sum
const sum = (arr) => {
    let totalSum = '';
    switch (arr.length) {
        case 0:
            totalSum = 0;
            break;
        default:
            let newArr = [];
            for(let value of arr) {

                if(typeof value === 'string') {
                    newArr.push(value.length)
                } 
                else if(typeof value === 'bolean') {
                    value === true ? newArr.push(1) : newArr.push(0);
                }
                else if (typeof value === 'object') {
                    throw new Error("Unsupported data type sir or ma'am")
                }
                else {
                    newArr.push(value);
                }
            }
            totalSum = newArr.reduce((accumulator, num) =>  accumulator + num, 0);
    }
    return totalSum;
} 

const sumNumbers = (arr) => sum(arr);

// Iteration #4: Calculate the average
const averageNumbers = (arr) => {
    let averageNum = '';
    switch (arr.length) {
        case 0:
            averageNum = null;
            break;
        case 1:
            averageNum = arr[0];
            break;
        default:
            averageNum = sum(arr)/arr.length;
    }
    return averageNum;
};

// Level 1: Array of numbers
const averageWordLength = (arr) => {
    let averageLength; 
    switch (arr.length) {
        case 0:
            averageLength = null;
            break;
        case 1:
            averageLength = arr[0].length;
            break;
        default:
            averageLength = sum(arr)/arr.length;
    }
    return averageLength;
};

// Level 2: Array of strings
const avg = (arr) => {
    let avgMixData; 
    switch (arr.length) {
        case 0:
            avgMixData = null;
            break;
        case 1:
            avgMixData = arr[0].length;
            break;
        default:
            avgMixData = sum(arr)/arr.length;
            avgMixData = Number(avgMixData.toFixed(2));
    }
    return avgMixData;
};

// Iteration #5: Unique arrays
const uniquifyArray = arr => {
    let transformedArray = [];
    switch (arr.length) {
        case 0:
            transformedArray = null;
            break;
        default:
            for (let word of arr) {
                !transformedArray.includes(word) ? transformedArray.push(word) : null;
            }
    }
    return transformedArray;
};
// Iteration #6: Find elements

// Iteration #7: Count repetition


// // Iteration #8: Bonus

