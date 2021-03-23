// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2){
    return num1;
  } else if (num1 < num2){
    return num2;
  } else {
    return num1;
  }
}
console.log(maxOfTwoNumbers(11,10));