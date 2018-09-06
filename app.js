var express = require("express"),
app = express();

var port = process.env.PORT || 3000;
var mongodb = require("mongodb");
var cookieParser = require('cookie-parser');
var User = require('./models/user');
var MongoClient = require('mongodb').MongoClient;
mongoose = require('mongoose');
var path = require('path');

var configDB = require('./config/database.js');






mongoose.connect(configDB.url, { useNewUrlParser: true, /* other options */ })
require("./routes/routes")(app); 
mongoose.Promise = global.Promise;


mongoose.connection.on( 'connected',function(){
   
    console.log('Connected to database  mongodb');
 });
 
 mongoose.connection.on('error',function(err){
     if(err){
        console.log('Error on database connection to mongodb' +err);
     }
 });
 Admin = require("./models/user");
 app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'layout')));
app.use(express.static(path.join(__dirname,'public')));




app.listen(port, () => console.log('Server is live on port : ', port  ));