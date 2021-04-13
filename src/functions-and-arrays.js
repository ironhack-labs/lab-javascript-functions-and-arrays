// Iteration #1: Find the maximum
/* var NumeroMasGrande = Math.max(488, 154, 365432);
console.log("el numero mas grande es: " + NumeroMasGrande); */

//funcion que dice cual numero es mayor
const maxOfTwoNumbers = (a, b) => {
    if (a > b) {
        return a
    } else if (a < b) {

        return b

    } else {
        return b

    }

}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


//funcion que indica cual palabra tiene mas caracteres
const findLongestWord = (matriz) => {

    let matrizOrdenada = []
    if (matriz.length === 0) {
        return null

    }
    if (matriz.length === 1) {
        console.log(matriz[0]);
        return matriz[0]

    }

    /*  
    let numero = 0

    matriz.forEach(element => {

             if (element.length > numero) {
                 numero = element.length
             }

         });
         console.log(numero); */


    matriz.sort((a, b) => {
        /*  console.log("este es a");
         console.log(a.length);
         console.log("este es b");
         console.log(b.length); */
        return b.length - a.length

    })
    return matriz[0];
}

findLongestWord(words)


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
//Funcion que suma los numeros
const sumNumbers = (numeros) => {

    let suma = 0;

    numeros.forEach(element => {

        suma += element
    });


    return suma;

}

//funcion que transforma todos los parametros de una matriz a number
const sum = (numeros) => {

    if (numeros.length === 0) {
        return 0

    }
    let arreglo = [];
    numeros.forEach(element => {

        if (typeof element === 'string') {

            arreglo.push(element.length);

        } else if (typeof element === 'boolean') {
            if (element === true) {
                arreglo.push(1)
            } else {
                arreglo.push(0)

            }

        } else if (typeof element === 'number') {

            arreglo.push(parseInt(element));

        } else {
            return 'los datos no son compatibles'
        }
    });


    return arreglo;

}

sumNumbers(sum(numbers))



const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

//calcula el promedio de una amtriz
const averageNumbers = (numeros) => {
    if (numeros.length === 0) {
        return null

    }
    let suma;
    let promedio;
    suma = sumNumbers(numeros);

    promedio = suma / numeros.length
    return promedio
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

//calcula el promedio de una matriz de string
const averageWordLength = (string) => {
        if (string.length === 0) {
            return null;

        }

        return averageNumbers(sum(string));

    }
    //calcula el ptromedio de una matriz mixta
function avg(mix) {
    if (mix.length === 0) {
        return null;

    }

    console.log(sum(mix));

    return averageNumbers(sum(mix));

}




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

//para hacer una matriz donde no se repitan valores
const uniquifyArray = (matriz) => {

        if (matriz.length === 0) {
            return null;

        }
        console.log(matriz);
        let matrizUnica = [];

        matriz.forEach((a, index) => {


            if (matriz.indexOf(a) === index) {
                console.log("entro");
                matrizUnica.push(a)
            }



        });
        return matrizUnica;

    }
    // Iteration #6: Find el)ements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
//funcion que busca una palabra en la matriz
const doesWordExist = (matriz, palabra) => {

    if (matriz.length === 0) {
        return null;

    }



    if (matriz.indexOf(palabra) >= 0) {
        return true


    } else if (matriz.indexOf(palabra) < 0) {
        return false
    }




}


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
//funcion que te dice la cantidad de repetidos hay despendiendo de la palabra
const howManyTimes = (matriz, palabra) => {

    if (matriz.length === 0) {
        return 0;

    }
    console.log(matriz);
    console.log(palabra);
    let palabraUnica = [];
    matriz.forEach((a, index) => {
        console.log();

        if (a === palabra) {
            palabraUnica.push(a);
        }
    });
    console.log(palabraUnica.length);


    switch (palabraUnica.length) {
        case 0:

            return 0;

        case 5:
            return 5;

        case 1:

            return 1;

        default:
            break;
    }


}

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

/* const greatestProduct = (matriz) => {
    console.log(matriz);
    let matrizNueva = [];
    matriz.forEach(element => {
        console.log(element);

        element.forEach(prueba => {



        });
    });

} */

//prueba