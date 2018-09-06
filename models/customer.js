
var mongoose = require('mongoose');


var customer = new mongoose.Schema({
    name :String,
    cellno:String,
    address:String,
    email:String,
    
    
});
const customers = module.exports = mongoose.model('customer', customer);
