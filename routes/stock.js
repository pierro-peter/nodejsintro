const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the stock management page (if needed)
router.get('/stock', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/stock.html'));
});

//we need more routes here remind me Peter

module.exports = router;
