const JokesController = require('../controllers/jokesDB.contoller');

module.exports = app => {
    app.get('/api/allJokes', JokesController.findAllJokes)
    app.post('/api/newJoke', JokesController.createJoke)
    app.get('/api/singleJoke/:id', JokesController.findSingleJoke)
    app.put('/api/updateJoke/:id', JokesController.updateJoke)
    app.delete('/api/deleteJoke/:id', JokesController.deleteJoke)
}
