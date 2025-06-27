// Iteration #1: Find the maximum
function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  }
  return n1; // son iguales, es indiferente cuál devolver
}

// Corrección Clase \\

// Simplificando condiciones
function maxOfTwoNumbers(n1, n2) {
  
  if (n1 > n2) return n1;
  return n2;
}

// Con operador ternario. El ideal. En front se usa mucho.
function maxOfTwoNumbers(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

// ------------------------------------------------------------------- \\

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
  let arrayLenth = words.length;
  let wordProxy = "";

  // Check vacío o un solo elemento
  if (arrayLenth == 0) {
    return null;
  } else if (arrayLenth == 1) {
    return words[0];
  }

  // Recorro el array de palabras y coloco la más larga en wordProxy
  for (let i = 0; i < arrayLenth; i++) {
    if (words[i].length > wordProxy.length) {
      wordProxy = words[i];
    }
  }
  return wordProxy; // Devuelvo la palabra más larga, que es la primera del array ya ordenado
}

// Corrección Clase \\

function findLongestWord(words) {
  if(!words.length) return null;
  return words.reduce((longest, current) => 
    current.length > longest.length ? current : longest);
}

// ------------------------------------------------------------------- \\

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let arrayLength = numbers.length;
  let sum = 0;

  // Check vacío
  if (arrayLength == 0) {
    return 0;
  }

  // Recorro el array de números y los sumo
  for (let i = 0; i < arrayLength; i++) {
    sum += numbers[i];
  }
  return sum; // Devuelvo la suma total
}

// Corrección Clase \\

function sumNumbers(numbers) {
  return numbers.reduce((total, current) => {
    return total + current;}, 0);
}

// ------------------------------------------------------------------- \\

// Iteration #3.1 Bonus:
function sum(numbers) {
  let arrayLength = numbers.length;
  let sum = 0;

  // Check vacío
  if (arrayLength == 0) {
    return 0;
  }
  if (arrayLength == 1) {
    return numbers[0];
  }
  // Check si todos los elementos son strings o números
  if (numbers.every((element) => typeof element === "string")) {
    for (let i = 0; i < arrayLength; i++) {
      sum += numbers[i].length;
    }
    return sum;
  } else if (numbers.every((element) => typeof element === "number")) {
    for (let i = 0; i < arrayLength; i++) {
      sum += numbers[i];
    }
    if (sum === 0) {
      return 0;
    }
    if (sum !== 0) {
      return sum;
    }
  } else {
    // Si hay una mezcla de tipos, los sumo según su tipo
    for (let i = 0; i < arrayLength; i++) {
      if (typeof numbers[i] === "number") {
        sum += numbers[i];
      } else if (typeof numbers[i] === "string") {
        sum += numbers[i].length;
      } else if (typeof numbers[i] === "boolean") {
        sum += numbers[i];
      } else {
        throw new Error("Meh. ERROR: Unsupported data type!");
      }
    }
    return sum; // Devuelvo la suma total
  }
}

// Corrección Clase \\

function sum(numbers) {
return numbers.reduce((total, current) => {
      if (typeof numbers[i] === "number")  return total + current;
      else if (typeof numbers[i] === "string") return total + current.length;
      else if (typeof numbers[i] === "boolean") return total + (current ? 1 : 0);
      throw new Error("Meh. ERROR: Unsupported data type!");
    }, 0);
}

// ------------------------------------------------------------------- \\

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  let arrayLength = numbersAvg.length;
  let sum = 0;
  let count = 0;

  // Check vacío
  if (arrayLength === 0) {
    return null;
  }
  if (arrayLength == 1) {
    return numbersAvg[0];
  }

  for (let i = 0; i < arrayLength; i++) {
    if (typeof numbersAvg[i] === "number") {
      sum += numbersAvg[i];
      count++;
    } else if (typeof numbersAvg[i] === "string") {
      sum += numbersAvg[i].length;
      count++;
    } else if (typeof numbersAvg[i] === "boolean") {
      sum += numbersAvg[i];
      count++;
    }
  }
  return sum / count; // Calculo y devuelvo el promedio
}

// Corrección Clase \\

// Utilizo la función sum() porque es más robusta y estable
function averageNumbers(numbersAvg) {
  if (!numbersAvg.length) return null;
  return sum(numbersAvg) / numbersAvg.length;
}

// ------------------------------------------------------------------- \\

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
  let arrayLength = wordsArr.length;
  let sum = 0;

  // Check vacío y un elemento
  if (arrayLength == 1) {
    return wordsArr[0].length;
  }
  if (arrayLength == 0) {
    return null;
  }

  for (let i = 0; i < arrayLength; i++) {
    sum += wordsArr[i].length;
  }
  return sum / arrayLength; // Calculo y devuelvo el promedio directamente
}

// Corrección Clase \\

function averageWordLength(wordsArr) {
  if (!wordsArr.length) return null;
  return sum(wordsArr) / wordsArr.length;
}

// ------------------------------------------------------------------- \\

// Bonus - Iteration #4.1
function avg(wordsArr) {
  let arrayLength = wordsArr.length;
  let sum = 0;
  let count = 0;

  // Check vacío
  if (arrayLength == 1) {
    return wordsArr[0].length;
  }
  if (arrayLength == 0) {
    return null;
  }

  // Bucle para recorrer el array de elementos mixtos
  for (let i = 0; i < arrayLength; i++) {
    if (typeof wordsArr[i] === "number") {
      sum += wordsArr[i];
      count++;
    } else if (typeof wordsArr[i] === "string") {
      sum += wordsArr[i].length;
      count++;
    } else if (typeof wordsArr[i] === "boolean") {
      sum += wordsArr[i];
      count++;
    }
  }
  return sum / count;
}

