const express = require('express');
const Celebrity = require('../models/Celebrities');
const Movie = require('../models/Movies');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  console.log(Celebrity.find());
  Celebrity.find()
    .then(allCelebrities => {
      console.log('celebrities: ', allCelebrities);
      res.render('../views/celebrities/index.hbs', {
        Celebrity: allCelebrities
      });
    })
    .catch(err => console.log(err));
});

router.get('/add', (req, res, next) => {
  res.render('celebrities/new.hbs');
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(theCelebrities => {
      res.render('../views/celebrities/show', { CelebDeats: theCelebrities });
    })
    .catch(err => console.log(err));
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => console.log(err));
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchphrase });
  newCelebrity
    .save()
    .then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log(error);
    });
});

// router.get('/celebrities/edit', (req, res, next) => {
//   Celebrity.findOne({ _id: req.query.book_id })
//     .then(book => {
//       res.render('book-edit', { book });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

router.get('/movies', (req, res, next) => {
  console.log(Movie.find());
  Movie.find()
    .then(allMovies => {
      console.log('movies: ', allMovies);
      res.render('../views/movies/index.hbs', {
        Movie: allMovies
      });
    })
    .catch(err => console.log(err));
});

router.get('/addMovie', (req, res, next) => {
  res.render('movies/new.hbs');
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovies => {
      res.render('../views/movies/show', { movieDeats: theMovies });
    })
    .catch(err => console.log(err));
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => console.log(err));
});

router.post('/movies', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch(error => {
      console.log(error);
    });
});

// router.get('/movies/edit', (req, res, next) => {
//   Movie.findOne({ _id: req.query.book_id })
//     .then(book => {
//       res.render('book-edit', { book });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

module.exports = router;
