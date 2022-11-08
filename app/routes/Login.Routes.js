let Express = require('express');
let Router = Express.Router();
let {login} = require('../Controllers/login.controller')

Router.post('/login', login)

module.exports = Router;