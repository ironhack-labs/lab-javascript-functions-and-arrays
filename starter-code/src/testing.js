//testing area with testing html



var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

var sum = 0;
function sumFun(number){
  sum += number;
}
numbers.forEach(sumFun);
console.log(sum);