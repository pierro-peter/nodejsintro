const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the sales agent management page (if needed)
router.get('/sales-agent', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/sales-agent.html'));
});

//More routes here too

module.exports = router;
