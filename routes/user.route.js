var express = require('express');
var route = express.Router();


var db = require('../db');
var controller = require('../controllers/user.controller');


route.get('/',controller.index);

route.get('/search',controller.search);

route.get('/create',controller.create);

route.get('/:id',controller.getCreate);

route.post('/create',controller.postCreate);

module.exports = route;