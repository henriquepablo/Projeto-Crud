let mensagem = '';
let type = '';

const user = require('../database/models/user');

exports.renderCadastro = (req, res) => {
    setTimeout(() => {
        mensagem = ''
    }, 1000);
    res.render('cadastro', {mensagem, type});
    
}

exports.cadastro = async(req, res) => {
    const {email, password} = req.body;
    
    if(!email || !password) {
        mensagem = 'Campo email ou senha está em branco';
        
        type = 'atencao';
        
        res.redirect('/cadastro');
    }

    else if (await user.findOne({where: {email}})) {
        mensagem = 'Usuário já cadastrado na plataforma';
        
        type = 'insucesso';
        
        res.redirect('/cadastro');
    }
    
    else {
        const User = await user.create({email, password})
        .then(resul => {
            mensagem = 'Cadastrado com sucesso';
            
            type = 'sucesso';
            
            console.log('Cadastrado com sucesso');
            
            res.redirect('/cadastro');
        })
        .catch(err => console.log(err));    
    }   
}