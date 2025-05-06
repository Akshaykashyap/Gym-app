const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
  type: String, // 'veg' or 'non-veg'
  plan: String,
});

module.exports = mongoose.model('Diet', dietSchema);
