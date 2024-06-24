// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if (num1 === num2) {
    return num1; // Retorna el valor máximo
  }
}

console.log(maxOfTwoNumbers(30, 10));

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let longestWord = words[0]; // Inicializamos con la primera posición (0) palabra del array

  for (let i = 1; i < words.length; i++) {
    // Recorremos el array desde posición 1 del array
    if (words[i].length > longestWord.length) {
      //Compara la longitud de cada palabra con la longitud de longestWord.
      longestWord = words[i]; // Al final del bucle, longestWord contendrá la palabra más larga.
    }
  }

  return longestWord; // Retorna la palabra más larga
}

console.log(findLongestWord(words));

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let resultSum = 0; //Inicializa la variable resultSum en 0

  for (let i = 0; i < numbers.length; i++) {
    // Utilizamos un bucle for para recorrer cada número del array.
    resultSum += numbers[i]; //  añade el número actual en cada iteración del bucle a totalSum.
  }

  return resultSum; // Nos devuelve la suma total
}
console.log(sumNumbers(numbers));

// Iteration #3.1 Bonus:

const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(mixedArr) {
  let result = 0; // almacenaremos la suma total
  for (let i = 0; i < mixedArr.length; i++) {
    // Recorremos el array
    const x = mixedArr[i]; // Añadimos el valor actual a la nueva constante
    if (typeof x === "string") {
      // Si es de tipo string sumamos su longitud, lo añadimos a la variable result
      result += x.length;
    } else if (typeof x === "number") {
      // Si es de tipo number sumamos su longitud, lo añadimos a la variable result
      result += x;
    } else if (typeof x === "boolean") {
      // Si es de tipo boolean sumamos su longitud, lo añadimos a la variable result
      result += x ? 1 : 0; // Si es True le sumamos 1 / Si es false es 0
    } else {
      // Si mes de otro tipo de valores: Error
      throw new Error("Error message goes here", Error);
    }
  }
  return result; // Retorna el resultado total
}

console.log(sum(mixedArr));

// Iteration #4: Calculate the average
// Level 1:
// 4.1 Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null; // Recibe nulo si recibe matriz vacía.
  }
  const sum = sumNumbers(numbers); // Recibe la suma de los números de la matriz. Hemos reutilizado la función sumNumbers
  return sum / numbers.length; // Devuelve el promedio de los números de la matriz. (Divide el total de la suma de los números de la matriz por la cantidad de números del array)
}
console.log(averageNumbers(numbersAvg));

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) return null;
  let totalLength = 0; // Inicializamos a 0

  for (let i = 0; i < wordsArr.length; i++) {
    // Recorremos el array
    totalLength += wordsArr[i].length; // Sumamos la longitud de cada palabra
  }
  const average = totalLength / wordsArr.length; // Calculamos el promedio (longitud total /)
  return average; // Devolvemos el promedio
}
console.log(
  `El promedio de la longitud de las palabras es: ${averageWordLength(
    wordsArr
  )}`
);

// Bonus - Iteration #4.1
const arr1 = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function avg(arr1) {
  if (arr1.length === 0) return null;
  let sum = 0;
  let countAv = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "number") {
      // Si el elemento es un número añade
      sum += arr1[i];
    } else if (typeof arr1[i] === "boolean") {
      // Si el elemento es un booleano añade
      sum += arr1[i] ? 1 : 0;
    } else if (typeof arr1[i] === "string") {
      // Si el elemento es una cadena añade
      sum += arr1[i].length;
    }
    countAv++;
  }
  const average = sum / countAv; // Promedio de la suma de todos los elementos del array
  return average;
}

console.log(avg(arr1));

// Iteration #5: Unique arrays
const wordsUnique = [
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
  "bring",
];

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length === 0) {
    return null;
  }

  const wordsUnique1 = []; // Creamos array vacio donde almacenaremos las palabras únicas

  for (let i = 0; i < wordsUnique.length; i++) {
    // Recorremos Array

    const word = wordsUnique[i]; // Obtener la palabra actual

    // Verificar si la palabra no está ya en la matriz única
    if (!wordsUnique1.includes(word)) {
      // Verificamos si no está la palabra

      wordsUnique1.push(word); // Si no está la palabra con .push la agregamos
    }
  }

  return wordsUnique1; // Devolver la nueva matriz con palabras únicas
}

const uniqueWords = uniquifyArray(wordsUnique); // Llamar a la función y mostrar el resultado
console.log(uniqueWords);

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordsFind, words_exist_or_no) {
  if (wordsFind.length === 0) {
    return null;
  } else if (wordsFind.includes(words_exist_or_no)) {
    return true;
  } else {
    return false;
  }
}
console.log(doesWordExist(wordsFind, 'machine')); // "machine" existe true
console.log(doesWordExist(wordsFind, 'Hello')); // "Hello" no existe


// Iteration #7: Count repetition
const wordsCount = [
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
  "matter",
];

function howManyTimes(wordsCount, wordTotal) {
  if (wordsCount.length === 0) {
    return 0;
  } 
  let cont = 0;

   for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === wordTotal) {
      cont++;
    }
  }
  return cont;
}

console.log(howManyTimes(wordsCount, 'matter')); 
console.log(howManyTimes(wordsCount, 'starting')); 


// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
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
    greatestProduct,
  };
}
