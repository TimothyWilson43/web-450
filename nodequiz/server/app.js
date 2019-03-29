/**
 * Dependency libraries
 * @type {createApplication}
 */
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const createError = require('http-errors');
const config = require('./config');

let User = require('./models/user');
let Quiz = require('./models/quiz')

/**
 * MongoDB setup
 */
mongoose.connect('mongodb://' + config.database.username + ':'
  + config.database.password + '@'
  + config.database.url + ':'
  + config.database.port + '/'
  + config.database.name, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
  .then(() => console.debug('Connection to the MongoDB instance was successful'))
  .catch((err) => console.debug('MongoDB Error: ' + err.message));

let app = express();

/**
 * Express using statements
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

/**
 * Configure Express to serve the Angular application as static HTML/JavaScript
 */
app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

app.post('/api/user', function(req, res, next) {
  User.findOne({'id': req.body.id}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      return res.json(user);
    }
  })
})

app.get('/api/quiz', function(req, res, next) {
  Quiz.find({}, 'name', function(err, quiz){
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quiz);
      return res.json(quiz);
    }
  })
})

http.createServer(app).listen(config.web.port, function() {
  console.log('Application started and listening on port ' + config.web.port + '!');
});
