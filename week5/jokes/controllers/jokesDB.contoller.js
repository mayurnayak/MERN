const Joke = require('../models/jokesDB.model');

module.exports.findAllJokes = (request, response) => {
    Joke.find()
    .then((allJokes)=>{
        response.json({joke: allJokes})
    })
    .catch((err) => {
        response.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
    .then((newJoke) => {
        response.json({joke: newJoke})
    })
    .catch((err) => {
        response.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.findSingleJoke = (request, response) => {
    Joke.findOne({_id: request.params.id})
    .then((singleJoke) => {
        response.json({joke: singleJoke})
    })
    .catch((err) => {
        response.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.updateJoke = (request, response) => {
    Joke.findOneAndUpdate(
        {_id: request.params.id}, 
        request.body,
        {new: true, runValidators: true} )
        .then((updatedJoke) => {
            response.json({joke: updatedJoke})
        })
        .catch((err) => {
            response.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteJoke = (request, response) => {
    Joke.deleteOne({_id: request.params.id})
    .then((result) => {
        response.json({result: result})
    })
    .catch((err) => {
        response.json({ message: 'Something went wrong', error: err })
    });
}