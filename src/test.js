// The greatest product will be the 20x20x20x4 = 32000.

const matrix1 = [
  [ 1,  2, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1,  4, 3, 4, 5],
];

//declaro un array con 4 posiciones para almacenar los 4 num mas grandes
let cuatroMax = new Array(4);

//etngo que encontrar las posciones que tienen numeros a los lados
// EL BUCLE TIENE QUE IR DE LA POSICION 1 A UNO MENOS DEL FINAL DEL BUCLE, 
// si quiero acceder al elemento con valor 1, debo hacer: matriz [0][0], si quiero acceder al elemenbto con valor 2, debo hacer: matriz [0][1]
// YA QUE LA POSICION FINAL Y LA PRIMERA NO TIENEN ADYACENTES
let numeroM =0;
console.log(`la matriz tiene ${matrix1.length}elementos`);
for( let i = 0; i< matrix1.length; i++){
  //hago la seleccion de numeros mas grandes de el primer elemento de la 
  // matriz
  console.log("entro por el primer for");
  console.log(matrix1[i]);
  for ( let k = 0; k < matrix1.length; k++){
    console.log("entro por el segundo for");
    console.log(matrix1[i][k]);
  }
  
};
console.log(matrix1[0]);

// yo se que esto tiene 5 elementos y si repito el for 5 veces
// tendre los numeros + grandes de todos los elementos COMO LO HAGO
// PARA NO HACERLO MANUAL Y HACERLO POR BUCLE

// for (let i= 0; i < matrix1.length, i++){
//   for (let j = 1; matrix1[i].length-1; j++){
// }

// }
//ahora quiero que me compruebe los numeros que saca para saber cual es
// mas grande y meterlo en el array, una vez tengo los numeros mas grandes
// cojo solo 4 de los que tengo


// for (let i = 0; i < matrix.length; i++){
//   for (let j = 0; j < matrix.length; j++){
//     if (matrix1[i][j] > matrix1 [i][j+1]){
//       cuatroPos.push.matrix[i][j];
//     }
//   }
// }