let mensagem = '';
let type = '';

const user = require('../database/models/user');

exports.renderCadastro = (req, res) => {
    setTimeout(() => {
        mensagem = ''
    }, 1000);
    res.render('cadastro', {mensagem});
    
}

exports.cadastro = async(req, res) => {
    const {email, password} = req.body;
    
    if(!email || !password) {
        mensagem = 'Campo nome ou senha está vazio';
        type = 'insucesso';
        res.redirect('/cadastro');
    }
    
    else if (await user.findOne({where: {email}})) {
        mensagem = 'Usuário já cadastrado na plataforma';
        console.log("I'm here");
        res.redirect('/cadastro');
    }
    
    else {
        const User = await user.create({email, password})
        .then(resul => {
            mensagem = 'Dados enviados';
            console.log(email, password);
            res.redirect('/cadastro');
        })
        .catch(err => console.log(err));
        
        
        //console.log(email, senha);    
        
    }
    
    //res.render('cadastro', {mensagem});
}