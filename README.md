<p align="center"><img width="250" src="https://i.imgur.com/lMo1s1G.png"/></p>

# JS | Clue - Mixing objects and arrays

Do you remember the classic detective board game Clue? It was a very popular game in the 90's.

The plot starts with the death of Mr. Boddy, the very wealthy owner of Tudor Manor. He was killed under highly suspicious circumstances, and it's the players mission to uncover which **suspect** murdered him, what **weapon** was used, and in which **room** of the mansion the crime took place.

When playing Clue, these three details are represented by a **suspect** card, a **weapon** card and a **room** card that are kept hidden in an envelope for the duration of the game. By progressively revealing the remaining cards, the players can infer which are the three cards that are hidden. When a player is confident that they know the solution to the mystery, they will try to reveal it. If a player guesses correctly, they win the game.

<p align="center"><img width="400" src="https://i.imgur.com/AZWieq9.jpg=300"/></p>

## Deliverables

Write all of your code in the `src/clue.js` file.

Upon completion, commit your changes, push them to your remote fork, and create a pull request so that the TAs can review your submission.

### Remember our tests!

We will be working with automated tests again! Please, open the `SpecRunner.html` in your browser and use it to debug your solution of the Lab.

## Iteration 1 - Creating the cards

Clue has three different _card types_: **suspects**, **rooms**, and **weapons**. We'll be given the same amount of information for any given card with the same _card type_.

As such, lets create an `array` for every _card type_, that is going contain the _objects_ representing each card. These arrays should be named `suspectsArray`, `weaponsArray`, `roomsArray`.

All of the information you need about **suspects**, **rooms**, and **weapons** can be found on the `DATA.md` file.

Suggestion: Copy this data into the `clue.js` file and model it into objects nested inside your card arrays. This is a great chance for you to experiment with IDE shortcuts, multiple-line selection, find and replace, and other great features that VSCode provides you with.

### Game Suspects

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

### Available Weapons

There are a total of nine _weapons_. Each of them has a different **name** and **weight**.

### Mansion Rooms

The game board represents the blueprints of the mansion and features fifteen different _rooms_. Each room will only have a **name**.

## Iteration 2 - Creating the mystery

At the beginning of the game, players shuffle each of the card stacks to create a combination of _suspect_, _weapon_ and _room_. This will be the mystery to solve.

### Random Selector

Declare a function named `selectRandom` to randomly select one element from a card stack. The function should expect an `array` as an argument, and should return a random element from the array.

### Create the mystery

Declare a function named `pickMystery` that takes no arguments and returns an object with three properties, _suspect_, _weapon_ and _room_, each holding as a value a card of that specific type. You can get a random card of each type by calling `selectRandom` on each card stack.

## Iteration 3 - Revealing the mystery

At last, we're ready to unveil the mystery.

<!--
Invoke `pickMystery` and store the returned value into a variable named `mysteryEnvelope`.
-->

Declare a function named `revealMystery` that receives an _envelope_ `object` (such as the one returned by `pickMystery`) as the single argument, and returns a reveal message in the following format:

**\<FIRST NAME\> \<LAST NAME\> killed Mr. Boddy using the \<WEAPON\> in the \<ROOM\>!**

## Extra Resources

- [20 Mind-blowing facts about Cluedo.](http://whatculture.com/offbeat/20-mind-blowing-facts-you-didnt-know-about-cluedo)
- [Wikipedia](https://en.wikipedia.org/wiki/Cluedo)
- [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)

**Happy coding!** 💙
