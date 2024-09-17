const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the signup.html file
router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '..//'));
});

module.exports = router;
