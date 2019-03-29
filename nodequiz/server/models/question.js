const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const answerDocument = require('./answer')

let questionSchema = new Schema({
  text: String,
  answers: [
    answerDocument
  ]

})

module.exports = questionSchema;
