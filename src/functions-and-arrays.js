//Iteration 1

function maxOfTwoNumbers(num1, num2){
  if (num1 > num2){
    console.log('El número más grande es ' + num1)
  }else {
    console.log('El número más grande es ' + num2)
  }
}

maxOfTwoNumbers(6, 9);

//Iteration 2

function findLongestWord(array){
  let word = "";
  for (let i = 0; i < array.length; i++) {
    if (word.length < array[i].length) {
      word = array[i];
    }
  }
  return word;
}

const words = ['mystery', 'brother', 'pristrdew', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']

findLongestWord(words);

//Interation 3

function sumNumbers(array){
  var total =  0;

            for(var i=0;i<array.length;i++)
              {                  
                if(isNaN(array[i])){
                continue;
                 }
                  total += Number(array[i]);
               }
             return total;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]
sumNumbers(numbers);

//Interaction 4
//Level 1
function averageNumbers(array) {
    if (array.length === 0 ) {
        return;
    }
    return sumNumbers(array) / array.length;
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
averageNumbers(numbers2)

//Level 2

function averageWordLength(array){
if (array.length === 0) {
  return undefined
}
var suma = 0;
for(var x = 0; x < array.length; x++){
  suma += array[x].length;
} 
var promedio = suma / array.length;
return promedio
}

const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
averageWordLength(words2);

//Iteration 5

const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];


function uniquifyArray(value, index, self) { 
    return self.indexOf(value) === index;
}

var unique = words3.filter( uniquifyArray ); 
console.info(unique)

//Iteration 6

function doesWordExist (array, term){ 
  for(var i=0; i<array.length; i++) {
    if (array[i] === term) {
      return true
     }
    }
 return false
  }


const words4 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

doesWordExist (words4, 'parrot');

//Iteration 7

function howManyTimes (array, term) {
  var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == term){n++}
    }
    return n;
}

const words5 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
  'disobedience'
];

howManyTimes (words5, 'disobedience');
