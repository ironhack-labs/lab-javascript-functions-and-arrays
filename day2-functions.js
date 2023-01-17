/* let myAverageArray = [350, 560, 680, 10]; */

/* function avg(arr){
    if (!arr) return;

    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    console.log(total);
    return total / arr.length;
}

console.log(avg(myAverageArray)); */

/* function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    let average = sum / arr.length;
    return average;
}

console.log(avg(myAverageArray)); */

/* function sumArr(arr){
    if (!arr) return;
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

function avg(arr) {
    if (!arr) return;
    let totalSum = sumArr(arr);
    return totalSum / arr.length;
}

console.log(avg(myAverageArray)); */

/* function evenOrOdd(string) {
    if (string.length % 2 === 0) {
        console.log(`The string ${string} has ${string.length} characters, which is an even number`)
    } else {
        console.log(`The string ${string} has ${string.length} characters, which is an odd number`)
    }
}

let checkString1 = evenOrOdd('I wonder what you will get');
let checkString2 = evenOrOdd('I mean, there are only two options right?'); */


/* let checkString1 = 'I wonder what you will get';
let checkString2 = 'I mean, there are only two options right?';

function evenOrOdd(string) {
    if(!string) return "no text";
    if (string.length % 2 === 0) {
        return `The string "${string}" has ${string.length} characters, which is an even number`;
    } else {
        return `The string "${string}" has ${string.length} characters, which is an odd number`;
    }
}

console.log(evenOrOdd(checkString1));
console.log(evenOrOdd(checkString2));
console.log(evenOrOdd()); */
