const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => { // new
    res.send('About page. greaatt.');
  });
  
  router.get("/member", (req, res) => {
    res.send("These are member details");
  });
  
  router.post("/member", (req, res) => {
    res.send("add member details");
  });
  
  router.delete("/member", (req, res) => {
    res.send("delete member details");
  });
  //path parameters
  //e.g /pathparams
  router.get("/students/:name", (req, res) => {
    res.send("This is list of students");
  });
  
  router.get("/persons", (req, res) => {
    res.send(
      "This is  " + req.query.class + " from " + req.query.class + " class " + req.query.cohort);
  });
  
  router.get("/learners", (req, res) => {
    res.send(
      "This is a student from " + req.query.gender + "  and " + req.query.age);
  });
  
  //serving html files
  router.get("/first", (req, res) => {
    res.sendFile(__dirname + '/index.html')
  });
  
  router.get("/quotes", (req, res) => {
    res.sendFile(__dirname + '..views/quotes.html')
  });
  
  router.post("/quotes", (req, res) => {
    console.log(req.body)
  });
  

  module.exports = router