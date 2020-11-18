const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    joke:{
        type: String,
        minlength:[5, "Joke must be at least 5 characters long!"]
    }
},{timestamps:true})

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = {Joke}