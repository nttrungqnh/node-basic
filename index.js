var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var port = 1704;
app.set('view engine','pug');
app.set('views','./views');
app.use(cookieParser());


app.get('/',function(req,res){
    res.render('index',{
        name:'Nguyễn Thành Trung',
        company:'VNPT'
    });
})

app.use('/user',userRoutes);
app.use('/auth',authRoutes);
app.listen(port,function(){
    console.log('Server listening on port '+ port);
})