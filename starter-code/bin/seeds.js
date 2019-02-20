const mongoose = require('mongoose');
// const Celebrities = require('../models/Celebrities');
const Movies = require('../models/Movies');

// const dbName = 'Celebrities';
const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: 'Nunnpat',
//     occupation: 'Smoothie Star',
//     catchphrase: "I'm pretty"
//   },
//   {
//     name: 'Monroe',
//     occupation: 'Sandwich Eater',
//     catchphrase: "I'm hungry"
//   },
//   {
//     name: 'Henry',
//     occupation: 'Unemployed',
//     catchphrase: 'Yeah man'
//   }
// ];

// Celebrities.create(celebrities);

const movies = [
  {
    title: "Bird's Eye Chili",
    genre: 'Comedy',
    plot:
      'A pepper eating contest in the sky hits major turbulence when the pilot rubs his eyes'
  },
  {
    title: 'Muy Thai Mother-in-law',
    genre: 'Romantic Comedy',
    plot:
      'A soon-to-be husband has to win over his future mother-in-law emotionally... and physically'
  },
  {
    title: 'The Coolest Boy in the Universe 4400',
    genre: 'Drama',
    plot: 'A very serious period piece about the future'
  }
];

Movies.create(movies);
