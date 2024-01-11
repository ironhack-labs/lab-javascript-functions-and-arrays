![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Functions & Arrays

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Run predefined tests in Jasmine to check that the JavaScript program meets the technical requirements.
  - Identify expected code behavior by reading and understanding test results and errors.
  - Create and invoke functions in JavaScript.
  - Pass arrays and primitive values as arguments to functions.
  - Use the `return` keyword to return a value from a function.
  - Access, add, remove, and check for items in an array using the index and array methods (`unshift`, `push`, `splice`, `shift`, `pop`, `indexOf`, and `includes`).
  - Use conditional statements and loops in a function.

  <br>
  <hr> 

</details>

## Introduction

Array manipulation is a common task in programming. Whether you are calculating a total for a shopping cart, grabbing only the first names from a list of people, or moving a piece on a chessboard, you are probably modifying or manipulating an array somewhere in the code.
<br>



## Requirements

- Fork this repo
- Clone it to your machine

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request and submit your assignment.



## Automated Testing Introduction

### What is automated testing?

Automated software testing is the process of programmatically executing an application to validate and verify that it meets the business needs, as well as the technical requirements, and that it behaves as expected.

Testing should be viewed as a continuous process, not a discrete operation or single activity in the development lifecycle. Designing tests at the beginning of the product lifecycle can mitigate common issues that arise when developing complex code bases.

Having a strong *test suite* can provide you with ease of mind since you will be able to confidently improve upon your work while knowing that your not breaking a previously developed feature.
<br>



### Testing labs

This lab and some labs you will work on during the bootcamp are equipped with unit tests to provide automated feedback on your lab progress.
<br>



### Testing with Jasmine

Jasmine is an automated testing framework for JavaScript. It is designed to be used in Behavior-driven Development (**BDD**) programming, focusing more on the business value than the technical details.

We have already included Jasmine in the project you just forked, so let's see how to use it to implement our code.
<br>



### Usage

Before starting coding, we will explain the project structure we have provided you:

```
lab-js-functions-and-arrays
  ├── README.md
  │
  ├── SpecRunner.html
  │
  ├── jasmine/
  │   └── ...
  │
  ├── src/
  │   └── functions-and-arrays.js
  │
  └── tests/
      └── functions-and-arrays.spec.js
```

All the needed Jasmine testing library files from the `jasmine/` folder are already linked with `SpecRunner.html` and everything is set up for you to start coding.

<br>



You should write your code and do all the work in the `src/functions-and-arrays.js` file.

If you want to check the tests, they are located in the `tests/` folder in the file `tests/functions-and-arrays.spec.js` file.



<br>


#### Run tests

Running automated tests with Jasmine is super easy. All you need to do is open the `SpecRunner.html` file in your browser using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension. You should see something similar to this:



[![image](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)



#### Pass the tests

You should write your code on the `src/functions-and-arrays.js` file. While following the instructions for each iteration, you should check every test and ensure it's *passing*, before moving on.

Do not rush. You should take your time to read every iteration carefully and address the *breaking* tests as you progress through the exercise.

When coding with tests, it is super important that you carefully read and understand the errors you are getting. This way, you will know what's expected from your code.

To see the output of your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

**Important:** Note that **you don't need to execute the functions yourself**; the tests will automatically load and execute the functions on each test run. All you need to do is declare the functions, ensure they handle the parameters passed and return what is indicated in the iteration instructions and the test description. We provide you with a sample array for some iterations, so you can do some **manual** testing if you wish.

<br>



## Instructions

While following the instructions for each iteration, carefully read the instructions and test descriptions to understand the task requirements fully. Do not rush. It would be best if you took your time to read every iteration carefully.

<br>

### Iteration 1 | Find the Maximum

Implement the function `maxOfTwoNumbers` that takes two numbers as arguments and returns the bigger number.

<br>



### Iteration 2 | Find the Longest Word

Implement the function `findLongestWord` that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

You can use the following array to test your solution:

```javascript
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
```

<br>



### Iteration 3 | Sum Numbers

Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named `sumNumbers` that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the `reduce` array method, making your work significantly easier. For now, let's practice _the "declarative"_ way of adding values using loops.

You can use the following array to test your solution:

```javascript
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

<br>



### Iteration 4 | Numbers Average

Calculating an average is a prevalent task. So let's practice it a bit.

**The logic behind this:**

1. Find the sum as we did in the first exercise (or how about reusing the function `sumNumbers()`?)
2. Divide that sum by the number of elements in the array.

<br>



Implement the function `averageNumbers` that expects an array of numbers and returns the average of the numbers.

You can use the following array to test your solution:

```javascript
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
```
<br>



### Iteration 5 | Find Element

Let's create a simple array search.

Declare a function named `doesWordExist` that will take in an *array of words* as one argument and a *word to search* for as the other. Return `true` if the word exists in the array; otherwise, return `false`.
<br>

The function should return `null` if an empty array is passed as an argument.



You can use the following array to test your solution:

```javascript
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
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
