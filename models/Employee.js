var mongoose = require('mongoose');


var EmployeeSchema= new mongoose.Schema({
    name :String,
    cellno :String,
    address :String
    
    
    
});

module.exports = mongoose.model("Employee", EmployeeSchema);
