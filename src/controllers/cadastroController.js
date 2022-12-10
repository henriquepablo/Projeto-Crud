exports.renderCadastro = (req, res) => {
    res.render('cadastro');
}

exports.cadastro = (req, res) => {
    console.log('cadastro:', req.body);
    res.redirect('/cadastro');
}