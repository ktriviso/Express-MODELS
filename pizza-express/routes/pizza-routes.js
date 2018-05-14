//Make sure to import your models from Pizza.js
const pizzaDB = require('../models/pizza');
//import express router here !
const router = require('express').Router();

// Get all
router.get('/', (req, res) => {
  console.log('I return all pizza')
  pizzaDB.findAll()
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err.message));
});

// Get one
router.get('/:id', (req, res) => {
  console.log(req.params);
  console.log(`I return the pizza with id ${req.params.id}`);
  pizzaDB.findOne(req.params.id)
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err.message));
});

// Create
router.post('/', (req, res) => {
  console.log(req.body);
  console.log('I create a pizza ');
  pizzaDB.makeOne(req.body)
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err.message));
});

// Update
router.put('/:id', (req, res) => {
  console.log(req.body);
  console.log(`I update the pizza with id ${req.params.id}`)
  pizzaDB.save(Object.assign(req.body, {pizzas_id: req.params.id}))
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err.message));
});

// Destroy
router.delete('/:id', (req, res) => {
  console.log(`I destroy the pizza with id ${req.params.id}`);
  pizzaDB.destroy(req.params.id)
  .then(data => res.json(data))
  .catch(err => res.status(500).send(err.message));
});

module.exports = router;
