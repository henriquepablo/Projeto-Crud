let mensagem = '';
let type = '';

const user = require('../database/models/user');

const bcrypt = require('bcrypt');

const imgModel = require('../database/models/imageModel');

exports.renderLogin = (req, res) => {
    setTimeout(() => {
        mensagem = ''
    }, 1000);
    if(req.session.user) {
        return res.redirect('/logado'); 
       }
    res.render('login', {mensagem, type});
}

exports.login = async(req, res) => {
    const {email, password} = req.body;

    const login = await user.findOne({email});

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

    else if(!await bcrypt.compare(password, login.password)) {
        mensagem = 'Email ou senha incorreto';

        type = 'atencao';

        console.log('Email ou senha incorreto');
        res.redirect('/');
    }

    else {
        mensagem = '';
        req.session.user = req.body;
        res.redirect('/logado');
    }

}