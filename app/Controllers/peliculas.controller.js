const Pool = require('../Database/index')
class peliculascontroller{

    async GetMovies(req, res){
       let {rows} = await Pool.query('select * from peliculas');
       res.status(200).
       json({
        status:'ok',
        message:'estamos funcionando',
        data:rows
    })
    }

}

let PeliculasInstancia = new peliculascontroller();

module.exports = PeliculasInstancia