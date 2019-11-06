var express = require('express');
var route = express.Router();


var db = require('../db');
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

route.get('/',controller.index);

route.get('/search',controller.search);

route.get('/create',controller.create);

route.get('/:id',controller.getCreate);

route.post('/create',validate.postCreate,controller.postCreate);

module.exports = route;