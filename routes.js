const express = require('express');

const route = express.Router();

const homeLogin = require('./src/controllers/loginController');

const homeCadastro = require('./src/controllers/cadastroController');

const homeLogado = require('./src/controllers/logadoController');

const livro = require('./src/controllers/livroController');

const {verificaLogin} = require('./src/middlewares/middleware');

route.get('/', homeLogin.renderLogin);

route.get('/cadastro', homeCadastro.renderCadastro);

route.post('/cadastro', homeCadastro.cadastro);

route.post('/login', homeLogin.login);

route.get('/logado', verificaLogin, homeLogado.logado);

route.get('/logout', homeLogado.logout);

route.post('/cadastrarLivro',livro.cadastrarLivro);

module.exports = route;