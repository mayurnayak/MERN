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
    }
}