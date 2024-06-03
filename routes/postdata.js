const express = require('express')
const router = express.Router()
require('../connection');


// importing model
const RunModel = require('../models/dataschema')
router.post('/postdata', async (req, res) => {
  try {
    const data = new RunModel(req.body);
    // Modify data if needed
    await data.save();
    res.status(201).json({ success: data });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.runID) {
      // Duplicate runID error
      res.status(400).json({ error: 'Duplicate runID. Please choose a different ID.' });
    } else {
      // Other errors
      res.status(500).json({ error: 'Internal server error' });
    }
    console.error(error);
  }
});

  


module.exports = router
