const express = require('express');

const app = express();

const path = require('path');

const routes = require('./routes');

const connect = require('./src/database/connect');

connect.connection();

app.use(express.urlencoded({extended: true}));

app.use('/public',express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.use(routes);