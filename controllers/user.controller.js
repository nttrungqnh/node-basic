var db = require('../db');
var shortid = require('shortid');


module.exports.index = function(req,res){
    res.render('users/index',{
        users:db.get('users').value()
    });
};

module.exports.search = function(req,res){
    var q = req.query.q;
    var filterUsers = db.get('users').value().filter(function(item){
        return item.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render('users/index',{
        users:filterUsers
    });
}

module.exports.create = function(req,res){

    res.render('users/create');
};

module.exports.getCreate = function(req,res){
    var id =req.params.id ;
   
    var listUser = db.get('users').find({id:id}).value();
    console.log(listUser);
    res.render('users/detail',{
        user:listUser
    });
   
};

module.exports.postCreate = function(req,res){
    req.body.id = shortid.generate();
    var errors =[];
    if(!req.body.name){
        errors.push("Name is required!")
    }
    if(!req.body.phone){
        errors.push("Phone is required!")
    }
    if(errors.length){
        res.render('users/create',{
            errors:errors,
            values:req.body

        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/user');
};