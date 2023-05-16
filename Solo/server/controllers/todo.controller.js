const Todo = require('../models/todo.model')
const jwt = require('jsonwebtoken')

module.exports = {
    // Get All
    findAllNotes: (req, res) => {
        Todo.find()
            .then((allNotes) => {
                res.status(200).json(allNotes)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    allNotesByLoggedInUser: async (req, res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
            // console.log('DECODED JWT id', decodedJwt.payload._id);
            const user_id = decodedJwt.payload._id
            const notes = await Todo.find({user_id:user_id})
            res.status(200).json(notes)
        }
        catch(err){
            res.status(400).json(err)
        }
    },

    // Post ONE
    // 

    // createNote: (req, res) => {
    //     Todo.create(note)
    //         .then((newNote) => {
    //             console.log('REQ BODY', req.body)
    //             const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
    //             console.log('DECODED JWT id',decodedJwt.payload._id)
    //             const note = {...req.body, user_id:decodedJwt.payload._id}
    //             console.log('FINALIZED ALBUM',note)
    //             res.status(201).json(newNote)
    //         })
    //         .catch((err) => {
    //             res.status(400).json(err)
    //         })
    // }
    
    createNote: async (req, res) => {
        try {
            const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });
            console.log('DECODED JWT id', decodedJwt.payload._id);
            const noteWithUserId = { ...req.body, user_id: decodedJwt.payload._id };
            console.log('FINALIZED NOTE', noteWithUserId);
            const newNote = await Todo.create(noteWithUserId);
            console.log('REQ BODY', req.body);
            res.status(201).json(newNote);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    // Get ONE 
    findoneNote: (req, res) => {
        Todo.findOne({ _id: req.params.id })
            .then((oneNote) => {
                res.status(200).json(oneNote)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    // Put ONE
    updateNote: (req, res) => {
        Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((updatedNote) => {
                res.status(200).json(updatedNote)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    // delete ONE
    deleteNote: (req, res) => {
        Todo.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    }
}