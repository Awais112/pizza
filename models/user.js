/*var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//var passportLocalMongoose = require("passport-local-mongoose");

var AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

//AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("newAdmin", AdminSchema);*/

var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');

var AdminSchema = new mongoose.Schema({
    username:{type: String, unique: true, required: true},
    password: { type: String, required: true },

});

const User = module.exports = mongoose.model('newAdmin',AdminSchema);


