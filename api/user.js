const exprss = require('express');
const User = require('../models/user.js');
var session = require('express-session');
exports.login = function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username, password: password}, function(err, user){
        if(err){
            res.json({msg: 'Unaunticated user'});
        }
        if(!user){
         
           res.send('invalid username or password');
        }
        if(user){
            req.session.user = user;
            console.log('Successfully login');
        res.render('secret');
    }
    console.log("Not redirect")
   // res.redirect('/');
    
    });

}



exports.adminregister= function(req, res){
    let newUser = new User({
        "username": "admin",
        "password": "admin"
    });

    newUser.save((err, User)=>{
        if(err){
            res.json({msg: 'Failed to add the User'});
        }
        else{
            res.json({msg: 'User is added successfully'});
        }
    });
}