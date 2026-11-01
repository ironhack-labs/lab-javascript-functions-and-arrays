// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;// Si num1 no era el mayor, entonces num2 lo es
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArray) {
  if (wordsArray.length === 0) return null;
  let palabraMasLarga = ""; // Aquí guardaremos la ganadora provisional

  // 'palabra' irá cambiando en cada vuelta tomando el valor de cada elemento
  for (const palabra of wordsArray) {
    // Aquí dentro haremos la comparación de tamaños
    // Si la palabra actual mide más que la que teníamos guardada...
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }
  // Al terminar el bucle, devolvemos la palabra que se quedó con el título
  return palabraMasLarga;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
// Si nos pasan un array vacío, la suma de nada es 0
  if (numbersArray.length === 0) return 0;
  let acumulador = 0;// Aquí iremos acumulando los resultados
  
  // 'numero' irá tomando el valor de 6, luego de 12, luego de 1...
  for (const numero of numbersArray){
    acumulador += numero; // Aquí dentro sumaremos
  }
  return acumulador;
  // Al salir del bucle, cuando ya no quedan números, devolvemos el gran total
}



// Iteration #3.1 Bonus:
function sum(mixedArray) {
if (mixedArray.length === 0) return 0;
  let sumaTotal = 0;

  for (const element of mixedArray) {
    if (typeof element === 'number') {
      // Caso 1: Es un número
      sumaTotal += element;
    } 
    else if (typeof element === 'string') {
      // Caso 2: Es un texto -> Sumamos su longitud
      sumaTotal += element.length;
    }
    else if (typeof element === 'boolean') {
      // Caso 3: Es un booleano -> Sumamos 1 si es true, 0 si es false
      sumaTotal += element ? 1 : 0;
    }
    else {
      // Caso 4: Es un array u objeto -> Lanzamos un erro
      throw new Error("Error message goes here");
    }
  }
  return sumaTotal;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
   // 1. Si la matriz está vacía, devolvemos 0 para evitar divisiones por cero
  if (array.length === 0) return null;

  // 2. Encontramos la suma de todos los números
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // 3. Calculamos el promedio dividiendo la suma entre la cantidad de elementos
  return sum / array.length;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {
  // Paso 1: Si la lista de palabras está vacía, devolvemos 0 para evitar fallos
  if (array.length === 0) return null;
  // Paso 2: Crear una variable acumuladora para guardar la suma de todas las letras
  let totalLength = 0;

  // Paso 3: Recorrer el array palabra por palabra con un bucle
  for (let i = 0; i < array.length; i++) {
    // Sumamos al acumulador la longitud (.length) de la palabra actual
    totalLength += array[i].length;
  }
  // Paso 4: Dividir el total de letras entre el número de palabras del array
  const averageLength = totalLength / array.length;

  return averageLength;
}

// Bonus - Iteration #4.1
function avg() {}

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
  'bring'
];

function uniquifyArray(wordsArray) {
  // Caso extremo de Jasmine: Si el array está vacío, devolvemos un array vacío []
  if (wordsArray.length === 0) return null;
  const uniqueWords = [];// Nuestro nuevo montón vacío
  for (const word of wordsArray) {
     // Aquí dentro aplicaremos el truco del .includes()
    // Si el arrayLimpio NO incluye todavía la palabra actual...
     if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);//¡La guardamos de forma segura!
    }
  }
  // Al salir del bucle, devolvemos nuestra nueva lista limpia sin duplicados
  return uniqueWords;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}



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

function howManyTimes() {}



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

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}


if (typeof words, numbers, averageNumbers, averageWordLength !== "undefined") {
 console.log(findLongestWord(words));
  console.log(sumNumbers(numbers));
  console.log(averageNumbers(numbers));
  console.log(averageWordLength(words));
}
