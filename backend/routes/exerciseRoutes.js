// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const Exercise = require('../models/Exercise');

// const router = express.Router();

// // Configure multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });
// const upload = multer({ storage });

// // POST new exercise
// router.post('/', upload.single('image'), async (req, res) => {
//   const { name, description } = req.body;
//   const imageUrl = req.file ? req.file.path : '';

//   try {
//     const newExercise = new Exercise({ name, description, imageUrl });
//     await newExercise.save();
//     res.status(201).json(newExercise);
//   } catch (err) {
//     res.status(500).json({ error: 'Could not add exercise' });
//   }
// });

// // GET all exercises
// router.get('/', async (req, res) => {
//   try {
//     const exercises = await Exercise.find();
//     res.json(exercises);
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching exercises' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');
const multer = require('multer');
const path = require('path');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Create a new exercise
router.post('/', upload.single('image'), async (req, res) => {
  const { name, description } = req.body;
  const imageUrl = req.file ? `uploads/${req.file.filename}` : '';

  try {
    const newExercise = new Exercise({ name, description, imageUrl });
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add exercise', details: err });
  }
});

// Get all exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exercises' });
  }
});

module.exports = router;
