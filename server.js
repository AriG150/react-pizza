const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Mongoose stuff 
mongoose.connect('mongodb://localhost/pizza', { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log(`💫...Connected to MongoDB at ${db.host}: ${db.port}...💫`)
});
db.on('error', (err) => {
  console.log(`🚨 Database Error: \n${err}`)
});


app.get('/', (req, res) => {
  res.send("Welcome to the pizza palace!")
});

app.use('/pizzas', require('./routes/pizzas'));
app.use('/toppings', require('./routes/toppings'));

app.listen(3001);