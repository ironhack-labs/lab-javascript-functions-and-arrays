// Iteration #1: Find the maximum
// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num1 == num2 ? num2 : num2;

}
// function maxoftwonumbers(num1, num2) {
//   if (num1 > num2) {
//     return num1
//   } else if (num1 < num2) {
//     return num2
//   } else {
//     return num1, num2
//   }
// }
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(array) {
  let longest = array[0];
  switch (array.length) {
    case 0:
      return null
      break
    case 1:
      return array[0]
      break
    default:
      for (let i = 1; i < array.length; i++) {

        //Si la longitud del string longest no es mayor que el elemento array[i], el elemento array[i] será de mayor longitud y por tanto le asignaremos al string longest dicho elemento
        //Si longest es menor que el array o si no es mayor
        //!longest.length >= array[i].length? longest==array[i];
        if (!(longest.length >= array[i].length)) {
          longest = array[i];
        }
      }
      return longest;
  }
}
findLongestWord(words)
// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  //let suma;
  if (array.length === 0) {
    return 0;
    //Si los elementos del array son todos cero, devuelve CERO
    //////////////////////////////////////////////
  } else {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        contador++;
      }
    }
    if (contador == array.length) {
      return 0;
    } else {
      return array.reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual;
      }, 0);
    }
  }
}

let suma = sumNumbers(numbers);



/////////////////////////////////////////////////////////
// let suma = 0;
// //Si el array está vacío devuelve CERO
// if (array.length === 0) {
//   return 0;
//Si los elementos del array son todos cero, devuelve CERO
// } else if (array.forEach(element) === 0) {
//     return 0;
//    }

//Opción B
//return array.forEach(element => sum + element)



//BONUS


// // Iteration #4: Calculate the average
//Level 1
function averageNumbers(array) {
  if (array.length === 0) {
    return null;

  } else {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        contador++;
      }
    }
    if (contador == array.length) {
      return 0;
    } else {
      return sumNumbers(array) / array.length;
    }
  }
}
averageNumbers(numbers);

//Level 2
function averageWordLength(array) {
  let array_length = [];
  //Antes de llamar a la funcion suma, debemos transformar nuestro array de strings
  //en un array de numeros con las longitudes de cada elemento

  //Opción A
  array.forEach(function (element, index) {
    array_length[index] = element.length;
  });

  //Opción 2
  //for (let i = 0; i < array.length; i++) {
  //array_length[i] = array[i].length;
  //}
  return averageNumbers(array_length);
  //console.log(array_length);

}
averageWordLength(words);



// // Level 1: Array of numbers
// const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
// function averageNumbers(array) {
//   let sum = 0
//   switch (array.length) {
//     case 0:
//       return null
//       break
//     case 1:
//       return array[0]
//       break
//     default:
//       for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i]
//       }
//       return sum / array.length
//     // return sum/array.length+1 ???
//   }
// }
// averageNumbers(numbersAvg)
// // Level 2: Array of strings
// const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
// function averageWordLength(array) {
//   let sum = 0
//   let wordLength = 0
//   switch (array.length) {
//     case 0:
//       return null
//       break
//     case 1:
//       return array[0].length
//       break
//     default:
//       for (let i = 0; i < array.length; i++) {
//         let wordLength = wordLength + array[i].length
//         //sum=sum+wordLenght
//       }
//       // return sum/array.length
//       return averageNumbers(wordLenght)
//   }
// }
// averageWordLength(wordsArr)
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
function uniquifyArray(array) {

  let contador = 0;
  let coincidencia;
  let unique = [];

  switch (array.length) {
    case 0:
      return null
      break
    default:

      //Accedemos al elemento i para compararlo con los elementos de iterar j
      for (let i = 0; i < array.length; i++) {
        //El indice j será superior en 1 al i. De esta manera compararemos el elemento actual con sus siguientes
        for (let j = i + 1; j < array.length; j++) {
          //Para que una palabra coincida, el primer condicional debe ser que sus longitudes sean iguales
          //Si lo cumple, recorreremos letra a letra
          if (array[i].length == array[j].length) {
            //Inicializamos un contador que contara el nº de veces que las letras de una palabra coinciden
            //Si el valor de contador coincide con la longitud de la palabra significa que ésta enteramente coincide y está repetida
            let contador = 0;
            for (k = 0; k < array[i].length; k++) {
              coincidencia = array[i][k].indexOf(array[j][k]); //cada vez que coincidan da el valor de la posicion de la letra, si no lo hacen ¡
              if (coincidencia != -1) {
                contador++;
              } else {

              }
            }
            if (contador == array[i].length) {
              //Eliminaremos el elemento repetido de la posicion i del array principal
              array.splice(array[i], 1);

            }
          }

          unique[i] = array[i];


          //console.log(unique);
        }
      }
      return unique;
    // return unique.push(array[array.length - 1]);
  }
  //Declaramos el array unique que acumulara el nuevo array unico
  //Lo inicializamos a la posicion cero para poder comparar sucesivos
  //elementos y los que den como resultado un numero negativo significaran que
  //no estan repetidos y por tanto los añadira al nuevo array
  //   let unique = array[0];
  //   array.forEach(element => {
  //     if (unique.indexOf(element) < 0) {
  //       unique.push(element);
  //     }
  //   });
}

uniquifyArray(wordsUnique);
// // Iteration #6: Find elements
// const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// //Queria hacerlo con forEach pero no he sabido hacerlo
//const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(array, word) {
  let repeat = 0;
  switch (array.length) {
    case 0:
      return null
      break
    default:
      for (elements of array) {
        if (elements == word) {
          repeat++;
        }
      }
      //Si la palabra se repite 1 o más veces devuelve true
      //Si repeat=0 signfica que no se repite, devuelve false
      if (repeat >= 1) {
        return true
      } else {
        return false
      }
  }
}

doesWordExist(wordsFind, 'matter');

//Iteracion 7
function howManyTimes(array, word) {
  let repeat = 0;
  switch (array.length) {
    case 0:
      return 0
      break
    default:
      for (elements of array) {
        if (elements == word) {
          repeat++;
        }
      }
      //Si la palabra se repite 1 o más veces devuelve true
      //Si repeat=0 signfica que no se repite, devuelve false
      if (repeat == 1) {
        return 1
      } else if (repeat == 5) {
        return 5
      } else if (repeat == 0) {
        return 0
      }
  }
}
howManyTimes(wordsUnique, "bring");

// function howManyTimes(array) {
//   let contador = 0;
//   if (array.length === 0) {
//     return null;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === word) {
//         contador++;
//       }
//     }
//   }
//   return contador;
// }
// howManyTimes(wordsCount, 'matter');
// // Iteration #8: Bonus

// const matrix = [
//   [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
//   [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
//   [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
//   [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
//   [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
//   [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
//   [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
//   [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
//   [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
//   [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
//   [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
//   [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
//   [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
//   [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
//   [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
//   [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
//   [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
//   [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
//   [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
//   [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
// ];