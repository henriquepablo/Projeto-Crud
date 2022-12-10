const express = require('express');

const app = express();

const path = require('path');

const routes = require('./routes');

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.use(routes);