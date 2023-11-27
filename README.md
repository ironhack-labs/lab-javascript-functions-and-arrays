![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Challenges - Arrays & Functions

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDQ3cjY2bmg5a3ljNG93enZkaTU4dTc4M3N3MzB3NHUyb2Rlazd6MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2reDg2WJtfaPS1t1Ea/source.gif" />
</p>

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Run predefined tests in Jasmine to check that JavaScript program meets the technical requirements.
  - Identify expected code behavior by reading and understanding test results and errors.
  - Pass arrays and primitive values as arguments to functions.
  - Use the `return` keyword to return a value from a function.
  - Access, add, remove, and check for items in an array using the index and array methods (`unshift`, `push`, `splice`, `shift`, `pop`, `indexOf`, and `includes`).
  - Use loops and `forEach` method to iterate over arrays.

  <br>
  <hr> 

</details>

## Introduction

Arrays are an important data structure as they allow us to group related data together. Similarly, functions are as essential as they help us organize our code and make it reusable in the form of blocks of code that can be called multiple times.
In this lab, we are going to continue our journey using arrays and functions. You will work on a set of coding challenges that will help you to solidify your knowledge of arrays and functions.

We will be using the same setup as the previous lab, which includes the Jasmine testing library and a set of predefined tests.

<br>



## Requirements

- Fork this repo
- Clone it to your machine

<br>


## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request and submit your assignment.

<br>



## Automated Testing

This LAB is equipped with [Jasmine](https://jasmine.github.io/) testing library and unit tests to provide automated feedback on your lab progress.

<br>

### Usage

Before starting coding, we will explain the project structure we have provided you:

```
lab-js-challenges-array-function
  ├── README.md
  │
  ├── SpecRunner.html
  │
  ├── jasmine/
  │   └── ...
  │
  ├── src/
  │   └── challenges.js
  │
  └── tests/
      └── challenges.spec.js
```

All the needed Jasmine testing library files from the `jasmine/` folder are already linked with `SpecRunner.html` and everything is set up for you to start coding.

<br>



You should write your code and do all the work in the `src/challenges.js` file.

If you want to check the tests, they are located in the `tests/` folder in the file `tests/challenges.spec.js` file.



<br>


#### Run tests

Running automated tests with Jasmine is super easy. All you need to do is open the `SpecRunner.html` file in your browser using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.
You should see something similar to this:



[![image](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)

<br>



#### Pass the tests

You should write your code on the `src/challenges.js` file.

Take your time to read each iteration instructions carefully and address any *breaking* tests as you progress through the exercise. Before moving on to the next iteration, make sure that all tests for the current iteration are passing.



To see the `console.log` output of your JavaScript code, open the [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>



**Important:** **You don't need to execute the functions yourself**; the tests will automatically do this for you on each test run. All you need to do is make sure the function is declared, that it takes correct parameters, and returns what the instructions and tests ask for.

We provided you with a sample arrays in some iterations, so you can optionaly do some **manual** testing.

<br>



## Instructions

For each iteration, make sure to read the instructions and test descriptions carefully to understand the task requirements. Don't rush. Take your time to read the instructions and test descriptions thoroughly.

<br>




### Iteration 1 | Count Repetition

Declare a function named `howManyTimes` that will take in an *array of words* as the first argument and a *word to search* for as the second argument. The function should return the number of times the word appears in the array.



You can use the following array to test your solution:

```javascript
const repeatedWords = [
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
  "matter"
];
```

<br>



**Example:**

```javascript
howManyTimes(repeatedWords, "matter");
```

**Expected output:**

```javascript
4
```

<br>




### Iteration 2 | Number Sequence

Declare a function named `createSequence`. The function should take one argument: a number (`n`). The function should return an array of numbers in the range from `0` to `n`.

<br>



**Example:**

```javascript
createSequence(7);
```

**Expected output:**

```javascript
[0, 1, 2, 3, 4, 5, 6, 7]
```

<br>




### Iteration 3 | Multiply for Each

Implement the function `multiplyBy` that takes two arguments: an *array of numbers* and a *number* (multiplier). It should return a new array containing each number of the first array multiplied by the multiplier.



**Important:** **You must use the `forEach()` method** in the function to iterate over the array. If you need a refresher on the `forEach()` method, check today's lesson or the following [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).




You can use the following array to test your solution:

```javascript
const numbers = [1, 2, 5, 10, 13, 50];
```

<br>



**Example:**

```javascript
multiplyBy(numbers, 3);
```

**Expected output:**

```javascript
[3, 6, 15, 30, 39, 150]
```

<br>



### Iteration 4 | Filter Out

Declare a function `filterOut`. The function should take two arguments: an *array of strings* (original), and an *array of strings to filter out*.

The function should return a new array that only includes the strings from the original array that are not present in the second array. In other words, you should **remove** all the strings listed in the second array.



You can use the following array to test your solution:

```javascript
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];
```



**Example:**

```javascript
filterOut(original, toRemove);
```

**Expected output:**

```javascript
["fish", "bird", "fish"]
```
<br>



### Iteration 5 | Unique Arrays

Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the Array methods [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) and [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

Do this in the form of a function `uniquifyArray` that receives an array of words as an argument.



You can use the following array to test your solution:

```javascript
const duplicateWords = [
  "crab",
  "poison",
  "contagious",
  "poison",
  "simple",
  "sharp",
  "simple"
];
```

<br>

**Example:**

```javascript
uniquifyArray(duplicateWords);
```

**Expected output:**

```javascript
[
  "crab",
  "poison",
  "contagious",
  "simple",
  "sharp"
]
```

<br>



### Bonus: Iteration 6 | Product of Adjacent Numbers

Given multiple arrays, find the greatest product of four adjacent numbers. 

We consider adjacent any four numbers that are next to each other horizontally or vertically. For example, if we have a 5x5 Matrix like:

```bash
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```

The greatest product will be the `20`x`20`x`20`x`4` = `32000`.

<br>



Declare a function named `greatestProduct(matrix)` to find it in the 20×20 grid below!

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

**Happy coding!** :blue_heart:

<br>

## FAQs

<br>

<details>
  <summary>I am stuck in the exercise and don't know how to solve the problem or where to start.</summary>
  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.


  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 


  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  [Back to top](#faqs)

</details>

<details>
  <summary>All of the Jasmine tests are failing and in red. Why did this happen?</summary>
  <br>

  One possible reason why all of the Jasmine tests are failing is that there is a syntax error in the code being tested. If the code contains a syntax error, it will not be loaded properly and none of the tests will be able to run. This will cause all of the tests to fail.

  To troubleshoot this issue, you will need to examine the code being tested for syntax errors. Look for missing brackets, semicolons, or other syntax issues that could be causing the problem. If you find a syntax error, correct it and try running the tests again.

  Another possibility is that there is an issue with the tests. It is possible that you may have modified the test file and caused an issue. If you have made changes to the test file, try copying and pasting the original test file and running the tests again to see if this resolves the issue.

  [Back to top](#faqs)

</details>

<details>
  <summary>How do you find a length of a string in JavaScript?</summary>
  <br>

  To find the length of a string, use the `length` property. Here is an example:

  ```js
  const str = "Hello, world!"";
  console.log(str.length); // 13
  ```

  The `length` property returns the number of characters in the string, including spaces and special characters.

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I loop over an array?</summary>
  <br>

  Loops allow you to repeat a block of code a certain number of times. There are several ways to loop over an array in JavaScript:

<br>

  #### For loop

  The `for` loop is the most traditional way to loop through an array in JavaScript. It consists of three parts: the *initialization*, the *condition*, and the *increment/decrement*:

  ```js
  const animals = ['cat', 'dog', 'bird'];

  // initialize counter variable (let i = 0)
  // set condition (i < animals.length)
  // increment counter (i++)
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
  ```

  In initialization, you declare a counter variable and set its initial value.

  The condition is a boolean expression that is evaluated before each iteration of the loop. If the condition is `true`, the loop will continue. Once the condition turns `false`, the loop will terminate. 

  The increment/decrement is where you update the counter variable and it happens at the end of each iteration.

  The block of code inside the loop is repeated during each iteration.

<br>

  #### While loop

  The `while` loop is another way to loop through an array in JavaScript. It consists of a condition and a block of code that is executed as long as the condition is `true`.

  Like the `for` loop, the `while` loop requires a counter variable to keep track of the current position in the array. The counter variable must be initialized before the loop and incremented or decremented at the end of each iteration.

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

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I loop over an array using the <code>forEach()</code> method?</summary>
  <br>

  The `forEach()` method executes a provided function once for each array element. It does not return a new array but rather executes the function on each element in the array.

  The syntax of the `forEach()` method is as follows:

  ```js
  array.forEach( function(element) {
    // code to be executed for each element
  });
  ```

  <br>

  Here is an example that uses the `forEach()` method to log each element and its index in an array to the console:

  ```js
  const fruits = ['apple', 'banana', 'cherry'];

  fruits.forEach( function(element, index) {
    console.log(`${index}: ${element}`);
  });
  ```

<br>

  You can also use an arrow function as the callback function for `forEach()`:

  ```js
  fruits.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
  ```

  [Back to top](#faqs)

</details>

<details>
  <summary>What could cause <code>array.length</code> to return <code>undefined</code>?</summary>
  <br>

  If you try to access the `.length` property on an array (e.g., `array.length`) but get `undefined`, it means that the variable you are accessing is not actually an array.

  <br>

  **How do I fix this?** 

  Check that the variable you are trying to access is actually an array.

  [Back to top](#faqs)

</details>

<details>
  <summary>Why is my function returning the last element of the array instead of the longest one?</summary>
  <br>

  Your function might not be correctly checking for the longest element in the array. In other words, there may be an issue with the logic of the conditional statements in the function or with the comparison being used in the conditionals.

  To fix this issue, you should check the logic of the conditional statements in the function.

  [Back to top](#faqs)

</details>

<details>
  <summary>How can I compare the length of each string in an array in JavaScript?</summary>
  <br>


  To compare the length of each string in an array in JavaScript, you can use a loop to iterate through the array and compare the length of each string using the `.length` property.

  Here is an example of how you loop over an array:

  ```js
  function findLongestWord(words) {
    for (let i = 0; i < words.length; i++) {
      console.log(words[i]);
    }
  }
  ```

  <br>

  To compare the length of each element, you should use a conditional statement in the following way:

  ```js
    if ( words[i].length > longestWord.length) {
      console.log(`${words[i].length} is longer than ${longestWord.length}`);
    }
  ```

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>
  <br>

There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:
  ```bash
  git add .
  git commit -m "Your commit message"
  git push
  ```
2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
To check which remote repository you have cloned, run the following terminal command from the project folder:
  ```bash
  git remote -v
  ```
If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first and then clone your fork to your local machine to be able to push the changes.

**Note**: You should make a copy of your local code to avoid losing it in the process.

  [Back to top](#faqs)

</details>
