const express = require('express');

const app = express();

const path = require('path');

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
