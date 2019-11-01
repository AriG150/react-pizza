const express = require('express');
const router = express.Router();
const Topping = require('../models/topping');

//GET /toppings get all toppings (all available toppings)
router.get('/', (req, res) => {
  Topping.find({}, (err, toppings) => {
    res.json(toppings)
  });
});

//POST /toppings create a new topping
router.post('/', (req, res) => {
  const newTopp = Topping(req.body);
  newTopp.save((err, topping) => {
    res.json(topping);
  })
})


module.exports = router;

