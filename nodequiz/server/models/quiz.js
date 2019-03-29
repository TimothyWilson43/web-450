const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionDocument = require('./question')

let quizSchema = new Schema({
  name: String,
  questions: [
    questionDocument
  ]

}, {collection: 'Quiz'});

let Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
