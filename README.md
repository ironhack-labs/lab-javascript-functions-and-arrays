![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Clue - Mixing objects and arrays

Do you remember the classic detective board game Clue? It was a very popular game in the 90's.

The plot starts with the death of Mr. Boddy, the very wealthy owner of Tudor Manor. He was killed under _highly suspicious circumstances_, and it's the player's mission to uncover which **suspect** murdered him, what **weapon** was used, and in which **room** of the mansion the crime took place.

When playing Clue, these three details are represented by a **suspect** card, a **weapon** card and a **room** card that are kept hidden in an envelope for the duration of the game. By progressively revealing the remaining cards, the players can infer which are the three cards that are hidden. When a player is confident that they know the solution to the mystery, they will try to reveal it. If a player guesses correctly, they win the game.

<p align="center"><img width="400" src="https://i.imgur.com/AZWieq9.jpg=300"/></p>

## Requirements

- Fork this repo
- Clone this repo
- Visit the "actions" tab in your fork, and enable workflows

## Submission

- Upon completion, run the following commands:

```sh
git add .
git commit -m "done"
git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Remember our tests!

We will be working with automated tests again!

Please, open your terminal, change directories into the root of the lab, and run `npm install` to install the test runner. Now, you can run the `npm run test:watch` command to run automated tests in _watch mode_. Open the resulting `test-report.html` file with the "Live Server" VSCode extension to always see the most up to date test results.

## Instructions

You will be working in the `src/clue.js` file. The test file (`tests/clue.spec.js`) will guide you in solving the following challenges.

### Iteration 1: Create the cards

Clue has three different _card types_: **suspects**, **rooms**, and **weapons**. We will be given the same amount of information for any given card with the same _card type_.

As such, let's create an `array` for every _card type_, that is going contain the _objects_ representing each card. These arrays should be named `suspectsArray`, `weaponsArray`, `roomsArray`.

All of the information you need about **suspects**, **rooms**, and **weapons** can be found on the `DATA.md` file.

_Suggestion_: Copy this data into the `clue.js` file and model it into objects nested inside your cards arrays. This is a great chance for you to experiment with IDE shortcuts, multiple-line selection, find and replace, and other great features that VS Code provides you with.

### Game suspects

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

### Available weapons

There are a total of nine _weapons_. Each of them has a different **name** and **weight**.

### Mansion rooms

The game board represents the blueprints of the mansion and features fifteen different _rooms_. Each room will only have a **name**.

### Iteration 2: Create the mystery

At the beginning of the game, players shuffle each of the card stacks to create a combination of _suspect_, _weapon_ and _room_. This will be the mystery to solve.

#### Random selector

Declare a function named `selectRandom` to randomly select one element from a card stack. The function should expect an `array` as an argument, and should return a random element from the array.

#### Create the mystery

Declare a function named `pickMystery` that takes no arguments and returns an object with three properties: _suspect_, _weapon_ and _room_, each holding as a value a card of that specific type. You can get a random card of each type by calling `selectRandom` on each card stack.

### Iteration 3: Reveal the mystery

At last, we are ready to reveal the mystery.

Declare a function named `revealMystery` that receives an _envelope_ `object` (with the shape of the object returned by `pickMystery`) as the single argument, and returns a reveal message in the following format:

**\<FIRST NAME\> \<LAST NAME\> killed Mr. Boddy using the \<WEAPON\> in the \<ROOM\>!**

## Extra Resources

- [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)
- [20 Mind-blowing facts about Cluedo](http://whatculture.com/offbeat/20-mind-blowing-facts-you-didnt-know-about-cluedo)
- [Cluedo - Wikipedia](https://en.wikipedia.org/wiki/Cluedo)

**Happy coding!** 💙
