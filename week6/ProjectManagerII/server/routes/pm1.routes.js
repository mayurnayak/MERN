const ProductController = require('../controllers/pm1.controller');

module.exports = app => {
    app.get('/api/allProducts', ProductController.getAllProduct)
    app.post('/api/newProduct', ProductController.createProduct)
    app.get('/api/oneProduct/:id', ProductController.findOneProduct)
}