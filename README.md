![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Clue (mixing objects and arrays)

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

 This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Run predefined tests in Jasmine to verify that the program meets the technical requirements.
  - Identify expected code behavior by reading and understanding test results and errors.
  - Create objects using the object literal syntax
  - Declare and invoke functions
  - Use the `return` keyword to return a value from a function.
  - Pass arrays to functions as arguments.
  - Access objects stored in arrays,
  - Access object properties using the dot notation and bracket notation
  - Iterate over arrays using the `for` and `forEach` loops.

  <br>
  <hr> 

</details>

## Introduction

Do you remember the classic detective board game Clue? It was a very popular game in the 90s.

The plot starts with the death of Mr. Boddy, the very wealthy owner of Tudor Manor. He was killed under _highly suspicious circumstances_, and the player's mission is to uncover which **suspect** murdered him, what **weapon** was used, and in which **room** of the mansion the crime took place.

When playing Clue, these three details are represented by a **suspect** card, a **weapon** card and a **room** card that are kept hidden in an envelope for the duration of the game. By progressively revealing the remaining cards, the players can infer which are the three cards that are hidden. When a player is confident that they know the solution to the mystery, they will try to reveal it. If a player guesses correctly, they win the game.

<p align="center"><img width="400" src="https://i.imgur.com/AZWieq9.jpg=300"/></p>

## Requirements

- Fork this repo
- Clone this repo

<br>

## Submission

- Upon completion, run the following commands:

```sh
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request so that your TAs can check your work.

<br>


## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on your lab progress. If you want to check the tests, they are in the `tests/clue.spec.js` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## Instructions

You will work in the `src/clue.js` file, already loaded in the `SpecRunner.html` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

<br>

### Iteration 1: Create the cards

Clue has three different _card types_: **suspects**, **rooms**, and **weapons**.

Let's create an `array` for every _card type_. These arrays should be named `suspectsArray`, `weaponsArray`, `roomsArray`.
Each array will contain _objects_, where each _object_ represents one card.

All of the information you need about **suspects**, **rooms**, and **weapons** can be found on the `DATA.md` file.

_Suggestion_: Copy this data into the `clue.js` file and model it into objects nested inside your cards' arrays. This is a great chance for you to experiment with IDE shortcuts, multiple-line selection, find and replace, and other great features that VS Code provides.

<br>

#### Suspects

All of six possible _suspects_ in Clue have a **first name**, **last name**, **occupation**, **age**, **description**, **image** and **color**.

To complete this iteration, you should have an array that looks something like the following:

```javascript
const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur'
    // ...
  }
  // ...
];
```

<br>

#### Weapons

There are a total of nine _weapons_. Each of them has a different **name** and **weight**.

<br>

#### Rooms

The game board represents the blueprints of the mansion and features fifteen different _rooms_. Each room will only have a **name**.

<br>

### Iteration 2: Create the mystery

At the beginning of the game, players shuffle each of the card stacks to create a combination of _suspect_, _weapon_ and _room_. This will be the mystery to solve.

<br>

#### Random selector

Declare a function named `selectRandom` to select one element from a card stack randomly. The function should expect an `array` as an argument and should return a random element from the array.

<br>

#### Create the mystery

Declare a function named `pickMystery` that takes no arguments and returns an object with three properties: _suspect_, _weapon_ and _room_, each holding as a value a card of that specific type. You can get a random card of each type by calling `selectRandom` on each card stack.

<br>

### Iteration 3: Reveal the mystery

At last, we are ready to reveal the mystery.

Declare a function named `revealMystery` that receives an _envelope_ `object` (with the shape of the object returned by `pickMystery`) as the single argument and returns a revealing message in the following format:

**\<FIRST NAME\> \<LAST NAME\> killed Mr. Boddy using the \<WEAPON\> in the \<ROOM\>!**

<br>

## Extra Resources

- [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)
- [20 Mind-blowing facts about Cluedo](http://whatculture.com/offbeat/20-mind-blowing-facts-you-didnt-know-about-cluedo)
- [Cluedo - Wikipedia](https://en.wikipedia.org/wiki/Cluedo)

<br>

**Happy coding!** :heart:

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
  <summary>How do I loop over an array?</summary>
  <br>

  Loops allow you to repeat a block of code a certain number of times. There are several ways to loop over an array in JavaScript:

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

  The initialization is where you declare a counter variable and set its initial value.
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
  <summary>How do you generate a random number in JavaScript?</summary>
  <br>

  To generate a random number using the `Math.random()` method.


  The `Math.random()` method returns a random floating-point (decimal) number in the range between `0` and `0.9999999999999999`. Example:

  ```js
  const randomNumber = Math.random();
  console.log(randomNumber);
  ```

  <br>

  To generate a random integer within a specific range, use the following formula:

  ```js
  const min = 1;
  const max = 10;
  const randomInteger = Math.floor(Math.random() * (max-min + 1)) + min;
  console.log(randomInteger);
  ```

  This will generate a random number that is an integer between 1 and 10 (inclusive).

  For more information, check: [MDN: Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

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
