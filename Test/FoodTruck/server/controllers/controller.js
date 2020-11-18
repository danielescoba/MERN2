const {Truck} = require('../models/truck.models');

module.exports = {
    //Create
    createTruck: (req,res)=>{
        Truck.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    //Read
    allTrucks: (req,res) => {
        Truck.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    oneTruck: (req,res) => {
        Truck.findOne({_id:req.params.id})
        .then(data =>{
            if(data == null){
                res.status(500).json({error: "Food truck does not exist."})
            }else{
            res.json(data)
            }
        })
            .catch(err => res.json(err));
    },
    //Update
    updateTruck: (req,res) => {
        Truck.findOneAndUpdate({_id: req.params.id},req.body, {new : true, runValidators: true, useFindAndModify: false})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    addReview: (req,res) => {
        Truck.findOne({ _id: req.params.id, 'reviews.name': req.body.name})
        .then(data => {
            if(data == null){
                return Truck.findOneAndUpdate({_id: req.params.id}, {$addToSet: {reviews: req.body}}, {new:true, runValidators:true, useFindAndModify:false})

            }else{
            res.json({ errors: {reviews : { name: {message: 'That name already used for another review on this truck'}}}});
        }
        })
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    //Delete
    deleteTruck: (req,res) => {
        Truck.findOneAndDelete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err =>res.json(err));
    }
}