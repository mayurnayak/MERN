const DroneController = require('../controllers/drone.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/allPhotos', DroneController.findAllPhotos);

    app.get('/api/myPhotos',authenticate, DroneController.allPhotosByLoggedInUser);

    app.post('/api/newPhoto',authenticate, DroneController.createPhoto);

    app.get('/api/onePhoto/:id', DroneController.findonePhoto);

    app.put('/api/editPhoto/:id', DroneController.updatePhoto);

    app.delete('/api/deletePhoto/:id', DroneController.deletePhoto);
}