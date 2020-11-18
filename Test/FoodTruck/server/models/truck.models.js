const mongoose = require('mongoose');
const { ReviewSchema} = require('./review.models');

const TruckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You have to give a name to this food truck."],
        minlength: [5, "Food truck name must be at least 5 characters in length."]
    },
    style: {
        type: String,
        required: [true, "Cuisine style is required."],
        minlength: [3, "Cuisine style must be at least 3 characters long."]
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [10, "Truack desription must be at least 10 charaters long."]
    },
    reviews: [ReviewSchema]
}, {timestamps: true})

const Truck = mongoose.model("Trunk", TruckSchema);

module.exports = {Truck}