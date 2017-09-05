function maxOfTwoNumbers(first,second) {
    if(first > second) {
      return first;
    }
    else
    {
      return second;
    }

}
 var largest=maxOfTwoNumbers(2,6);
 console.log (largest);

 var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

var longest = findLongestWord(words);
console.log(longest);

function findLongestWord(){
  var result = ""
  for(var i=0 ; i<words.length;i++){
    if(words[i].length > result.length) {
      result = words[i];
    }
  }
  return result
}
/*----------------------*/

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
// Your Code here
var sum=0 ;
  for(i=0; i<numbers.length;i++){
    sum = sum+numbers[i];

  }
console.log(sum);
}
var total = sumArray(numbers);
// 87


var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
var sum=0 ;
var counter=0;
  for(i=0; i<numbers.length;i++){
    sum = sum+numbers[i];

counter++;
  }

  console.log(sum)
  var average = sum/counter;
 console.log(average)
}

var total = sumArray(numbers);




/*-------------

var words = [
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
var sum = 0;

function averageWordLength(array){

  for(i=0,j=0;i<words.length,j<words.length;i++,j++){
  // Your code here
  sum=sum+words[i][j];
  }console.log(sum)

}

var averageLength = averageNumbers(words);
console.log(averageLength);
// 5.3

*/
