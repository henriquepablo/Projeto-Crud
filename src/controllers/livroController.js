exports.cadastrarLivro = (req, res) => {
    const nomeDoLivro = req.body.book;
    
    if(!nomeDoLivro) res.render('logado', {mensagem: 'Informe o nome do livro', type: 'atencao'});
    
    else {
        res.send(nomeDoLivro);
    }
}