var express = require("express"),
app = express();
var debug = require('debug')('05-express-first-app:server');
var path = __dirname + '/views/';
var router = express.Router();
var http = require('http');
mongoose = require('mongoose'),


//LocalStrategy = require("passport-local");

bodyParser = require("body-parser");
var mongodb = require("mongodb");
//var session = require('express-session');
// var dbHost = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";
// var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

var dbHost = "mongodb://awais12:a03060302@ds113732.mlab.com:13732/pizzadb";
var url = "mongodb://awais12:a03060302@ds113732.mlab.com:13732/pizzadb";
//DB Object
var dbObject;

//get instance of MongoClient to establish connection
var MongoClient = mongodb.MongoClient;



	

module.exports = function(app) {

  app.use(express.static('public'));
  app.use('/public', express.static('public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(require("express-session")({
  secret: "wah wah wah",
  resave: false,
  saveUninitialized: false
  }));


///////---------------------- FrontHand Routes -------------------------------------



  app.get('/', function (req, res) {
    res.render('main');
    });

    app.get('/adminloginpage', function(req,res){
      res.render('adminlogin');
  });
  
  
  app.get('/viewpizza', function(req,res){
    res.render('viewpizza');
});

app.get('/viewemp', function(req,res){
    res.render('viewemp');
});
  app.get('/main2', function(req,res){
    res.render('main2');
});

    app.get('/employee', function(req,res){
        res.render('employee');
    });

app.get('/order', function(req,res){
        res.render('order');
    });
      


    app.get('/secret',  function (req, res) {
    res.render('secret');
    });
 
  app.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });


  var Employee = require('../api/Employee.js');
  app.post('/insertEmployee', Employee.add);
   app.get('/empdata', Employee.getAll);


    
    app.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/");
    });
  
  
    //---------------------------Defining Routes For Admin-----------------------------------------------
    var user = require('../api/user.js');
    app.post('/login', user.login);
    app.post('/adminregister', user.adminregister);



    


    var pizza = require('../api/pizza.js');
    app.post('/insertpizza', pizza.add);
     app.get('/getdata', pizza.getAll);
      app.delete('/pizza/:id', pizza.delete);
   app.post('/updatepizza/:id', pizza.editpizza);

 app.use('/uploads', express.static('uploads'));  
   
    










} ;




  
   