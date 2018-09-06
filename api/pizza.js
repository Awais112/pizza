const exprss = require('express');
const pizza = require('../models/pizza');
var app = exprss();
const multer = require('multer');
const uploads = multer({dest: './uploads'});


exports.openhtc =function(req,res){
    res.render("pizza");
}

exports.viewpizza =function(req,res){

    pizza.find({}).exec(function(err,result){
        if(err){
            res.status(500).send({error:err});
        }
        else{
            res.render("viewpizza",{pizza:result});
        }
    });
}
// const multer = require('multer');
// const uploads = multer({dest: './uploads'});
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads')
    },
    filename: function (req, file, callback) {
      callback(null, Date.now() + file.originalname)
    }
  })

//   exports.add= function(req, res){
//     let newHtc = new htc({
//         title: req.body.title,
//         description: req.body.description,
//         Price: req.body.Price,
//         brand: req.body.brand
        
//     });

//     newHtc.save((err, htc)=>{
//         if(err){
//             res.json({msg: 'Failed to add the notifications'});
//         }
//         else{
//             res.json({msg: 'notifications is added successfully'});
//         }
//     });
// }

 exports.add = function(req,res){
    var upload = multer({ storage: storage }).single('userFile')
    upload(req, res, function (err) {
        console.log("file Name",req.file)
        console.log("Request: ",req.body);
        console.log(req.body);
        var params = req.body;
        let newpizza = new pizza({
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        description: req.body.description,
        imgurl:req.file.path
        
    });

    newpizza.save((err, pizza)=>{
        if(err){
            res.json({msg: 'Failed to add the notifications'});
        }
        else{
         //   res.json({msg: 'notifications is added successfully'});
         res.render("viewpizza",pizza);
        }
    });
    
    })
}



// exports.add = function(req,res){
//     var upload = multer({ storage: storage }).single('userFile')
//     upload(req, res, function (err) {
//         console.log("file Name",req.file)
//         console.log("Request: ",req.body);
//         console.log(req.body);
//         var params = req.body;
//        if(params.title==undefined ){
//          res.status(404).send({
//            message:'one or more perameters missing'
//          });
//        }else{
//         new htc({
//             title:params.title,
//             description:params.description,
//             Price:params.Price,
//             imageurl:req.file.path,
//             brand:params.brand
//         }).save(function(error,result){
//           if(error){
//                res.json({msg: 'Failed to add the Events'});
//             // console.log(error);
//       }else{
//           //  res.json({msg: 'Event is added in database'});
//           console.log("data is insert")
//             // res.render("events");
//           //    console.log(result);
//           }
//         });
//         res.end();
//       }
//     })
// }



// exports.addhtc= function(req, res){
//     let newhtc = new htc({

//         title: req.body.field1,
//         description: req.body.field2,
//         Price: req.body.field3,
//         brand: req.body.field4,
//         imgurl: req.body.field5
       
//     });
//     newhtc.save((err, htc)=>{
//         if(err){
//             res.json({msg: 'Failed to add the User'});
//         }
//         else{
       
//             res.render("register");
      
         
            
//         }
//     });
// }

 exports.getAll = function (req, res) {
    pizza
        .find({})
        .exec(function (error, pizza) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(pizza);
            }
        })
}

// exports.getAll = function (req, res) {
//     pizza
//         .find({})
//         .exec(function (error, pizza) {
//             if (error) {
//                 res
//                     .status(500)
//                     .send({message: error});
//             } else {
//                 res
//                     .status(200)
//                     .send(pizza);
//             }
//         })
// }


 exports.delete = function(req, res, next){
    pizza.remove({_id: req.params.id},function(err, result){
         if(err){
            res.json(err);
       }
       else{
        pizza.find({}).then(function(result){
            res.render("viewpizza",{pizza:result});
        })
        // res.json(result);
    }
    });
 }
 

exports.editpizza= function(req,res){
  
    pizza.findOne({_id:req.body.id}).exec(function(err,pizza){
        if(err){
            console.log(pizza);
            res.status('500').send({message:'error'})
           
        }
        else{
            console.log(pizza);

            pizza.name = req.body.name;
            pizza.price = req.body.price;
            pizza.size = req.body.size;
            pizza.description = req.body.description;
            pizza.imgurl=req.body.imgurl;
   
        
           

            pizza.save(function(err,result){
                if(err){
                    res.status('500').send({message:'error found'})
                }
                else{
                    res.render("viewpizza");
                    console.log(result);
                   
                }
            });
        }
    })
  }