// Find the maximum -> Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.
function maxOfTwoNumbers (a,b) {
  if( a> b ){
    return a
  }else if ( b > a) {
    return b
  }else {
    return "Os dois sao do mesmo tamanho"
  }
}
// Finding Longest Word 
//Write a function findLongestWord that takes an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord (array){
    let maior = ""
    array.forEach(function (word) {
        if(word.length > maior.length){
            maior = word
        }
    })
    return maior
}
console.log(findLongestWord(words))
// Calculating a Sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray (array) {
  const reducer = (acumulador, valorAtual) => acumulador + valorAtual;
  return array.reduce(reducer)
}
console.log(sumArray(numbers))
// Calculate the Average

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers (array) {
  let total = sumArray(array)
  return total / array.length
}

console.log(averageNumbers(numbersAvg))
// Array of Strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength (array) {
  const reducer = (acumulador, valorAtual) => {
    if( typeof acumulador == "number"){
      return acumulador + valorAtual.length
    }else {
      return acumulador.length + valorAtual.length
    }
  }
  let tamanhoTotal = array.reduce(reducer)
  return tamanhoTotal / array.length
}
console.log(averageWordLength(wordsArr))

// Unique Arrays
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
function uniquifyArray (array) {
  let index
  let ocorrenciaIndex = 0
  array.forEach ( function (word){
    index = array.indexOf(word)
    while( array.indexOf(word,index + 1) != -1){
      ocorrenciaIndex = array.indexOf(word,index + 1) 
      array.splice(ocorrenciaIndex,1)
    }
  })
  return array
}
console.log(uniquifyArray(wordsUnique))
// Finding Elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];
function doesWordExist (array, wordCompare){
  let exist = false
  array.forEach( (word) => {
    if(word == wordCompare){
      exist = true
    }
  })
  return exist
}
console.log(doesWordExist(wordsFind, 'truth'))
// Counting Repetition
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

function howManyTimes(array,wordCompare){
  let count = 0
  array.forEach( (word) => {
    if(word == wordCompare){
      count += 1
    }
  })
  return count
}
console.log(howManyTimes(wordsCount,'matter'))
// Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];
function greatestProduct(matrix){
  // matrix
  // [1][1] => [0][1] [2][1] [1][0] [1] [2]
}





function greatestProduct2(matrix){
  let produto = 0
  let maiorProdutoLinha = 0
  let indexLinhaMaiorProduto = 0
  let indexInicioProdutoLinha = 0
  let indexFimProdutoLinha = 3
  matrix.forEach( function (linha, indexLinha){
    linha.forEach( function (numero,index,array){
      produto = numero * array[index + 1] * array[index + 2] * array[index + 3]
      if(produto > maiorProdutoLinha){
        maiorProdutoLinha = produto
        indexInicioProdutoLinha = index
        indexFimProdutoLinha = index + 3
        indexLinhaMaiorProduto = indexLinha
      }
    })
  })
  let produtoColuna = 0
  let maiorProdutoColuna = 0
  let indexInicioProdutoColuna = 0
  let indexFimProdutoColuna = 0
  let indexColunaMaiorProduto = 0
  for(let i = 0; i < 17; i+=1){
    for(let j = 0; j < 20; j += 1){
      produtoColuna = matrix[i][j] * matrix[i+ 1][j] * matrix[i + 2][j] * matrix[i + 3][j]

      if(produtoColuna > maiorProdutoColuna){
        maiorProdutoColuna = produtoColuna
        indexInicioProdutoColuna = i;
        indexFimProdutoColuna = i + 3;
        indexColunaMaiorProduto = j;
      }
    }
   
  }
  console.log(`Maior Produto Coluna Encontrado: ${maiorProdutoColuna}, coluna: ${indexColunaMaiorProduto}, inicio: ${indexInicioProdutoColuna}, fim:${indexFimProdutoColuna}`)
  console.log(`Maior Produto Linha Encontrado: ${maiorProdutoLinha}, linha: ${indexLinhaMaiorProduto}, inicio: ${indexInicioProdutoLinha}, fim:${indexFimProdutoLinha}`)
  if( maiorProdutoColuna >= maiorProdutoLinha){
    console.log(`Maior Produto Encontrado: ${maiorProdutoColuna}, coluna: ${indexColunaMaiorProduto}, inicio: ${indexInicioProdutoColuna}, fim:${indexFimProdutoColuna}`)
  }else if (maiorProdutoLinha > maiorProdutoColuna  ){
    console.log(`Maior Produto Encontrado: ${maiorProdutoLinha}, linha: ${indexLinhaMaiorProduto}, inicio: ${indexInicioProdutoLinha}, fim:${indexFimProdutoLinha}`)
  }
}


greatestProduct(matrix)