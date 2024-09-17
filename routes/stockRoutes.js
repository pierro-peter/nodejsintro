const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the stock management page (if needed)
router.get('/stock', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/stock.html'));
});




// Route to serve the stock management page
router.get('/stock', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/stock.html'));
});

// Example of additional routes

// Route to handle stock addition
router.post('/add', (req, res) => {
  // Logic for adding stock
  res.send('Stock added');
});

// Route to handle stock updates
router.put('/update/:id', (req, res) => {
  // Logic for updating stock with a specific id
  res.send(`Stock with ID ${req.params.id} updated`);
});

// Route to handle stock deletion
router.delete('/delete/:id', (req, res) => {
  // Logic for deleting stock with a specific id
  res.send(`Stock with ID ${req.params.id} deleted`);
});


module.exports = router;
