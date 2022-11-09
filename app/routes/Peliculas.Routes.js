let Express = require('express');
let Router = Express.Router();
let {GetMovies, CreateMovies} = require('../Controllers/peliculas.controller');

Router.get('/Peliculas', GetMovies);
Router.post('/Peliculas', CreateMovies)

module.exports = Router;