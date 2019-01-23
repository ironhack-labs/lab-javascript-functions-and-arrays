![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Clue - Mixing objects and arrays

Do you remember de classic detective game?

Clue was a very popular game in the 90's. The plot starts with Mr. Boddy being killed by one of his guests. He was the very rich owner of Tudor Close, who takes the stock character of a generic victim. After his dead, Clue players have to discover who murdered him, with what implement, and where the crime scene took place in his mansion.

Hasbro, the toy maker company and owner of Cluedo, [recently changed](http://www.independent.co.uk/arts-entertainment/cluedo-first-new-character-dr-orchid-mrs-white-dead-1949-hasbro-a7118351.html) some of the characters bio. Use the bio to gather information from the characters.

![Clue Picture](https://i.imgur.com/AZWieq9.jpg=300)

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission Instructions

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

Write your JavaScript in the provided `src/clue.js` file. Submitting this file will be enough.

## Iteration 1 - <small>Creating the cards</small>

Clue has three different types of cards: *suspects*, *rooms*, and *weapons*. These three types of cards are always separated. Use data structures to model and create these cards.

In order to do this, you will need to know the game's characters (possible killers), available weapons and house rooms.

### Game Characters

This Clue board game has a new roster of playable characters. All of them have first names, last names, occupations, age, description, and images. On the `clue.js` file you will find all the info about them. 

### Available Weapons

There are nine weapons. Each of them has different weight, same as the characters, you will find all the info needed on the `clue.js` file.

### House Rooms

The game board represents the blueprints of a mansion and features fifteen different rooms. Yes, you guess, on the `clue.js` file you have all the info.

### Data Structuring

Create one data structure for each of the people, weapons, and rooms described above. Each document must have all the info.

After creating the data structure, create an array for each type of data and push every document into their corresponding array.

For example:

```javascript
var mrGreen = {
  // Properties
};

var rope = {
  // Properties
}

// etc
```

After creating the data structure, push every document into their corresponding array. `charactersArray`, `weaponsArray`, `roomsArray`.

## Iteration 2 - <small>Creating the mistery</small>

At the beginning of the game, players shuffle each one of the card stacks to create a combination of *suspect*, *weapon* and *room*. This will be the mystery to solve.

### Remember our tests!

We will be working with test again! You need to open the `SpecRunner.html` file in order to see them. The following instructions will guide you through all the methods and functionality your code should have to pass all the tests.

### Random Selector 
Create a method `randomSelector` to randomly select one element from a card stack. The method should receive an `array` as an argument, and return randomly one of the elements of the `array`.

### Create the mystery

We need to create a `pickMistery` method that will call `randomSelector` for each card stack, and return an array with the 3 picked cards, a character, a weapon and a room. Our mystery should be stored on a `misteryEnvelope` variable.

## Iteration 3 - <small>Revealing the mistery</small>

Finally, we need to reveal the mystery. Create a `revealMistery` method, that will receive our `misteryEnvelope` array as an argument and return the revealed mystery like this: 

**\<FIRST NAME\> \<LAST NAME\> killed Mr.Boddy using the \<WEAPON\> in the \<PLACE\>!!!!**

## Extra Resources

- [20 Mind-blowing facts about Cluedo.](http://whatculture.com/offbeat/20-mind-blowing-facts-you-didnt-know-about-cluedo)
- [Wikipedia](https://en.wikipedia.org/wiki/Cluedo)
- [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)