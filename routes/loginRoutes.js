const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Include your router
const loginRouter = require('./routes/login'); // Adjust path as necessary
app.use('/', loginRouter);

// Other middlewares and routes...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
