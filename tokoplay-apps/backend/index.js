require('dotenv').config();

const { error } = require("console");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

const routes = require('./routes/tokoplay.route');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended:true,
  }),
);

app.use('/api', routes);

// app.get("/", (req, res) => {
//   res.send("Hello Boy");
// });

app.listen(3000, ()=> {
  console.log(`Server Started at ${3000}`)
});