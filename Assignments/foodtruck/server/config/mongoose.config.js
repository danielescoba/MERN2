const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foodtruck', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("Connection to the database established"))
    .catch(err=>console.log("An error occrred when connecting to the database"))