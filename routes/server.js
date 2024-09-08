const express = require('express');
const app = express();
const path = require('path');

// Import route modules
const indexRoutes = require('./routes/index');
const dashboardRoutes = require('./routes/dashboard');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const managerRoutes = require('./routes/manager');
const salesRoutes = require('./routes/sales');
const reportsRoutes = require('./routes/reports');
const stockRoutes = require('./routes/stock');
const salesAgentRoutes = require('./routes/salesAgent');

// Middleware to serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Use route modules
app.use('/', indexRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/manager', managerRoutes);
app.use('/sales', salesRoutes);
app.use('/reports', reportsRoutes);
app.use('/stock', stockRoutes);
app.use('/sales-agent', salesAgentRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
