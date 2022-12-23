const imgModel = require('../database/models/imageModel');

exports.logado = (req, res) => {
    imgModel.find({}, (err, items) => {
        res.render('logado', {mensagem: '', items: items}); 
    });
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}