'use strict';
const express = require('express');
const loginController = require('../controller/loginController');
const route = express.Router();

route.get('/login', loginController.login);

module.exports = route;