//Encontrar el máximo de dos números
function maxOfTwoNumbers(first, second){
  return first > second ? first: second;
}

var largest = maxOfTwoNumbers(2, 6);
console.log(largest);
// 6

//Find longest word
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(arr){
  return arr.sort(function(a, b){
    return b.length - a.length;
  })
}
var longest = findLongestWord(words);
console.log(longest[0]);
// crocodile

//Devolver Suma
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
  return array.reduce(function(a, b){
    return a + b;
  })
}

var total = sumArray(numbers);
console.log(total);
// 87

//Average
var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array){

  var aux = sumArray(numbers);
  return aux/numbers.length;

}

var average = averageNumbers(numbers);
console.log(average);
// 6

//Calculate average letters
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

function averageWordLength(array){

  return array.reduce(function(a, b){
    return a + b;
  });

}
console.log(averageWordLength(words).length/words.length);
var averageLength = averageNumbers(words);
// 5.3

//Remove Duplicates
function uniquifyArray(array){
  // Your code here
}

var words = [
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

var aux = [];

words.forEach(function(e){
  if(aux.indexOf(e) == -1){
    aux.push(e);
  }
});

console.log(aux);
var uniqued = uniquifyArray(words);
console.log(uniqued);
// ["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "communion"]

// Add fuction with 2 parameters first array and second word. Return if exist
var words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

function doesWordExist(elements, word){
  return elements.includes(word);
}
var hasMatter = doesWordExist(words, "matter");
console.log(hasMatter);
// true

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);
// false

// Fuction with 2 arguments, pne array of words and one with word. Return number of times that word appears

var words = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

function howManyTimes(lista, palabra){
  var sum=0;
  if(lista.includes(palabra)){
    console.log("he entrado");
    lista.forEach(function(e){
      if (palabra == e){
        console.log("He sumado");
        sum++;
        console.log("Valor de suma"+sum);
      }
      console.log("Voy a devolver suma: "+sum);
    });
  }
    return sum;
}

var howManyMatter = howManyTimes(words, "matter");
console.log(howManyMatter);
// 4

var howManyDog = howManyTimes(words, "dog");
console.log(howManyDog);
// 0

// BONUS QUEST: Found the mayor product of the 4 adjacent and return the biggest product. //QUEDA ACABARLO
var matrix = [
  [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
];

greatestProduct(myMatrix){
  for(var x=0;x<myMatrix.length;x++){
    for(var y=0;y<myMatrix.length;y++){
      var a=1;
      var b=1;
      var c=1;
      var d=1;
      if(!myMatrix[x-1][y]){
        a= myMatrix[x-1][y];

      }
      if(!myMatrix[x+1][y]){

        b=myMatrix[x+1][y];

      }
      if(!myMatrix[x][y-1]){
        c=myMatrix[x][y-1];

      }
      if(!myMatrix[x][y+1]){
        d=myMatrix[x][y+1];

      }
      var final = a*b*c*d;
    }
  }
}
var maxProduct = greatestProduct(matrix);
console.log(maxProduct);
// => 57,148,146
