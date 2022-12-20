exports.verificaLogin = (req, res, next) => {
    if(!req.session.user) {
        req.session.save(() => res.render('login', {mensagem: 'Você precisa fazer login', type: 'atencao'}));
        return;
    }
    next();
}