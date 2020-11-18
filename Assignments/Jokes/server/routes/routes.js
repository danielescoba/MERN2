const controller = require('../controllers/controller')

module.exports = app => {
    //Create
    app.post('/api/jokes', controller.createJokes)
    //Read
    app.get('/api/jokes', controller.allJokes);
    app.get('/api/jokes/:id', controller.oneJoke);
    //Update
    app.patch('/api/jokes/:id', controller.updateJoke);
    //Delete
    app.delete('/api/jokes/:id', controller.deleteJoke);
}