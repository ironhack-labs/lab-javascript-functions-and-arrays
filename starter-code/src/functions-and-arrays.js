// Iteration #1: Find the maximum
let num1 = 9;
let num2 = 5;
function maxOfTwoNumbers (num1,num2) {
if (num1 > num2) {
  console.log (`${num1} é maior que ${num2}`)
  return num1;
} else if(num2 > num1){
  console.log (`${num2} é maior que ${num1}`)
  return num2;
} else {

return (num1,num2);

}


}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot','kkkkkkk'];
// cons words = [3,6,8,4,2,1];

function findLongestWord (words){
let sizeOfTheBiggestWord = 0; // Variavel responsável por guardar o tamanho de cada uma das palavras do Array!
let biggestWord = ""; // Variável responsável por guardar a palavra que apresenta o maior número de caracteres!
  if(words.length == 0){
    return null;
  } else if(words.length == 1){

    return words[0];

  } 
  for (let i = 0; i < words.length; i++) {  // For responsável por varrer cada uma das posições do array.
    let p = 0;
    if(words[i].length > sizeOfTheBiggestWord){
      // Condicional responsável por determinar se o valor temporariamente exposto em len é maior que o valor guardado definitivamente em x.

      let len = words[i].length // len é o display do contador guardando temporariamente o numero de letras de cada palavra.
        p += 1;
        sizeOfTheBiggestWord = len  // "Função" responsável por guardar o valor resultante da condicional exposto temporariamente em len na variável x.
        biggestWord = words[i] // "Função" responsavel por guardar em y a palavra que neste momento tem o maior numero de letras no array.
    }
} 
  return biggestWord;
}
findLongestWord(words); // Executa a função findLonguestWord utilizando o array "word" como parâmetro.

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numArray) => { 
  let aux = 0; //variavel auxiliar responsavel de fazer a soma
  numArray.forEach(element => { //forEach para passar em cada elemento para somar
    aux += element
  })
  return aux 
};
sumNumbers (numbers)


const mixArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10,["a","b","c","d"]];

const sum = (arr) => {
 let aux = 0; //variavel auxiliar responsavel de fazer a soma
 arr.forEach (element => {
   if (typeof element == "object"){ //para verificar se element for object e retornar erro
    //  throw new Error("Unsupported data type sir or ma'am");
   } else if (typeof element == "string") { // para verificar e somar se element for string
    aux += element.length
  } else if (element == true) { // para verificar e somar se element for boolean
    aux++
  } else if (typeof element == "number") {
    aux += element //para somar se element for number
  }
})
return aux;
}
sum(mixArr)

// Iteration #4: Calculate the average

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (array) => {
  if(array.length == 0){ //para verificar se o array é 0 e retornar null
    return null
  }
  let aux = 0; //variavel auxiliar responsavel de fazer a soma
  array.forEach(element => { //forEach para passar em cada elemento para somar
    aux += element; //soma de todos os elementos do array
  })
  aux /= array.length; //dividir a soma por o length para resultar a media
  return aux;
}

averageNumbers(numbersAvg)

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const averageWordLength = (arr) => {
  if(arr.length == 0){ //para verificar se o array é 0 e retornar null
    return null
  }
  let aux = 0; 
  arr.forEach(element => {
    aux += element.split("").length //para separar e somar cada letra das palavras no array
  })
  aux /= arr.length //para fazer a media
  return aux;
}
// averageWordLenght(wordsArr)

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg (arr){
 let aux = 0; //variavel auxiliar responsavel de fazer a soma
  if(arr.length == 0){ //para verificar se o array é 0 e retornar null
    return null
  }
 arr.forEach (element => {
  if (typeof element == "string") { // para verificar e somar se element for string
    aux += element.length
  } else if (element == true) { // para verificar e somar se element for boolean
    aux++
  } else if (typeof element == "number") {
    aux += element //para somar se element for number
  }
})
aux /= arr.length; //para fazer a media do array
return +aux.toFixed(2); //para transformar em duas casa decimais e o + para fazer com que o elemento seja número ja que o toFixed o transforma em string
}
avg(mixedArr)
console.log(avg(mixedArr))



// Iteration #5: Unique arrays
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
  'bring',
];

const uniquifyArray = ( arr  ) => {
  let newArr = [];
  if(arr.length == 0){ //para verificar se o array é 0 e retornar null
    return null
  }
  arr.forEach( (element, index) => {
    if (arr.indexOf(element, index+1) == -1){ // para verificar se o elemento se encontra no array além do primeiro encontrado, mais de uma vez, se for -1 não está duplicado
      newArr.push(element) // para fazer um novo array com os elementos que não estão duplicados
    }else{
      newArr.push( element ) //para colocar os elementos dupliacados no array também
      arr.splice(arr.indexOf(element, index+1),1) //para eliminar os elementos duplicados
    }
  })
  console.log(newArr)
  return newArr;
}
uniquifyArray(wordsUnique);

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const doesWordExist = (arr, word) => {
  if(arr.length == 0){ //para verificar se o array é 0 e retornar null
    return null
  } 
  let status = false //variável auxiliar
  arr.forEach((element) => {
    if (element == word){ //para verificar se o elemento é igual ao parametro passado na função
      status = true // se sim o status muda para true
    }
  })
  return status;
}
doesWordExist(wordsFind, "machine");

// Iteration #7: Count repetition
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

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
