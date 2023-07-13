const route = require('express').Router();

const { bugController } = require('../controllers');

route.post('/createBug', bugController.createBug);
route.put('/editBug', bugController.editBug);
route.delete('/deleteBug', bugController.deleteBug);
route.get('/getAllBugs', bugController.getAllBugs);

module.exports = route;