const mongoose = require('mongoose');

// pizza schema will have references to multiple toppings
//one-many relationship as a document reference 


const pizzaSchema = new mongoose.Schema({
  name: String,
  size: String,
  price: Number,
  toppings: [{ type: mongoose.Schema.Types.ObjectId, ref:'Topping'}]
});


module.exports = mongoose.model('Pizza', pizzaSchema)
