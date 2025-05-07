const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  videoUrl: String,
  uses: String,    
  benefits: String 

});

module.exports = mongoose.model('Exercise', ExerciseSchema);
