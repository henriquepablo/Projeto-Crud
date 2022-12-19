exports.logado = (req, res) => {
    res.render('logado');
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}