const exprss = require('express');
const otherproduct = require('../models/otherproduct.js');


exports.add= function(req, res){
    let newOtherproduct = new otherproduct({
        items: req.body.items
        
        
    });
     newOtherproduct.save((err, otherproduct)=>{
        if(err){
            res.json({msg: 'Failed to add the User'});
        }
        else{
            res.render("otherproduct",{otherproduct:otherproduct});
            //  res.render("otherproduct");
        }
    });
}


exports.getAll = function (req, res) {
    otherproduct
        .find({})
        .exec(function (error, otherproduct) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(otherproduct);
            }
        })
}



exports.delete = function(req, res, next){
    otherproduct.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            otherproduct.find({}).then(function(result){
                res.render("viewotherproduct",{otherproduct:result});
            })
            // res.json(result);
        }
    });
}

// exports.delete = function(req, res, next){
//     otherproduct.remove({_id: req.params.id},function(err, result){
//          if(err){
//             res.json(err);
//        }
//        else{
//         otherproduct.find({}).then(function(result){
//             res.render("viewpizza",{otherproduct:result});
//         })
//         // res.json(result);
//     }
//     });
//  }
 

exports.edititems= function(req,res){
  
    otherproduct.findOne({_id:req.body.id}).exec(function(err,otherproduct){
        if(err){
            console.log(pizza);
            res.status('500').send({message:'error'})
           
        }
        else{
            console.log(otherproduct);

            otherproduct.items = req.body.items;
           
   
        
           

            otherproduct.save(function(err,result){
                if(err){
                    res.status('500').send({message:'error found'})
                }
                else{
                    res.render("viewotherproduct");
                    console.log(result);
                   
                }
            });
        }
    })
  }