console.log("si esya");

// Iteration #1: Find the maximum
function maxOfTwoNumbers(x,y){
  if(x>y){
    return x
  }else if(y>x){
    return y
  }else if(x===y){
    return x , y
  }
}
// // Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(palabras){
  let i = ""
  largoP = palabras.length 
  // console.log(largoP)
  
  if(largoP === 0 ){
    console.log("no hay nada")
    return null
  } 

  palabras.forEach(elemento => {
    if(elemento.length > i.length){
      i = elemento
    }
  })
  return i 
  
}

findLongestWord(words)



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array){
     let suma = 0
     array.forEach(e=>suma+=e)
     return suma         
}

sumNumbers(numbers)

// // Iteration #4: Calculate the average
// // Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arreglo){
  if(arreglo.length === 0){return null}
  let suma = 0
  let promedio = 0 
  arreglo.forEach(e => suma+=e)
  promedio = suma/(arreglo.length)
  return promedio
}

averageNumbers(numbersAvg)

// // Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(palabrasProm){
    if(palabrasProm.length === 0){return null}
    let suma = 0
    let promedio = 0 
    palabrasProm.forEach(e => suma+= e.length)
    promedio = suma/palabrasProm.length
    return promedio
}

const numsConLetras = ['seat', 5 , 8 , 'linen', 17, 'hole', 'smell', 'smart', 'chaos', 10 , 'palace'];


function avg(array){
  if(array.length === 0){return null}
  let suma = 0
  let promedio = 0

  array.forEach(e => {
    if(typeof e === "string"){
      suma += e.length
    } else if(typeof e === "number"){
      suma += e
    }
  })

    promedio = suma/array.length
    return promedio
}

avg(numsConLetras)

avg(numsConLetras)

// // Iteration #5: Unique arrays
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


function uniquifyArray(palabraUnica){
  if(palabraUnica.length === 0){return null}
// palabraUnica.forEach(e=>{
//   let palabra = e
//   e.forEach(e=>{

//   })
// })
let nuevoArray = [...new Set(wordsUnique)]
return nuevoArray
}
// // Iteration #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array,palabra){
  if(array.length === 0){return null}
  if(array.includes(palabra)){
    return true
  }else{
    return false
    }
}

doesWordExist(wordsFind,'machine')

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

function howManyTimes(array, palabra){
  let contador = 0
  
    array.forEach(e => {
        if (e === palabra){
          contador ++
        }
    })
  console.log(`La palabra se repite ${contador} veces `)
  return contador
  }
  howManyTimes(wordsCount,"matter")
