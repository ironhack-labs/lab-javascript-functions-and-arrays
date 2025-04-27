// Iteration #1: Find the maximum
function maxOfTwoNumbers(x, y) {
if (x > y){
  return(x);
}else if (y < x){
  return(y)
} else {
  return (x,y)//preguntar porque no devuelve (x,y)
}
}
console.log(maxOfTwoNumbers(9,20)) // 20 ya que es mas grande que 9



// Iteration #2: Find longest word!
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (words.length === 0) /*"words.length" muestra el nuemro de ELEMENTOS del array*/ {
    return (null);
  } else if (words.length === 1){
    return (words[0]) // muestra el elemento dentro del array "words" de la posición cero que sería "mystery"
  } 
  let longest = words[0]
  for (let i=1; i<words.length; i++){
    if (words[i].length > longest.length){
      longest = words[i]
    }
  }
    return longest
}
console.log(findLongestWord(words)) // crocodile ya que es la palabra con mas letras o mas larga



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  if (numbers.length === 0){
    return 0;
  } else if (numbers.length === 1){
    return numbers[0];
  } else if ( numbers.length >1){
    let suma = 0 // nueva variable dpmde el bucle incicia a contar la ejecución
    for (let i=0; i<=numbers.length-1; i++)/*Bucle para recorrer una lista*/ {
      suma = suma + numbers [i]
    }
    return suma;
  }
  }
console.log(sumNumbers(numbers)) //87 suma de toda el array



// Iteration #3.1 Bonus: Suma de los elementos de una array con diferentes tipos de datos
const mixArray = [1, "movil", true, 5, "pc", 12,];
function sum(mixArray) {
  let total = 0; // Se crea esta variable para acumular el resultado final

  for (let i = 0; i < mixArray.length; i++)/*Bucle para recorrer la arry, i = indice*/ {
    const value = mixArray[i];
    if (typeof value === "number")/*typeOf para identificar dato*/ {
      total += value; 
    } else if (typeof value === "string") {
      total += value.length; 
    } else if (typeof value === "boolean") {
      total += value ? 1 : 0;
    }else {
      throw new Error (`Tipo de dato no permitido ${i}: ${value}`) // hacemos uso de la palabra reservada THROW para detener la ejecución y anunciar un error
    }
  }
  return total;
}
//En este caso la suma se calcula extrayendo los valores de lo numero, los strings (suma de las letras de cada palabra) y boleanos (true vale 1 y false vale 0)

console.log (sum(mixArray)) // 26 


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0){
    return null;
  } else {
    return sumNumbers (numbersAvg) / numbersAvg.length
  }
}
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr){
  if (wordsArr.length === 0){
    return null;
  }
  let total = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    total += wordsArr[i].length; 
  } 
  const average = total / wordsArr.length;
     return average;
 }

// Bonus - Iteration #4.1: Calcula el promedio pero con una lista con datos diferentes.
function avg(mixArray) {
  if (mixArray.length === 0){
    return null;
  }
  let total = 0;
  for (let i = 0; i < mixArray.length; i++){
    const value = mixArray[i];  
    if (typeof value === "number")/*typeOf para identificar dato*/ {
      total += value; 
    } else if (typeof value === "string") {
      total += value.length; 
    } else if (typeof value === "boolean") {
      total += value ? 1 : 0;
    }
  }
  return total / mixArray.length
}
console.log(avg(mixArray)) // 4,333...




// Iteration #5: Unique arrays; objetivo eliminar los elementos duplicados del array y crear una nueva array sin los elementos repetidos
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

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length === 0){
    return null
  }
  let newArray = []; // declaración de un array vacío para poner los elementos no repetidos de la "wordsunique"

  for (let i = 0; i< wordsUnique.length; i++){
    let word = wordsUnique[i]; 
    if (newArray.includes(word) === false) /* se crea una nueva variable con .include para analizar si esta en la lista (TRUE) o no(FALSE)*/{
      newArray.push(word)/* En caso de que se repita la palabra reservada .push añade el elemento en la nueva array "newArry";*/
    } 
  }
  return newArray;
}

console.log(uniquifyArray(wordsUnique)) // (8) ['crab', 'poison', 'contagious', 'simple', 'bring', 'sharp', 'playground', 'communion']




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, wordToFind)/*se debe poner dos argumentos con el objetivo de indicar que valor "wordtofind"  se ha de buscar el en el array "wordsfind"*/ {
  if (wordsFind.length === 0 ){
    return null;
  } 
  if (wordsFind.includes(wordToFind))/* Es como que se pregunta esta palabra a buscar esta incluida en la lista wordsFind?*/ {
    return true;
  } else {
    return false;
  }
}
console.log(doesWordExist(wordsFind, `cafe`)) // false



// Iteration #7: Count repetition: 
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

function howManyTimes(wordsCount, wordToCount)/*Objetivo contar cuantas veces aparece una palabra en el array*/ {

  if (wordsCount.length === 0) {
    return 0;
  }

  let appearances = 0;

  for (let i = 0; i < wordsCount.length; i++) {
    let word = wordsCount[i];
    if (word === wordToCount) {
      appearances += 1;
    }
  }

  return appearances;
}
console.log(howManyTimes(wordsCount, "matter"))

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

function greatestProduct(matrix)/*calcula el mayor producto de 4 valores de la "matrix"*/ {
  let result = -1; //Esta variable almacenará el mayor producto encontrado durante la iteración de la matriz. Además de que se usa -1 ya que recordemos que la primera pocision es 0
  for (const indexX in matrix) /*los dos bucles for cada valor del eje x e y se va acumulando en las nuevas variable indX e indY */{
    const indX = parseInt (indexX);
    for (const indexY in matrix[indX]){
      const indY = parseInt (indexY);
      const actualRow = matrix[indX]; // calculo del eje horizontal
      const actualAdjacentH = [0, 1, 2, 3] 
      .map ((pos) => actualRow [pos + indY]) // actualRow + map crea un array con los 4 valores de "matrix" aduacente a partir de la posición actual
      .filter (Boolean)
      .reduce ((acc, el) => acc * el); // calculo del producto

      const actualAdjacentY = [0, 1, 2, 3]// calculo del eje vertival
      .map ((pos) => (matrix [pos + indX] ? matrix [pos + indX][indY] : null)) // esta linea verifica si existe elementos
      .filter (Boolean)
      .reduce ((acc, el) => acc * el);

      const maxAdjacent = //momento de comparar entre el calculo horitzontal y vertical cual es el mas grande para guardarlo en la nueva variable "maxAdjacent"
        actualAdjacentH > actualAdjacentY ? actualAdjacentH : actualAdjacentY;
      result = maxAdjacent > result ? maxAdjacent : result; // tras comparar los valores x e y se compara con el valor actual de "result" si es mayor se actualiza "result"
    }
  }
return result;
}
/*los dos bucles for cada valor del eje x e y se va acumulando en las nuevas variable indX e indY 


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
