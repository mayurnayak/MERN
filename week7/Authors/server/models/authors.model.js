const mongoose = require("mongoose");

const AuthorSchema = {
    name: {
        type: String,
        required: [true, "Author's Name is required"],
        minLength: [3, "Author's Name must be at least 3 characters"],
    },
};

module.exports = mongoose.model("Author", AuthorSchema);