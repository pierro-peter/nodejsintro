const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the manager.html file
router.get('/manager', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/manager.html'));
});

module.exports = router;
