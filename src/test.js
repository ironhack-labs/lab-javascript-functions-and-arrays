const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
    let sum = 0;
    numArray.forEach(function (el) {
      if (isNaN(el)) {
        throw "Unsupported data type sir or ma'am";
      }
      sum += el
    });
    return sum;
  }

console.log(sumNumbers(["testing"]));
