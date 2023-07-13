const route = require('express').Router();

const { userController } = require('../controllers');

route.post('/createUser', userController.createUser);
route.post('/loginUser', userController.loginUser);
route.get('/getAllUserNames', userController.getAllUserNames);
route.get('/getUser', userController.getUser);

module.exports = route;