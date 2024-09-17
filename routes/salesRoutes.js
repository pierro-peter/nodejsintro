// Importing necessary modules
const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Change this to your preferred port

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route for the sales management page
app.get('/sales', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sales.html'));
});

// Route to handle recording a sale
app.post('/api/record-sale', (req, res) => {
  const { produceName, tonnage, amountPaid, buyerName, salesAgent } = req.body;
  // Process and store the sale record (e.g., save to database)
  console.log(`Sale Recorded: ${produceName}, ${tonnage}kg, ${amountPaid}Ugx, ${buyerName}, ${salesAgent}`);
  
  // Respond with success message or status
  res.json({ success: true, message: 'Sale recorded successfully!' });
});

// Route to fetch sales records (for table display)
app.get('/api/sales-records', (req, res) => {
  // Retrieve sales records from database or in-memory storage
  // For example purposes, using a static array
  const salesRecords = [
    { produceName: 'Beans', tonnage: 50, amountPaid: 50000, buyerName: 'John Doe', salesAgent: 'Jane Smith', dateTime: new Date().toISOString() },
    // Add more records as needed
  ];
  
  res.json(salesRecords);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
