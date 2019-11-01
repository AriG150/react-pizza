const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizza')
const Topping = require('../models/topping');

//GET all pizzas (show list all pizzas)
router.get('/', (req, res) => {
  Pizza.find({}, (err, pizzas) => {
    res.json(pizzas)
  })
})

//GET one pizza by id 
router.get('/:id', (req, res) => {
  Pizza.findById(req.params.id, (err, pizza) =>{
    res.json(pizza)
  })
})

//POST /pizzas create new pizza 
router.post('/', (req, res) => {
  const newPizza = Pizza(req.body);
  newPizza.save((err, pizza) => {
    res.json(pizza)
  });
});

//PUT /pizzas/:id update one pizza 
router.put('/:id', (req, res) => {
  Pizza.findByIdAndUpdate(req.params.id, req.body ,(err, pizza) => {
      res.json(pizza)
  })
})

//POST /pizzas/:id/toppings - create new toppings and add to a new pizza 
//idea: user see's their pizza and selects toppings for their pizza. 
//existing topping id, get by post, 
router.post('/:id/toppings', (req, res) => {
  //find pizza
  Pizza.findById(req.params.id, (err, pizza) => {
    //find topping
    Topping.findById(req.body.toppingId, (err, topping) => {
      //have both pizza and topping stored in variables
      pizza.toppings.push(topping)
      //save pizza with its stuff in it
      pizza.save((err) => {
        //send it to front
        res.json(pizza)
      });
    });
  });
});

module.exports = router;


