const Exercise = require('../models/Exercise');

const getExercises = async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
};

module.exports = { getExercises };
