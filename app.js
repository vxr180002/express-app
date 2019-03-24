const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

// this is our MongoDB database
const dbRoute = "mongodb://localhost:27017/regaliaraja";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

var db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

var list = require('./routes/list')
var items = require('./routes/items')
app.use('/list', list)
app.use('/items', items)

app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log(`App listening on port ${port}`))