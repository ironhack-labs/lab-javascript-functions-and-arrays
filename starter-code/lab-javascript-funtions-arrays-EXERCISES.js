//First Iteration

function maxOfTwoNumbers(first, second){
  if (first>second){
  console.log(first);
  }
  else ("");{
  console.log(second);
}
}
maxOfTwoNumbers (2 , 6);

//Second Itaration
// No me sale y no sé por qué: Tengo definida la array words, el siguiente paso veo que sea distinto de cero, obtengo la array válidad distinta de cero, recorro la array y pido que me devuelva el sumatorio partido la longitud y digo que me imprima el resultado de la funcion... pues nada, me sale undefined :(

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

function avg(words) {
  if (words.length === 0 ) {
    return;
  }
  for (var sum=0, i=0; i <= words.length; i++) {
    sum += words[i];
     }
  return sum/words.length;

}
console.log(avg([]));

// Third Itaration
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
var differ = 0;
//¿for(var i=0; esto es una variante de i = 0?
for (i = 0; i <  words.length; i++) {
  if(words[i].length > differ) {
    var differ = words[i].length;
    words = words[i];
  }
}

console.log(words);
//imprime "mistery" cuando es "cocodrile"

//Forth Iteration
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sum(numbers) {
  for (var sum=0, i=0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log (sum(numbers));

//Fifth Iteration

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function sum(numbers) {
  for (var sum=0, i=0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum/numbers.length;
}

console.log (sum(numbers));

//Sixth Iteration

var words = ["crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"];

words = words.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

// Seventh Iterantion
var me = {
  name: "Julio",
  age: 24,
  email: "julio@ironhack.com",
  "role": "Developer",
  age: 30,
  key1: "fooooo",
  changeName: function(newName) {
    this.name = newName
  }
};
