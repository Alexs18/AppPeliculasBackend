const pg = require('pg');

const Pool = new pg.Pool({
    port:5432,
    database:'Peliculas',
    host:'localhost',
    user:'postgres',
    password:'12345'
});

module.exports = Pool

// (async()=>{
//     let Resultado = await Pool.query('select * from peliculas')
//     let {rows} = Resultado;
//     console.log(rows)
// })()

// Pool.query('select * from peliculas').then((value)=>{
//     let {rows} = value;
//     console.log(rows)
// }).catch(error=> console.log(error.message))

