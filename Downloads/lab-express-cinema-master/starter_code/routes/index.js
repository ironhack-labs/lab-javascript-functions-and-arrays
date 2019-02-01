const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(movies => {
      console.log("hiza", movies)
      res.render('movies', { movies })
    })
    .catch(error => {
      console.log(error)
    })
  });
  
router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movies.findOne({'_id': movieId})
    .then(movie => {
      // console.log('hello', movie)
      // console.log('I\'m the title', movie.title )
      res.render('movie-detail', { movie })
    })
    .catch(error => {
      console.log(error)
    })
  });

module.exports = router;
