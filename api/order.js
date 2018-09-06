const exprss = require('express');
const order = require('../models/order.js');
var app = exprss();
 exports.add= function(req, res){
    let neworder = new neworder({
        orderstatus: req.body.orderstatus, //Text field Id/Name
        place_order_time: req.body.placeordertime,
        delivery_date: req.body.deliverydate,
        total_price: req.body.totalprice
        
    });

    neworder.save((err, order)=>{
        if(err){
            res.json({msg: 'Failed to add the order'});
        }
        else{
            res.json({msg: 'order is added successfully'});
        }
    });
}


exports.getAll = function (req, res) {
    order
        .find({})
        .exec(function (error, order) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(order);
            }
        })
}
