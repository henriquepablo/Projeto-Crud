const express = require('express');

const route = express.Router();

const homeLogin = require('./src/controllers/loginController');

const homeCadastro = require('./src/controllers/cadastroController');

route.get('/', homeLogin.renderLogin);

route.get('/cadastro', homeCadastro.renderCadastro);

route.post('/cadastro', homeCadastro.cadastro);

route.post('/login', homeLogin.login);

module.exports = route;