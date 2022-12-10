exports.renderLogin = (req, res) => {
    res.render('login');
}

exports.login = (req, res) => {
    console.log(req.body);
    res.redirect('/');
}