
var mongoose = require('mongoose');


var pizza = new mongoose.Schema({
    name :String,
    price:String,
    size:String,
    description:String,
    imgurl:String
    
});
const pizza1 = module.exports = mongoose.model('pizza', pizza);
