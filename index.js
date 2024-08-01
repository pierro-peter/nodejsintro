const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => { // new
  res.send('Homepage! Hello world.');
});
// index.js

app.get('/about', (req, res) => { // new
  res.send('About page. greaatt.');
});

app.get("/member", (req, res) => {
  res.send("These are member details");
});

app.post("/member", (req, res) => {
  res.send("add member details");
});

app.delete("/member", (req, res) => {
  res.send("delete member details");
});
//path parameters
//e.g /pathparams
app.get("/students/:name", (req, res) => {
  res.send("This is list of students");
});

app.get("/persons", (req, res) => {
  res.send(
    "This is  " + req.query.class + " from " + req.query.class + " class " + req.query.cohort);
});

app.get("/learners", (req, res) => {
  res.send(
    "This is a student from " + req.query.gender + "  and " + req.query.age);
});

//serving html files
app.get("/first", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get("/quotes", (req, res) => {
  res.sendFile(__dirname + '/quotes.html')
});

app.post("/quotes", (req, res) => {
  console.log(req.body)
});


app.get("*", (req, res) => {
  res.send("error! page does not exist");
});


app.listen(3000, () => console.log('listening on port 3000'));