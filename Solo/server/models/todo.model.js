const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        minlength: [3, 'come on, give a 3 characters title at least'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        minlength: [3, 'minimum 3 words !']
    },
    user_id:{
        type: mongoose.Types.ObjectId
    }
}, {timestamps:true});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
