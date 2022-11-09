let Express = require('express');
let Router = Express.Router();
let {GetMovies, CreateMovies, UpdateMovies,DeletePeliculas} = require('../Controllers/peliculas.controller');

Router.get('/Peliculas', GetMovies);
Router.post('/Peliculas', CreateMovies);
Router.put('/Peliculas/:id', UpdateMovies);
Router.delete('/Peliculas/:id', DeletePeliculas);


module.exports = Router;