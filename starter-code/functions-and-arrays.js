//find the maximum

function maxOfTwoNumbers(first, second){
  if (first > second) {
    console.log(first);
  }
  else if (first < second) {
    console.log(second);
  }
  else {
    var igual = (first || second);
    console.log(igual);
  }
}

var largest = maxOfTwoNumbers(11, 6);

//finding longest word

var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
function longestWord(){
  var largo = 0;
  var longest;
  for (var i = 0; i < words.length -1; i++) {
    if (largo < words[i].length) {
    largo = words[i].length;
    longest = words[i];
    }
  }
  console.log(longest);
}
longestWord();

//Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

var result = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(result);


//Calculate the Average

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

var result = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;

});

console.log(result / numbers.length);
