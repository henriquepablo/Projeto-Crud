let mensagem = '';
let type = '';

exports.renderCadastro = (req, res) => {
    setTimeout(() => {
        mensagem = ''
    }, 1000);
    res.render('cadastro', {mensagem});
    
}

exports.cadastro = (req, res) => {
    const {nome, senha} = req.body;
    
    if(!nome || !senha) {
        mensagem = 'Campo nome ou senha está vazio';
        type = 'insucesso';
        res.redirect('/cadastro');
    }

    else {
        mensagem = 'Dados enviados';
        type = 'sucesso';
        console.log(nome, senha);    
        res.redirect('/cadastro');
    }
    
    //res.render('cadastro', {mensagem});
}