'use strict';
const express = require('express');
const userController = require('../controller/userController');
const subController = require('../controller/subjectController');
const route = express.Router();

route.get('/user', userController.getUser);
route.post('/user', userController.addUser);
route.put('/user/:id', userController.updateUser);
route.post('/sub', subController.createSubject);

route.get('/sub', subController.getSubject);
module.exports = route;