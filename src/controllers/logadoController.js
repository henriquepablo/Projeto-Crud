const imgModel = require('../database/models/imageModel');

let mensagem;
let type;

setTimeout(() => {
    mensagem = '';
}, 1000);

exports.mensagemAux = (m, t) => {
    mensagem = m;
    type = t;
}

exports.logado = (req, res) => {
    imgModel.find({}, (err, items) => {
        res.render('logado', {mensagem, type, items: items}); 
        mensagem = '';
    });
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}