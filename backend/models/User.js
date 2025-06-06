const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  weight: Number,
  goal: String,
});

module.exports = mongoose.model('User', userSchema);
