
var mongoose = require('mongoose');


var order = new mongoose.Schema({
    orderstatus :String,
   place_order_time:String,
     delivery_date:String,
     total_price:String,
    
    
});
const order = module.exports = mongoose.model('order', order);
