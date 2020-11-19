const controller = require('../controllers/controller')

module.exports = app => {
    //Create
    app.post('/api/products', controller.createProducts)
    //Read
    app.get('/api/products', controller.allProducts);
    app.get('/api/products/:id', controller.oneProduct);
    //Update
    app.patch('/api/products/:id', controller.updateProduct);
    //Delete
    app.delete('/api/products/:id', controller.deleteProduct);
}