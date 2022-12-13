const express = require('express');

const app = express();

const path = require('path');

const routes = require('./routes');

const connect = require('./src/database/connect');

connect.connection()
    .then(() => {
        app.emit('Conectado');
    })
    .catch(error => console.log(error));

app.use(express.urlencoded({extended: true}));

app.use(routes);

app.use('/public',express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.on('Conectado', () => {

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
});


