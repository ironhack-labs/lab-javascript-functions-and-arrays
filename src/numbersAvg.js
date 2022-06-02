const { numbers } = require("./functions-and-arrays");

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers() {
    let sum = 0;
    let average = sum / numbers.length;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return average;
}
console.log(averageNumbers(numbersAvg));
