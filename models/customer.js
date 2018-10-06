var mongoose = require('mongoose');


var customerSchema = new mongoose.Schema({
    pizzaname:{type:String, required:false},
    customername:{type:String, required:false},
    cellno:{type:String, required:false},
    address:{type:String, required:false},
    pizzasize:{type:String, required:false},
    otheritems:{type:String, required:false}
        
});

const customer = module.exports = mongoose.model('customer', customerSchema);