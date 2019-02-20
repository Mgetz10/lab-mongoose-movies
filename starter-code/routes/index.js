const express = require('express');
const Celebrity = require('../models/Celebrities');
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
    .then(theCelebrities => {
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

module.exports = router;
