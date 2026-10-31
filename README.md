![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Funciones y arrays en JavaScript

<details>
  <summary>
   <h2>Objetivos de aprendizaje</h2>
  </summary>

  Este ejercicio te permite practicar y aplicar los conceptos y las técnicas que se han enseñado en clase.

  Al completar este ejercicio, podrás:

  - Ejecutar pruebas predefinidas en Jasmine para comprobar que el programa cumple los requisitos técnicos.
  - Identificar el comportamiento esperado del código leyendo y comprendiendo los resultados de las pruebas y los errores.
  - Declarar e invocar funciones mediante declaraciones de función, expresiones de función y funciones flecha.
  - Usar la palabra clave `return` para devolver un valor desde una función.
  - Pasar valores primitivos como argumentos a las funciones.
  - Pasar arrays como argumentos a las funciones.
  - Acceder a los elementos almacenados en los arrays mediante sus índices.
  - Añadir, eliminar y comprobar la presencia de elementos en un array mediante el índice y los métodos de array (`unshift`, `push`, `splice`, `shift`, `pop`, `indexOf` e `includes`).
  - Recorrer arrays mediante `for` y `forEach`.

  <br>
  <hr>

</details>

## Introducción

Manipular arrays es una tarea habitual en programación. Tanto si calculas el total de un carrito de la compra como si extraes solo los nombres de una lista de personas o mueves una pieza en un tablero de ajedrez, probablemente estés modificando o manipulando un array en alguna parte del código.
<br>

## Requisitos

- Haz un fork de este repositorio.
- Clónalo en tu equipo.

## Entrega

- Al terminar, ejecuta los siguientes comandos:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Crea una pull request para que tus asistentes de enseñanza puedan revisar tu trabajo.

## Introducción a las pruebas automatizadas

### ¿Qué son las pruebas automatizadas?

Las pruebas automatizadas de software consisten en ejecutar una aplicación mediante código para validar y comprobar que satisface las necesidades del negocio y los requisitos técnicos, y que se comporta como se espera.

Las pruebas deben considerarse un proceso continuo, no una operación aislada ni una actividad puntual del ciclo de desarrollo. Diseñar pruebas al principio del ciclo de vida del producto puede reducir los problemas habituales que surgen al desarrollar bases de código complejas.

Contar con un buen *conjunto de pruebas* te da tranquilidad, ya que podrás mejorar tu trabajo con la confianza de que no estás rompiendo una funcionalidad desarrollada previamente.
<br>

### Pruebas en los laboratorios

Este laboratorio y algunos de los que realizarás durante el bootcamp incluyen pruebas unitarias que te proporcionarán información automática sobre tu progreso.
<br>

### Pruebas con Jasmine

Jasmine es un framework de pruebas automatizadas para JavaScript. Está diseñado para utilizarse en el desarrollo guiado por el comportamiento (**BDD**), que se centra más en el valor para el negocio que en los detalles técnicos.

Ya hemos incluido Jasmine en el proyecto del que acabas de hacer un fork, así que vamos a ver cómo utilizarlo para implementar nuestro código.
<br>

### Uso

Antes de empezar a programar, explicaremos la estructura del proyecto que te hemos proporcionado:

```
lab-js-functions-and-arrays
  ├── README.md
  ├── SpecRunner.html
  ├── jasmine
  │   └── ...
  ├── src
  │   └── functions-and-arrays.js
  └── tests
      └── functions-and-arrays.spec.js
```

Trabajaremos en `src/functions-and-arrays.js`. En la carpeta `jasmine` encontrarás todos los archivos necesarios para utilizar Jasmine. Todos estos archivos ya están enlazados con el archivo `SpecRunner.html`.

Si quieres consultar las pruebas, están en el archivo `tests/functions-and-arrays.spec.js`.

#### Ejecutar las pruebas

Ejecutar pruebas automatizadas con Jasmine es muy fácil. Solo tienes que abrir el archivo `SpecRunner.html` en tu navegador. Verás algo parecido a esto:

[![imagen](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)

#### Superar las pruebas

Debes escribir tu código en el archivo `src/functions-and-arrays.js`. Mientras sigues las instrucciones de cada iteración, revisa cada prueba y asegúrate de que se *supera* antes de continuar.

No tengas prisa. Dedica tiempo a leer cada iteración con atención y a resolver las pruebas que *fallan* a medida que avanzas en el ejercicio.

Cuando programas con pruebas, es muy importante leer con atención y comprender los errores que aparecen. Así sabrás qué se espera de tu código.

Para ver la salida de tu código JavaScript, abre la [consola de las herramientas para desarrolladores](https://developer.chrome.com/docs/devtools/open/#console).

**Importante:** Ten en cuenta que **no necesitas ejecutar las funciones por tu cuenta**; las pruebas cargarán y ejecutarán las funciones automáticamente cada vez que se ejecuten. Solo tienes que declarar las funciones, asegurarte de que gestionan los parámetros recibidos y de que devuelven lo indicado en las instrucciones de la iteración y en la descripción de la prueba. En algunas iteraciones te proporcionamos un array de ejemplo para que puedas hacer pruebas **manuales** si lo deseas.

## Instrucciones

Al seguir las instrucciones de cada iteración, lee con atención tanto las instrucciones como las descripciones de las pruebas para comprender todos los requisitos de la tarea. No tengas prisa. Dedica tiempo a leer cada iteración con cuidado.

<br>

### Iteración n.º 1: Encontrar el máximo

Implementa la función `maxOfTwoNumbers`, que recibe dos números como argumentos y devuelve el mayor.

<br>

### Iteración n.º 2: Encontrar la palabra más larga

Implementa la función `findLongestWord`, que recibe como argumento un array de palabras y devuelve la más larga. Si hay dos con la misma longitud, debe devolver la primera que aparezca.

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
```

<br>

### Iteración n.º 3: Calcular la suma

#### Iteración n.º 3.1: Sumar números

Calcular una suma puede ser tan sencillo como recorrer un array y sumar todos sus elementos.

Implementa la función `sumNumbers`, que recibe un array de números como argumento y devuelve la suma de todos los números del array. Más adelante en el curso aprenderemos a hacerlo con el método `reduce` de los arrays, que facilitará mucho el trabajo. Por ahora, practiquemos la forma _«declarativa»_ de sumar valores utilizando bucles.

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

<br>

#### Extra - Iteración n.º 3.2: Una función `sum()` genérica

En la iteración 3 creaste una función que devuelve la suma de un array de números. Pero ¿qué ocurre si queremos calcular la suma de las longitudes de las palabras de un array? ¿Y si también incluye valores _booleanos_? Para conseguirlo, debemos crear una función que permita esta flexibilidad.

En esta iteración debes implementar la función `sum()`. La función debe recibir un array con valores de distintos tipos: números, cadenas de texto y booleanos. Debe sumar las longitudes de todas las cadenas, los valores numéricos y los valores numéricos de los booleanos, y devolver la suma total.

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57
```

Nota: Tu función solo debe aceptar un array con números, cadenas de texto o booleanos. Si el array contiene otro tipo de dato, como un objeto, debes [lanzar un error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw). En JavaScript, la sintaxis para lanzar un error es la siguiente:

```javascript
throw new Error("Error message goes here");
```

Al escribir el mensaje de error, explica el problema de forma concreta y descriptiva.

<br>

### Iteración n.º 4: Calcular la media

Calcular una media es una tarea muy habitual. Vamos a practicarla un poco.

**La lógica es la siguiente:**

1. Calcula la suma como hicimos en el primer ejercicio (¿o qué tal si reutilizas la función `sumNumbers()`?).
2. Divide esa suma entre el número de elementos del array.

<br>

#### Iteración n.º 4.1: Array de números

Implementa la función `averageNumbers`, que recibe un array de números y devuelve su media.

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
```

<br>

#### Iteración n.º 4.2: Array de cadenas de texto

Implementa la función `averageWordLength`, que recibe como único argumento un array de palabras y devuelve la longitud media de las palabras:

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
```

<br>

#### Extra - Iteración n.º 4.3: Una función `avg()` genérica

Crea la función `avg(arr)`, que recibe un array con valores de distintos tipos y calcula la media. Por ejemplo, considera un array que contenga números, cadenas de texto y/o booleanos.

Los valores no numéricos deben contabilizarse así:

- Booleanos: `true` cuenta como `1` y `false` como `0`.
- Cadenas de texto: utiliza su longitud (`length`) como valor numérico.

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7
```

<br>

### Iteración n.º 5: Arrays sin duplicados

Toma el siguiente array, elimina los duplicados y devuelve un nuevo array. Seguramente te interese consultar los métodos de array [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) e [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

Hazlo mediante una función `uniquifyArray` que reciba un array de palabras como argumento.

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const words = [
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
```

<br>

### Iteración n.º 6: Encontrar elementos

Vamos a crear una búsqueda sencilla en un array.

Declara una función llamada `doesWordExist` que reciba un array de palabras como argumento y una *palabra que buscar* como otro argumento. Devuelve `true` si la palabra existe en el array; en caso contrario, devuelve `false`.

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
```

<br>

### Iteración n.º 7: Contar repeticiones

Declara una función llamada `howManyTimes` que reciba un array de palabras como primer argumento y una palabra que buscar como segundo argumento. La función devolverá el número de veces que esa palabra aparece en el array.

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const words = [
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
```

<br>

### Extra - Iteración n.º 8

#### Extra - Iteración n.º 8.1: Producto de números adyacentes

Dados varios arrays, encuentra el mayor producto de cuatro números adyacentes.

Consideramos adyacentes cuatro números que estén uno junto a otro en horizontal o en vertical. Por ejemplo, si tenemos una matriz de 5 × 5 como esta:

```bash
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```

El mayor producto será `20` × `20` × `20` × `4` = `32000`.

<br>

¡Declara una función llamada `greatestProduct(matrix)` para encontrarlo en la siguiente cuadrícula de 20 × 20!

```javascript
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
```

<br>

#### Extra - Iteración n.º 8.2: Producto de diagonales

Siguiendo la lógica que has utilizado en la iteración n.º 8.1, declara una función llamada `greatestProductOfDiagonals(matrix)`. Recibe una matriz como parámetro y devuelve el mayor producto de cuatro valores consecutivos situados en diagonal, en cualquiera de las dos direcciones.

<br>

**¡A programar!** :heart:

<br>

## Preguntas frecuentes

<br>

<details>
  <summary>Me he atascado en el ejercicio y no sé cómo resolver el problema ni por dónde empezar.</summary>
  <br>

  Si te has atascado con tu código y no sabes cómo resolver el problema ni por dónde empezar, da un paso atrás e intenta formular una pregunta clara sobre la dificultad concreta que tienes. Esto te ayudará a delimitar el problema y a pensar en posibles soluciones.

  Por ejemplo, ¿hay algún concepto que no entiendes o recibes un mensaje de error que no sabes cómo solucionar? Suele ser útil intentar describir el problema con la mayor claridad posible, incluyendo los mensajes de error que recibes. Esto puede ayudarte a explicar el problema a otras personas y a obtener ayuda de tus compañeros o de recursos en línea.

  Una vez que comprendas claramente el problema, podrás empezar a trabajar en la solución.

  [Volver al inicio](#preguntas-frecuentes)

</details>

<details>
  <summary>Todas las pruebas de Jasmine fallan y aparecen en rojo. ¿Por qué ocurre?</summary>
  <br>

  Una posible razón por la que todas las pruebas de Jasmine fallan es que haya un error de sintaxis en el código que se está probando. Si el código contiene un error de sintaxis, no se cargará correctamente y no podrá ejecutarse ninguna prueba. Esto hará que todas fallen.

  Para solucionar este problema, revisa el código en busca de errores de sintaxis. Busca corchetes o llaves sin cerrar, puntos y coma que falten u otros errores de sintaxis que puedan estar causando el problema. Si encuentras alguno, corrígelo y vuelve a ejecutar las pruebas.

  Otra posibilidad es que haya un problema en las pruebas. Puede que hayas modificado el archivo de pruebas y provocado un fallo. Si has hecho cambios en ese archivo, prueba a copiar y pegar el archivo de pruebas original y vuelve a ejecutarlas para comprobar si se resuelve el problema.

  [Volver al inicio](#preguntas-frecuentes)

</details>

<details>
  <summary>¿Cómo se obtiene la longitud de una cadena de texto en JavaScript?</summary>
  <br>

  Para obtener la longitud de una cadena de texto, utiliza la propiedad `length`. Aquí tienes un ejemplo:

  ```js
  const str = "Hello, world!"";
  console.log(str.length); // 13
  ```

  La propiedad `length` devuelve el número de caracteres de la cadena, incluidos los espacios y los caracteres especiales.

  [Volver al inicio](#preguntas-frecuentes)

</details>

<details>
  <summary>¿Cómo recorro un array?</summary>
  <br>

  Los bucles permiten repetir un bloque de código un número determinado de veces. Hay varias formas de recorrer un array en JavaScript:

<br>

  #### Bucle for

  El bucle `for` es la forma más tradicional de recorrer un array en JavaScript. Consta de tres partes: la *inicialización*, la *condición* y el *incremento/decremento*:

  ```js
  const animals = ['cat', 'dog', 'bird'];

  // initialize counter variable (let i = 0)
  // set condition (i < animals.length)
  // increment counter (i++)
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
  ```

  En la inicialización, declaras una variable que actúa como contador y estableces su valor inicial.

  La condición es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la condición es `true`, el bucle continúa. Cuando pasa a ser `false`, el bucle termina.

  En el incremento/decremento se actualiza la variable contador, al final de cada iteración.

  El bloque de código dentro del bucle se repite en cada iteración.

<br>

  #### Bucle while

  El bucle `while` es otra forma de recorrer un array en JavaScript. Consta de una condición y un bloque de código que se ejecuta mientras la condición sea `true`.

  Al igual que el bucle `for`, el bucle `while` necesita una variable contador para llevar el seguimiento de la posición actual en el array. Esta variable debe inicializarse antes del bucle e incrementarse o decrementarse al final de cada iteración.

  ```js
  const animals = ['cat', 'dog', 'bird'];

  // initialize a counter variable (i)
  let i = 0;

  // set condition (i < animals.length)
  while (i < animals.length) {
    console.log(animals[i]);
    
    // increment counter (i++)
    i++;
  }
  ```

  [Volver al inicio](#preguntas-frecuentes)

</details>

<details>
  <summary>¿Cómo recorro un array utilizando el método <code>forEach()</code>?</summary>
  <br>

  El método `forEach()` ejecuta una función proporcionada una vez por cada elemento del array. No devuelve un nuevo array, sino que ejecuta la función sobre cada uno de sus elementos.

  La sintaxis del método `forEach()` es la siguiente:

  ```js
  array.forEach( function(element) {
    // code to be executed for each element
  });
  ```

  <br>

  Aquí tienes un ejemplo que utiliza el método `forEach()` para mostrar en la consola cada elemento de un array y su índice:

  ```js
  const fruits = ['apple', 'banana', 'cherry'];

  fruits.forEach( function(element, index) {
    console.log(`${index}: ${element}`);
  });
  ```

<br>

  También puedes utilizar una función flecha como función de callback de `forEach()`:

  ```js
  fruits.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
  ```

  [Volver al inicio](#preguntas-frecuentes)

</details>

<details>
  <summary>¿Qué puede hacer que <code>array.length</code> devuelva <code>undefined</code>?</summary>
  <br>

  Si intentas acceder a la propiedad `.length` de un array (por ejemplo, `array.length`) y obtienes `undefined`, significa que la variable a la que estás accediendo no es realmente un array.

  <br>

  **¿Cómo lo soluciono?**

  Comprueba que la variable a la que intentas acceder sea realmente un array.

  [Volver al inicio](#preguntas-frecuentes)

</details>

<details>
  <summary>¿Por qué mi función devuelve el último elemento del array en lugar del más largo?</summary>
  <br>

  Es posible que tu función no esté comprobando correctamente cuál es el elemento más largo del array. Es decir, puede haber un problema en la lógica de las sentencias condicionales de la función o en la comparación utilizada en ellas.

  Para resolverlo, revisa la lógica de las sentencias condicionales de la función.

  [Volver al inicio](#preguntas-frecuentes)

</details>

<details>
  <summary>¿Cómo puedo comparar la longitud de cada palabra de un array en JavaScript?</summary>
  <br>

  Para comparar la longitud de cada palabra de un array en JavaScript, puedes utilizar un bucle que recorra el array y comparar la longitud de cada elemento mediante la propiedad `.length`.

  Aquí tienes un ejemplo de cómo recorrer un array:

  ```js
  function findLongestWord(words) {
    for (let i = 0; i < words.length; i++) {
      console.log(words[i]);
    }
  }
  ```

  <br>

  Para comparar la longitud de cada elemento, debes utilizar una sentencia condicional de la siguiente forma:

  ```js
    if ( words[i].length > longestWord.length) {
      console.log(`${words[i].length} is longer than ${longestWord.length}`);
    }
  ```

  [Volver al inicio](#preguntas-frecuentes)

</details>

<details>
  <summary>No puedo subir cambios al repositorio. ¿Qué debo hacer?</summary>
  <br>

Hay varios motivos por los que podrías no poder subir cambios (*push*) a un repositorio Git:

1. **No has creado un commit con tus cambios:** Antes de subir los cambios al repositorio, debes guardarlos en un commit con el comando `git commit`. Asegúrate de haberlo hecho y vuelve a intentar subirlos. Para ello, ejecuta los siguientes comandos en la terminal desde la carpeta del proyecto:

  ```bash
  git add .
  git commit -m "Your commit message"
  git push
  ```

2. **No tienes permiso para subir cambios al repositorio:** Si has clonado directamente el repositorio principal de Ironhack sin hacer antes un *fork*, no tienes acceso de escritura al repositorio.

Para comprobar qué repositorio remoto has clonado, ejecuta el siguiente comando en la terminal desde la carpeta del proyecto:

  ```bash
  git remote -v
  ```

Si el enlace mostrado coincide con el del repositorio principal de Ironhack, primero tendrás que hacer un fork del repositorio en tu cuenta de GitHub y después clonar ese fork en tu equipo para poder subir los cambios.

**Nota:** Haz una copia de tu código local para evitar perderlo durante el proceso.

  [Volver al inicio](#preguntas-frecuentes)

</details>