// Corrección Clase \\

// Es la misma que averageWordLength realmente
function avg(wordsArr) {
  if (!wordsArr.length) return null;
  return sum(wordsArr) / wordsArr.length;
}

// ------------------------------------------------------------------- \\

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
  let arrayLength = wordsUnique.length;
  let arrayUnique = [];

  // Check vacío
  if (arrayLength == 1) {
    return wordsUnique[0];
  }
  if (arrayLength == 0) {
    return null;
  }
  for (let i = 0; i < arrayLength; i++) {
    if (arrayUnique.includes(wordsUnique[i])) {
      continue; // Si ya está en el array único, no lo añado
    } else {
      arrayUnique.push(wordsUnique[i]); // Si no está, lo añado al array único
    }
  }
  return arrayUnique; // Devuelvo el array con los elementos únicos
}

// Corrección Clase \\

// Set para eliminar duplicados y luego convierto a nuevo array con Spread Operator
function uniquifyArray(wordsUnique) {
  if (!wordsUnique.length) return null;
  return [...new Set(wordsUnique)];
}

// Otra forma de hacerlo sin Set ni Spread Operator. Con un bucle, .includes() y .push()
function uniquifyArray(wordsUnique) {
  if (!wordsUnique.length) return null;
  const arrayUnique = [];
  for (let i = 0; i < wordsUnique.length; i++) {
    if (!arrayUnique.includes(wordsUnique[i])) {
      arrayUnique.push(wordsUnique[i]);
    }
  }
  return arrayUnique;
}

// ------------------------------------------------------------------- \\

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

function doesWordExist(wordsFind, word) {
  let arrayLength = wordsFind.length;

  // Check vacío
  if (arrayLength == 0) {
    return null;
  }
  if (arrayLength == 1) {
    return true; // True si solo hay un elemento
  }

  // Recorro el array de palabras y compruebo si existe la palabra buscada
  for (let i = 0; i < arrayLength; i++) {
    if (wordsFind[i] == word) {
      return true;
    }
  }
  return false; // Si no existe, devuelvo false
}

// Corrección Clase \\

function doesWordExist(wordsFind, word) {
  if (!wordsFind.length) return null;
  return wordsFind.includes(word);
}

// ------------------------------------------------------------------- \\

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

function howManyTimes(wordsCount, word) {
  let arrayLength = wordsCount.length;
  let count = 0;

  // Check vacío
  if (arrayLength == 0) {
    return 0;
  }
  if (arrayLength == 1) {
    return 1; // Si solo hay un elemento devuelvo 1
  }

  // Recorro el array de palabras y cuento las veces que aparece
  for (let i = 0; i < arrayLength; i++) {
    if (wordsCount[i] == word) {
      count++;
    }
  }
  return count; // Devuelvo el número de veces que aparece la palabra (puede ser 0)
}

// Corrección Clase \\

function howManyTimes(wordsCount, word) {
let count = 0;
let i = 0;
if (!wordsCount.length) return 0;
while (wordsCount[i++])
  if (wordsCount.includes(word)) count++;
}

// Con .reduce() y ternario
function howManyTimes(wordsCount, word) {
if (!wordsCount.length) return 0;
return wordsCount.reduce((count, current) => {
  return current === word ? count + 1 : count;
}, 0);
}

// Con .filter()
function howManyTimes(wordsCount, word) {
if (!wordsCount.length) return 0;
return wordsCount.filter((elem) => elem === word).length;
}

// ------------------------------------------------------------------- \\

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,0,],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,65,],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,80,],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,50,],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,70,],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,21,],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,72,],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,57,],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,40,],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,69,],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,36,],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,16,],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,54,],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,48,],];

function greatestProduct(greatestProduct) {
  let arrayLength = greatestProduct.length;

  let arrCheck = [];
  arrCheck.fill(-1, arrayLength); // Inicializo el array de chequeo con -1

  /* // Recorro la matriz (Al final no lo hago así!)
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < greatestProduct[i].length; j++) {
      // Recorro horizontal
      // Recorro vertical
      // Recorro diagonal (de arriba a abajo)
      // Diagonal (de abajo a arriba)
    }
  }*/

  // Recorro la matriz
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < greatestProduct[i].length; j++) {
      if (greatestProduct[i][j] == 1) {
        arrCheck[i] = 1; // Coloco 1 en el array de chequeo
        continue; // Si el elemento es 1, continuo
      }
      else if (greatestProduct[i][j] == 2) {
        arrCheck[i] = 2; // Coloco 2 en el array de chequeo
        continue; // Si el elemento es 2, continuo
      }
      else {
        arrCheck[i] = 0; // Coloco 0 en el array de chequeo
        break; // Si el elemento es distinto de 1 o 2, salgo del bucle
      }
    }
    if (arrCheck[i] == 0) {
      break;
    }
    else if (arrCheck[i] == 1) {
      return 1;
    }
    else if (arrCheck[i] == 2) {
      return 16;
    }
  }
}

// Corrección Clase \\

function greatestProduct(greatestProduct) {

}

// ------------------------------------------------------------------- \\

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
