const livro = require('../database/models/imageModel');

const enviarMensagem = require('./logadoController');

exports.delete = async (req, res) => {
    await livro.findByIdAndDelete(req.params.id);
    enviarMensagem.mensagemAux('Livro apagado', 'sucesso');
    res.redirect('/logado');
}