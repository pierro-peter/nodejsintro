const express = require('express');
const path = require('path');
const app = express();

// Import the router
const indexRouter = require('./routes/index'); // Adjust the path as necessary

// Use the router
app.use('/', indexRouter);

// Optional: Serve static files (e.g., for assets like CSS and JS)
app.use(express.static(path.join(__dirname, 'public')));

// Set up other middleware and routes as needed
// e.g., bodyParser, session handling, etc.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
