let Pool = require('../Database/index');
let bcrypt = require('bcrypt')

class Login{
    async login(req, res){

       let {password, email} = req.body;
       try {
        console.log(`select * from users where email = '${email}'`);
        let {rows} = await Pool.query(`select * from users where email = '${email}'`);
        
        if (rows[0].password === password) {
            res.status(200).json({
                message:`El usuario ${rows[0].nombre} se logió correctamente`,
            })   
        }else{
            res.status(400).json({
                message:`Las contraseñas no coinciden`,
            })
        }
       
       } catch (error) {
        console.log(error)
       }
       
    }
    async Register(req, res){
        let {nombre, apellido, password, email} = req.body;
        let newpassword = await bcrypt.hash(password, 10);

        let UserRegisted = await Pool.query(`insert into users (nombre, apellido, password, email) values($1, $2, $3, $4)
        RETURNING id, password, nombre`, [nombre, apellido, newpassword, email])
        res.status(200).json({
            message:'usuario Registrado correctamente',
            id:UserRegisted.rows
        })
    }
}

let InstanciaLogin = new Login();
module.exports = InstanciaLogin;