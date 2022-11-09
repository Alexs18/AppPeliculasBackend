let Express = require('express');
let Router = Express.Router();
let {login, Register} = require('../Controllers/login.controller')

Router.post('/login', login);
Router.post('/register', Register)

module.exports = Router;