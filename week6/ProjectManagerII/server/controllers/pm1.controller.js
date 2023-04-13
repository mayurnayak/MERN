const Product = require('../models/pm1.model')

module.exports = {

    getAllProduct: (req, res) => {
        Product.find()
            .then((allProduct) => {
                res.status(200).json(allProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.status(201).json(newProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct) => {
            res.status(201).json(oneProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true}
            )
            .then((updatedProduct) => {
                res.status(201).json(updatedProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((result)=> {
                res.json({result:result})
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}