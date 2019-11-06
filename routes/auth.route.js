var express = require('express');
var route = express.Router();

var controller = require('../controllers/auth.controller');

route.get('/login',controller.getLogin);
route.post('/login',controller.postLogin);
module.exports = route;
