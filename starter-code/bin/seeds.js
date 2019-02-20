const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrities');

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Nunnpat',
    occupation: 'Smoothie Star',
    catchphrase: "I'm pretty"
  },
  {
    name: 'Monroe',
    occupation: 'Sandwich Eater',
    catchphrase: "I'm hungry"
  },
  {
    name: 'Henry',
    occupation: 'Unemployed',
    catchphrase: 'Yeah man'
  }
];

Celebrities.create(celebrities);
