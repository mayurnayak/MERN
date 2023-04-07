const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlength: [10, "come one, give a 10 characters long setup"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [5, "punchline must be at least 5 characters long"]
    }
}, { timestamps: true });

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
