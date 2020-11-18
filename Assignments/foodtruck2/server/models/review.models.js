const mongosse = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name field is required."]
    },
    review: {
        type: String,
        required: [true," Review field is required."],
        minlength: [10, "Your review must be at least 10 characters long."]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min : [1, "Rating must be at least 1 star, even if it's the worst thing ever."],
        max: [5, "Rating must be at most 5 stars, even if it's the best thing ever."]
    }
})

module.exports = {ReviewSchema}