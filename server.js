require('dotenv').config();
const express = require('express');

const app = express();

const path = require('path');

const routes = require('./routes');

const connect = require('./src/database/connect');

connect.then(result => {
    console.log('Connected');
    app.emit('Conectado');
})
.catch(err => console.log(err));

const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded({extended: true}));

const sessionOptions = session({
    secret: process.env.secret,
    store: MongoStore.create({ mongoUrl: `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.8gnl5qr.mongodb.net/${process.env.dataBase}?retryWrites=true&w=majority` }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);

app.use(routes);

app.use('/public',express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.on('Conectado', () => {

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
});


