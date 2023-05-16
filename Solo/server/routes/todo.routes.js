const TodoController = require('../controllers/todo.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/allNotes', TodoController.findAllNotes);
    app.get('/api/myNotes',authenticate, TodoController.allNotesByLoggedInUser);
    app.post('/api/newNote',authenticate, TodoController.createNote);
    app.get('/api/oneNote/:id', TodoController.findoneNote);
    app.put('/api/editNote/:id', TodoController.updateNote);
    app.delete('/api/deleteNote/:id', TodoController.deleteNote);
}