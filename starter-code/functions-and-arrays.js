function maxOfTwoNumbers(first, second){
  if (first > second){
  return first
  }
  else{
    return second
  }
}

var largest = maxOfTwoNumbers(2, 6);
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

function longWord (cow){
  var arrayOfLengths = [];
  cow.forEach(function(word){
  arrayOfLengths.push(word.length);
  arrayOfLengths.sort('').reverse('');

 });
  console.log(arrayOfLengths[0])

  for (i=0; i < words.length; i++) {
    if (words[i].length === arrayOfLengths[0]) {
      console.log(words[i]);
    }
  }
}

longWord(words);





var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]


function sumArray(array){
var total = 0;
    for(var i = 0; i < array.length; i++){
      total += array[i];
    }
  return total;
}

var result = sumArray(numbers);
console.log(result);
