const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String
}, {collection: 'users'});

let User = mongoose.model('User', userSchema);

module.exports = User;
