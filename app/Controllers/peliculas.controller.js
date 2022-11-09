const Pool = require('../Database');
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

    async CreateMovies(req, res){
        let {descripcion, titulo, genero} = req.body;
        try {
            let {rows} = 
            await Pool.query(`insert into peliculas 
                            (descripcion, titulo, genero) values($1, $2, $3) returning id`,
                            [descripcion, titulo, genero]);
            if (rows.length < 0 ) {
                res.status(500).json({
                    message:'no se pudo ingresar el usuario'
                })
            }
            res.status(200).json({
                message:'Pelicula Ingresada correctamente',
                data:rows
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message:'Existió un erorr y no se pudo crear la pelicula',
                error: error.message
            })
        }
    }
    async UpdateMovies(req, res){

    }
    async DeletePeliculas(req, res){
        
    }

}

let PeliculasInstancia = new peliculascontroller();

module.exports = PeliculasInstancia