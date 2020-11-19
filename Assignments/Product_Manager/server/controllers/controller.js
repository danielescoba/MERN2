const {Product} = require('../models/product.models');

module.exports = {
    //Create
    createProducts: (req,res)=>{
        Product.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    //Read
    allProducts: (req,res) => {
        Product.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    oneProduct: (req,res) => {
        Product.findOne({_id:req.params.id})
        .then(data =>{
            if(data == null){
                res.status(500).json({error: "Product does not exist."})
            }else{
            res.json(data)
            }
        })
            .catch(err => res.json(err));
    },
    //Update
    updateProduct: (req,res) => {
        Product.findOneAndUpdate({_id: req.params.id},req.body, {new : true, runValidators: true, useFindAndModify: false})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    //Delete
    deleteProduct: (req,res) => {
        Product.findOneAndDelete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err =>res.json(err));
    }
}