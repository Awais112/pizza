const exprss = require('express');
const customer = require('../models/customer.js');



exports.add= function(req, res){
    let newCustomer = new customer({
        pizzaname: req.body.pizzaname,
        customername: req.body.customername,
        cellno: req.body.cellno,
        address: req.body.address,
        pizzasize: req.body.pizzasize,
        otheritems: req.body.otheritems
    });
    console.log(customer);

    newCustomer.save((err, customer)=>{
        if(err){
            res.json({msg: 'Failed to add the customer'});
        }
        else{
            // res.render("transport",{transport:route});
           res.json({msg: 'customer is added successfully'});
        }
    });
}


//function is used to get all routes 
exports.getAll = function (req, res) {
    customer
        .find({})
        .exec(function (error, customer) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(customer);
            }
        })
}

