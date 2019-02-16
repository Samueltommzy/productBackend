let Product = require('../model/productSchema');
let express = require('express');
let router   = express.Router();

router.get('/Products', (req,res,next)=>{
    Product.find({}).exec((err,data)=>{
        if (err){
            return next(err);
        }
        else {
            return res.status(200).send({
                status:  200,
                success: true,
                message: "successfully loaded products",
                data:    data
            })
        }
    });
});

router.get('/product/:id', (req,res,next)=>{
    let id = req.params.id
    Product.findOne({id:id}).exec((err,data)=>{
        if (err) {
            return next(err);
        }
        else{
            return res.send(200).send({
                status:  200,
                success: true,
                message: "loaded product successfully" ,
                data:     data 
            });
        }
    })
});

router.post('/product', (req,res,next)=>{
    let productObject = {
        Name:        req.body.Name,
        Description: req.body.Description,
        Price:       req.body.Price,
        Category:    req.body.Category,
        Image:       req.body.Image,
        Color:       req.body.Color
    }

    let newProduct = new Product(productObject);
    newProduct.save((err,data)=>{
        if (err) {
            return next(err);
        }
        else {
            return res.status(200).send({
                status:  200,
                success: true,
                message: "successfully created Product",
                data:     data
            })
        }
    })
})

module.exports = router;





