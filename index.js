const Express = require('express');
const Pool = require('./app/Database/index');
const app = Express();
const RouterPeliculas = require('./app/routes/Peliculas.Routes');
const RouterRelaciones = require('./app/routes/Relaciones.Routes');


app.use(RouterPeliculas, RouterRelaciones);

app.listen(3000, ()=>{
    console.log('estamos corriendo en el 3000')
})
