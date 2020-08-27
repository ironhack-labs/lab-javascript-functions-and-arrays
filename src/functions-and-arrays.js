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

let foo = ['hol', 'dater', 'ploppppppp'];
console.log(findLongestWord(foo));

// Iteration #3: Calculate the sum

// Iteration #4: Calculate the average

// Level 1: Array of numbers

// Level 2: Array of strings


// Iteration #5: Unique arrays

// Iteration #6: Find elements

// Iteration #7: Count repetition


// Iteration #8: Bonus

