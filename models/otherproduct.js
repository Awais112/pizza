var mongoose = require('mongoose');


var otherproductSchema= new mongoose.Schema({
    items :String
    
    
    
});

module.exports = mongoose.model("otherproduct", otherproductSchema);
