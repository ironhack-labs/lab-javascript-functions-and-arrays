
// MAXIMO DE 2 numeros
function maxOfTwoNumbers(first, second) {
  if (first > second) {
    return first;
  }
  else {
  return second;
  }
}

maxOfTwoNumbers (0,2);

// Longest Word
var words = ["qq", "bbb", "cccc"];

function longestWord (array) {

words.forEach(function(e){
 Math.max (e);
});
}

// Suma
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumaArray (){
    var total=0;
    for (var i=0; i< numeros.length;i++){
    total +=i;
    }
    console.log(total);
}
//sumaArray ();

// Media
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function calcularMedia(){
    var media = 0;
    var total = 0;

    for (var i = 0; i<numeros.length; i++){
      total +=i;
    }

    media = total / numeros.length;
    console.log(media);
}
//calcularMedia();

//Array of strings average length
var words = ["ironhack","alumni","he"];

function avgLength(array){
  var longitud = 0;
  var avg = 0;
  var totalWords = 0;

  array.forEach(function(e){
    longitud += e.length;
    totalWords = words.length;
    avg = longitud / totalWords;
  })
  return avg;
}

//avgLength(words);

//Unique Arrays

var words = ["ironhack","niko","joe","ironhack","hello", "ironhack"];
var uniquewords = [];

function uniquify(array){
  array.forEach(function(e){
    if(uniquewords.indexOf(e) == -1){ //no existe en uniquewords
      uniquewords.push(e);
    }
  });
  return uniquewords;
}

uniquify(words);
