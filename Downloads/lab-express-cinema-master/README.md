![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Express Cinema

## Introduction

![image](https://user-images.githubusercontent.com/23629340/36983687-49a3d64e-2093-11e8-8b86-b11813f0cdba.png)

We will create a cinema web page, where we will display the showtimes for some movies!

## Requirements

- Fork this repo
- Clone this repo


## Submission

Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.



## Instructions

### Iteration 0 | Initialize the project

After forking and cloning the project, you will have to add a `starter_code/.env` file:

```
PORT=3000
```

And you have to install all the dependencies:


```sh
$ cd starter_code
$ npm install
```

Now you are ready to start 🚀


### Iteration 1 | Seed the database

First, we need to seed our database. Below you will find an array of objects with info for 8 movies. You should create two files:
- `models/Movie.js` for the Movie model
- `bin/seeds.js` file inside the `bin` folder and write the code necessary to seed the database.



```javascript
// To insert in "bin/seeds.js"

const movies = [
  {
    title : "A Wrinkle in Time",
    director: "Ava DuVernay",
    stars: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
    showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
  },
  {
    title : "The Strangers: Prey at Night",
    director: "Johannes Roberts",
    stars: ["Christina Hendricks", "Bailee Madison", "Martin Henderson"],
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    description: "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
    showtimes: ["13:50", "16:20", "19:20", "22:10"]
  },
  {
    title : "The Hurricane Heist",
    director: "Rob Cohen",
    stars: ["Toby Kebbell", "Maggie Grace", "Ryan Kwanten"],
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    description: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
    showtimes: ["13:10", "15:40", "18:20", "20:50", "23:10"]
  },
  {
    title : "Gringo",
    director: "Nash Edgerton",
    stars: ["Joel Edgerton", "Charlize Theron", "David Oyelowo"],
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    description: "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
    showtimes: ["13:40", "15:50", "19:00", "21:20", "23:50"]
  },
  {
    title : "Thoroughbreds",
    director: "Cory Finley",
    stars: ["Anya Taylor-Joy", "Olivia Cooke", "Anton Yelchin"],
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    description: "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
    showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
  },
  {
    title : "The Leisure Seeker",
    director: "Paolo Virzì",
    stars: ["Helen Mirren", "Donald Sutherland", "Janel Moloney"],
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    description: "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
    showtimes: ["13:40", "15:50", "19:00", "21:20", "23:50"]
  },
  {
    title : "Black Panther",
    director: "Ryan Coogler",
    stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    description: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
    showtimes: ["13:50", "16:20", "19:20", "22:10"]
  },
  {
    title : "Red Sparrow",
    director: "Francis Lawrence",
    stars: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts"],
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg",
    description: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
    showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
  }
];
```

### Iteration 2 | The Home Page

We need our home page. Simple and beautiful, on the `index.hbs` create the following home page:

![image](https://user-images.githubusercontent.com/23629340/36986664-acd6af14-209a-11e8-816d-b62417239c53.png)

The `button` should be a link redirecting to the `/movies` route.

### Iteration 3 | List the Movies

On the `/movies` route, we need to list all the movies we have in our database. You should create a `movies.hbs` file, and display a list of all the movies.

![image](https://user-images.githubusercontent.com/23629340/36986832-240fe492-209b-11e8-94de-a7334af41076.png)

### Iteration 4 | Display Movie Info

Finally, you have to create a view to display all the info about each movie. You need a `movie/:id` route, where the user can check all the info about each movie, after clicking on the `See More` button of the `/movies` view.

![image](https://user-images.githubusercontent.com/23629340/36986933-6f8060b4-209b-11e8-8571-496914f9ae96.png)


Happy Coding! :heart:
