let Pool = require('../Database/index');

class Login{
    async login(req, res){

       let {password, email} = req.body;
       try {
        let {rows} = await Pool.query('select * from users');
        debugger
       for (const usuarios of rows) {
        debugger
            if (usuarios.password === password && usuarios.email === email) {
                res.status(200).
                json({
                    message:'el usuario esta logeado'
                })
            }
            else{
                res.status(404).
                json({
                    message:'el usuario no existe'
                })
            } 
       }
       } catch (error) {
        console.log(error)
       }
       
    }
    logout(){

    }
}

let InstanciaLogin = new Login();
module.exports = InstanciaLogin;