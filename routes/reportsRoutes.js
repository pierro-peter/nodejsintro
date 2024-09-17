const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the reports page (if needed)
router.get('/reports', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/reports.html'));
});

// You can add more routes related to reports here

module.exports = router;
