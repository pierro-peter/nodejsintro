//dependecies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");    

require("dotenv").config()

//instatiations
const app = express();
const port = 3005;

//import models
//importing routes


//configurations

// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  
  useUnifiedTopology: true,
  });
  
// mongoose.connect("mongodb://localhost:27017/Peter2");

  mongoose.connection
  .once("open", () => {
  console.log("Mongoose connection open");
  })
  .on("error", err => {
  console.error(`Connection error: ${err.message}`);
  });
  

const studyRoutes = require ('./routes/studyRoutes');
//set view engine to pug
app.set("view engine", "pug");// specify the view engine
app.set("views", path.join(__dirname, "views"));// specify the view directory





//4.middleware

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));//helps parse data to form
app.use(express.json());//helps capture data in json format




//5. routes
//use imported roures
app.use("/", studyRoutes)



app.get("*", (req, res) => {
  res.send("error! page does not exist");
});

//6.BOOTSTRAPPING A SERVER
//server
app.listen(port, ()=> console.log(`listening on port ${port}`));

//app.listen(3000, () => console.log('listening on port 3000'));