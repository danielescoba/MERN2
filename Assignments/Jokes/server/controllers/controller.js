const {Joke} = require('../models/joke.models');

module.exports = {
    //Create
    createJokes: (req,res)=>{
        Joke.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    //Read
    allJokes: (req,res) => {
        Joke.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    oneJoke: (req,res) => {
        Joke.findOne({_id:req.params.id})
        .then(data =>{
            if(data == null){
                res.status(500).json({error: "Joke does not exist."})
            }else{
            res.json(data)
            }
        })
            .catch(err => res.json(err));
    },
    //Update
    updateJoke: (req,res) => {
        Joke.findOneAndUpdate({_id: req.params.id},req.body, {new : true, runValidators: true, useFindAndModify: false})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    //Delete
    deleteJoke: (req,res) => {
        Joke.findOneAndDelete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err =>res.json(err));
    }
}