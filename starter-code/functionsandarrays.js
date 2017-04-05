/*var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers){
  for(var i = 0; i < numbers.length; i++) {
sumOfElements = sumOfElements + averageNumbersnumbers[i]}

var averageSum = (sumOfElements / numberOfElements);
console.log(averageSum);

}

var average = averageNumbers(numbers);
console.log(average);
// 6*/

//-----------------------------------------------------------------------------

/*var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var sumOfElements = 0;

for(var i = 0; i < numbers.length; i++) {
sumOfElements = sumOfElements + numbers[i]}

console.log(sumOfElements);*/
/*var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(myArray){

var sumOfElements = 0;

for(var i = 0; i < myArray.length; i++) {
sumOfElements = sumOfElements + myArray[i]}

return sumOfElements
}

var total = sumArray(numbers);

console.log(total);

var amountOfNumbers = numbers.length;

var finalAverage = total / amountOfNumbers;
console.log(finalAverage);*/

//-----------------------------------------------------------------------------

/*var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function sumArray(myArray){

var sumOfElements = 0;

for(var i = 0; i < myArray.length; i++) {
sumOfElements = sumOfElements + myArray[i]}

return sumOfElements
}

function averageNumbers(myArray){

var amountOfNumbers = myArray.length;
var total = sumArray(myArray);

var finalAverage = total / amountOfNumbers
return  finalAverage;
}

var average = averageNumbers(numbers);
console.log(average);*/

//---------------------------------------------------------------------------

/*var words = [
	"seat",
	"correspond",
	"linen",
	"motif",
	"hole",
	"smell",
	"smart",
	"chaos",
	"fuel",
	"palace"
];

function averageWordLength(myArray){

var sumOfTotalWordLength = 0;

for(var i = 0; i < myArray.length; i++) {
sumOfTotalWordLength = sumOfTotalWordLength + myArray[i].length}

var numberOfElements = myArray.length;

return sumOfTotalWordLength / numberOfElements;

}

console.log(averageWordLength(words));*/

//-----------------------------------------------------------------------------

/*var words = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

function uniquifyArray(myArray){
//create a new array
var newArray = [];
 //Iterate over array. Pick up words one by one and push to the new array.
for(var i = 0; i < myArray.length; i++) {

//Check the word being pushed in if it matches another word; use indexof method. //Condition: if word doesn’t exist then insert (else place word in new array).

if(newArray.indexOf(myArray[i]) === -1) {
 newArray.push(myArray[i]);

}
}
return newArray;
}

console.log(uniquifyArray(words));*/

//-----------------------------------------------------------------------------

/*var words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

//iterate over array.
function doesWordExist(myArray, wordToSearch) {
for(var i = 0; i < myArray.length; i++) {

//check if wordToSearch is equal to array[i] – if none of the elements match, then return false
if(myArray[i] === wordToSearch) {
return true
}
}
return false;
}


var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);
// true

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);
// false*/
