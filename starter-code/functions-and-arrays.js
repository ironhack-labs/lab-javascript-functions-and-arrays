function maxOfTwoNumbers (less,high) {
    return Math.max(2, 6);
}

var largest = maxOfTwoNumbers(2,6);
console.log(largest);



var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
var indexArray = 0;
function findLongestWord (words){
  for(i=0; i<words.length; i++){
    if (words[indexArray].length<words[i].length){
      indexArray=i;
    }
  }
    return words[indexArray];
}
var longest = findLongestWord(words);
console.log(longest);
// crocodile



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function lengthCount (array){
  var total =0;
  for(var i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
}
var iteration1 = lengthCount(numbers1);
console.log("esto vale la llamada a iteraccion 1 "+iteration1);
// 87
//----------------------------------
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(array){
  var result2 = lengthCount(numbers2);
  var average = result2/numbers2.length;
  return average;
}

var average = averageNumbers(numbers2);
console.log(average);
// 6
