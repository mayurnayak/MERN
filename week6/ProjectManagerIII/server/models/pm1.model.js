const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "come on, give a 3 characters title at least"]
    },
    price:{
        type: Number,
        required: [true, "price is required"],
        mix:[1,"minimum price length is 1"]
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minlength: [5, "description must be at least 5 characters long"]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;