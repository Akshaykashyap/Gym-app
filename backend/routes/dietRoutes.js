const express = require('express');
const router = express.Router();
const Diet = require('../models/Diet');

// Get diet by type
router.get('/:type', async (req, res) => {
  try {
    const diet = await Diet.findOne({ type: req.params.type });
    if (diet) {
      res.json(diet);
    } else {
      res.status(404).json({ message: 'Diet not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
