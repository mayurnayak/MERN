const Author = require("../models/authors.model");

module.exports = {

    getAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthor) => {
                res.status(200).json(allAuthor)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                res.status(201).json(newAuthor)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
        .then((oneAuthor) => {
            res.status(201).json(oneAuthor)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true}
            )
            .then((updatedAuthor) => {
                res.status(201).json(updatedAuthor)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((result)=> {
                res.json({result:result})
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}