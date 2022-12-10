const express = require('express');

const route = express.Router();

const homeLogin = require('./src/controllers/loginController');

route.get('/', homeLogin.renderLogin);

route.post('/login', homeLogin.login);

module.exports = route;