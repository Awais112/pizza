const exprss = require('express');
const Employee = require('../models/Employee');
var app = exprss();
var url   = "mongodb://awais12:a03060302@ds113732.mlab.com:13732/pizzadb";
 exports.add= function(req, res){
    let newEmployee = new Employee({
        name: req.body.name,
        cellno: req.body.cellno,
        address:req.body.addr
        
        
    });
     newEmployee.save((err, Employee)=>{
        if(err){
            res.json({msg: 'Failed to add the User'});
        }
        else{
            res.render("employee");
        }
    });
}

exports.getAll = function (req, res) {
    Employee
        .find({})
        .exec(function (error, Employee) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(Employee);
            }
        })
}
 exports.deleteEmp = function(req, res, next){
    Employee.remove({_id: req.params.id},function(err, result){
         if(err){
            res.json(err);
       }
       else{
           res.json(result);
        }
    });
 }

 
exports.editemployee = function(req,res){
  
    Employee.findOne({_id:req.body.id}).exec(function(err,Employee){
        if(err){
            console.log(Employee);
            res.status('500').send({message:'error'})
           
        }
        else{
            console.log(Employee);
            Employee.name= req.body.name;
            Employee.cellno= req.body.cellno;
            Employee.address=req.body.address;
           

            Employee.save(function(err,result){
                if(err){
                    res.status('500').send({message:'error found'})
                }
                else{
                    res.render("viewemp");
                    console.log(result);
                   
                }
            });
        }
    })
  }