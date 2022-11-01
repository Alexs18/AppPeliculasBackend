const Express = require('express');
const Pool = require('./app/Database/index')

const app = Express();

app.get('/Peliculas', async(req, res)=>{
    let {rows} = await Pool.query('select * from peliculas');
    res.status(200).
    json({
        status:'ok',
        message:'estamos funcionando',
        data:rows
    })
});

app.get('/Relaciones', async(req, res)=>{
    let {rows} = await Pool.query(`select u.nombre, r.descripcion, (pe.descripcion) as pelis from users as u
	left join peliculas as pe
on u.id = pe.idusuario
	inner join roluser as r
on u.id = r.idusuario
`);
    res.status(200).
    json({
        status:'ok',
        message:'estamos funcionando',
        data:rows
    })
});

app.listen(8080, ()=>{
    console.log('estamos corriendo en el 8080')
})
