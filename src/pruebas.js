/*const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
console.log(words[1].length);
function findLongestWord(array) { 
    let longestWord;
  for (let i = 0; i < array.length; i++) {
      if (array[i].length > longestWord.length) { longestWord = array[i];} else { continue;}
    } console.log(longestWord);
  
}
  findLongestWord(words);*/

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(array) {
    let average = sumNumbers(array) / (array.length);
   return(average);
}
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function sumLetters(array) {
    let suma = 0;
for (let i = 0; i < array.length; i++){
    suma += array[i].length;
    } return (suma);
}

function averageWordLength(array) {
    let average2 = sumLetters(array) / (array.length);
   return (average2);
 }

averageWordLength(wordsArr);

function sumLetters(array) {
    let suma = 0;
for (let i = 0; i < array.length; i++){
    suma += array[i].length;
    } return (suma);
}
     



const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(array) {   
    let suma = 0;
for (let i = 0; i < array.length; i++){
    suma += array[i]
    } return(suma);
}







            const wordsUnique = [
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

function uniquifyArray(array) {
    let duplicateWord=[];

    if (array.length === 0) {
        return null;
    } else {
        for (i = 0; i < array.length; i++) {
            if (duplicateWord.includes(array[i])) {
                continue;
            } else {
                duplicateWord.push(array[i]);
            }

        } return (duplicateWord);
    }
}
uniquifyArray(wordsUnique);

const wordsCount = [
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
  'matter'
];

function howManyTimes(array, word) {
    let howMany = [];
    if (array.includes(word) === true) {
        for (i = 0; i < array.length; i++) {
            if (howMany.includes(array[i])) {
                continue;
            }else {
                
            }

        }   console.log (array[i]);
    }
}

howManyTimes(wordsCount, 'matter');

const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(array, word) {
    return (array.includes(word))
}
doesWordExist(words, 'machine');


/*pepe = ['lola', 'maria'];
console.log(pepe.includes('lola'));*/



