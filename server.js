//importing dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('session');

require('dotenv').config();

//import models
// const create = require('./models/create');

// Importing route modules

const indexRoutes = require('./routes/indexRoute');
const dashboardRoutes = require('./routes/dashboardRoutes');
const loginRoutes = require('./routes/login/Routes');
const signUpRoutes = require('./routes/signUpRoutes');
const managerRoutes = require('./routes/managerRoutes');
const salesRoutes = require('./routes/salesRoutes');
const reportsRoutes = require('./routes/reportsRoutes');
const stockRoutes = require('./routes/stockRoutes');
const salesAgentRoutes = require('./routes/salesAgentRoutes');

//instantiations
//const app = express();
const port = 3000;

//Database config
mongoose.connection  .once("open", () => {
  console.log("Mongoose connection open");
})
 .on("error", err => {
  console.error(`Connection error: ${err.message}`);

});

// Middleware to serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true }));
app.use(express,json());
app.use(expressSession);


//Express session configuration
// (Apply before Passport) 
app.use(session({secret:"secret",
  resave: false,
  saveUninitialized: false
 }));

 //initialise passport session
 app.use(passport.initialize());
app.use(passport.session());

// Passport configurations
passport.use(Create.createStrategy());
passport.serializeUser(Create.serializeUser());
passport.deserializeUser(Create.deserializeUser());


// Use imported routes

app.use('/', indexRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/login', loginRoutes);
app.use('/signup', signUpRoutes);
app.use('/manager', managerRoutes);
app.use('/sales', salesRoutes);
app.use('/reports', reportsRoutes);
app.use('/stock', stockRoutes);
app.use('/sales-agent', salesAgentRoutes);

// Fallback route for undefined routes
app.get("*", (req, res) => {
  res.send("Error! Page not found.");
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
