var express = require('express');
var route = express.Router();


var db = require('../db');
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var auth = require('../middlewares/auth.middleware');
route.get('/',auth.requireAuth,controller.index);

route.get('/search',controller.search);
route.get('/cookie',function(req,res,next){
    res.cookie('user-id',123);
    res.send('Hello');
})
route.get('/create',controller.create);

route.get('/:id',controller.getCreate);

route.post('/create',validate.postCreate,controller.postCreate);

module.exports = route;