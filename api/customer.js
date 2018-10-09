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


exports.editCustomer = function(req,res){
  
    customer.findOne({_id:req.body.id}).exec(function(err,customer){
        if(err){
            console.log(customer);
            res.status('500').send({message:'error'})
           
        }
        else{
            console.log(customer);
            customer.pizzaname= req.body.pizzaname;
            customer.customername= req.body.customername;
            customer.cellno=req.body.cellno;
            customer.address= req.body.address;
            customer.pizzasize= req.body.pizzasize;
            customer.otheritems=req.body.otheritems;
           

            customer.save(function(err,result){
                if(err){
                    res.status('500').send({message:'error found'})
                }
                else{
                    res.render("order");
                    console.log(result);
                   
                }
            });
        }
    })
  }

exports.deletecustomer = function(req, res, next){
    customer.remove({_id: req.params.id},function(err, result){
         if(err){
            res.json(err);
       }
       else{
           res.json(result);
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

