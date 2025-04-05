// Iteration #1: Find the maximum

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

let resultado1 = maxOfTwoNumbers(10, 20);
console.log(resultado1);

let resultado2 = maxOfTwoNumbers(20, 10);
console.log(resultado2);

let resultado3 = maxOfTwoNumbers(20, 20);
console.log(resultado3);

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
  // La condición de null tiene que estar fuera del bucle
  // Esta condición es una medida de seguridad. El array no debería estar vacío, pero a veces puede suceder un fallo en algún lado y que haya un array vacío sin querer. Esta línea es un bloqueo para evitar que haya un error, una forma de prevenir fallos.
  // (words): longitud del array; (words[i]): longitud de la palabra
  if (words.length === 0) {
    return null;
  }
  let longestWord = "";

  // Empieza el bucle para ver la longitud de cada palabra de la lista
  for (let i = 0; i < words.length; i++) {
    // Si la palabra de esta vuelta (words[i].length) es MÁS LARGA que que la variable longestWord, actualizamos longestWord (i)
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord(words));

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sumNumbers(numbers));

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// 1º: se suman los elementos del array
function sumNumbers(numbersAvg) {
  return numbersAvg.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(sumNumbers(numbersAvg));

// 2º: se divide la suma entre el número de elementos del array
function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0) {
    return null;
  }
  const sum = sumNumbers(numbersAvg);
  const average = sum / numbersAvg.length;
  return average;
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
  if (wordsArr.length === 0) {
    return null;
  }

  // Aquí estamos sumando las longitudes de las palabras
  const totalLength = wordsArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.length,
    0
  );

  // Aquí se calcula el average dividiendo la suma total de las longitudes de las palabras (totalLength) entre el nº de palabras (wordsArr.length)
  return totalLength / wordsArr.length;
}

console.log(averageWordLength(wordsArr));

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

function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  // Se crea un array vacío para almacenar los valores únicos
  let uniqueArr = [];

  // Con el bucle, vamos por cada elemento del array (arr). Para cada elemento, se verifica si ya existe en el array de valores únicos (uniqueArr) utilizando includes(). Si no existe, se añade con push()
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
console.log(uniquifyArray(wordsUnique));

//Otra forma: [...new] significa nuevo, crea un nuevo array. Para una copia de algo que ya existe: [Set(arr)], apunta al array que ya existe.
//return [...new Set(arr)];
//console.log(uniquifyArray(wordsUnique));

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

// 2 argumentos en la función: el array y la palabra que se busca en el array
function doesWordExist(arr, word) {
  if (!word) {
    return null;
  }
  // Miramos si la palabra existe (=está incluida) en el array
  return arr.includes(word);
}

console.log(doesWordExist(wordsFind, "matter"));
console.log(doesWordExist(wordsFind, "flower"));

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

// Devolver 0 si el array está vacío
function howManyTimes(repeatArr, searchWord) {
  if (repeatArr.length === 0) {
    return 0;
  }

  // Si la palabra coincide con searchWord, el contador sube
  let count = 0;
  repeatArr.forEach((word) => {
    if (word === searchWord) {
      count++;
    }
  });

  if (count === 0) {
    return 0; // Devuelve 0 si la palabra no está en el array
  } else if (count === 1) {
    return 1; // Devuelve 1 si la palabra está solo una vez en el array
  } else if (count === 5) {
    return 5; // Devuelve 5 si la palabra está 5 veces en el array
  }

  return count;
}

console.log(howManyTimes(wordsCount, "matter"));
console.log(howManyTimes(wordsCount, "flower"));

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
