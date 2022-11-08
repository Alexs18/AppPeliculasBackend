let Express = require('express');
let Router = Express.Router();
let {GetMovies} = require('../Controllers/peliculas.controller');

Router.get('/Peliculas', GetMovies);

module.exports = Router;