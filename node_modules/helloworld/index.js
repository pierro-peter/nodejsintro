//dependencies
const express = require('express');
const path = require("path")

//instatiations

const app = express();

//configurations

//import routes
const studyRoutes = require("./routes/studyRoutes");




//set view engine to pug
app.set("view engine","pug")//specify the view engine
app.set("views", path.join(__dirname, "views"))//specify thee views directory

//middleware
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log('A new request received together ' + Date.now());
  next();
});

app.get('/', (req, res) => { // new
  res.send('Homepage! Hello world.');
});

// routes
//use imported roures
app.use("/", studyRoutes)



app.get("*", (req, res) => {
  res.send("error! page does not exist");
});

//BOOTSTRAPPING A SERVER
app.listen(3000, () => console.log('listening on port 3000'));