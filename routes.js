const express = require('express');

const route = express.Router();

const homeLogin = require('./src/controllers/loginController');

route.get('/', homeLogin.login);

module.exports = route;