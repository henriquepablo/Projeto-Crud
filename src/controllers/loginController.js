let mensagem = '';
let type = '';

const user = require('../database/models/user');

exports.renderLogin = (req, res) => {
    setTimeout(() => {
        mensagem = ''
    }, 1000);
    res.render('login', {mensagem, type});
}

exports.login = async(req, res) => {
    
    const {email, password} = req.body;

    const login = await user.findOne({where: {email}});

    if(!email || !password) {
        mensagem = 'Campo email ou senha está em branco';
        
        type = 'atencao'
        
        console.log('Campo email ou senha está em branco');
        res.redirect('/');
    }

    else if(!login) {
        mensagem = 'Usuário não encontrado'
        
        type = 'insucesso'
        
        console.log('Usuário não encontrado');
        res.redirect('/');
    }

    else if(!login.authenticate(password)) {
        mensagem = 'Email ou senha incorreto';

        type = 'atencao';

        console.log('Email ou senha incorreto');
        res.redirect('/');
    }

    else {
        res.redirect('/logado');
    }

}