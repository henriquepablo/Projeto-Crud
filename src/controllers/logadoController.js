exports.logado = (req, res) => {
    res.render('logado', {mensagem: ''});
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}