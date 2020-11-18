const controller = require('../controllers/controller')

module.exports = app => {
    //Create
    app.post('./api/trucks', controller.createTruck)
    //Read
    app.get('/api/trucks', controller.allTrucks);
    app.get('/api/trucks/:id', controller.oneTruck);
    //Update
    app.patch('/api/trucks/:id', controller.updateTruck);
    app.patch('/api/trucks/:id/review', controller.addReview);
    //Delete
    app.delete('/api/trucks/:id', controller.deleteTruck);
}