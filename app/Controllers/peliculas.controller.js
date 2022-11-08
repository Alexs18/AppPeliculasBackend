let {GetPeliculas} = require('../services/peliculas.services');

class peliculascontroller{

    async GetMovies(req, res){
       let datos = await GetPeliculas();
       res.status(200).
       json({
        status:'ok',
        message:'estamos funcionando',
        data:datos
    })
    }

}

let PeliculasInstancia = new peliculascontroller();

module.exports = PeliculasInstancia