const imgModel = require('../../src/database/models/imageModel');

const puppeteer = require('puppeteer');

const enviarMensagem = require('./logadoController');

const axios = require('axios');

const fs = require('fs');

const paht = require('path');

exports.cadastrarLivro = async (req, res) => {
    const nomeDoLivro = req.body.book;
    
    const livroExiste = await imgModel.findOne({nome: nomeDoLivro});


    if(!nomeDoLivro) {
        enviarMensagem.mensagemAux('Nome do livro está em branco', 'insucesso');
        res.redirect('/logado');
    }

    else if (livroExiste) {
        enviarMensagem.mensagemAux('Livro já cadastrado', 'atencao');
        res.redirect('/logado');
    }
    
    else {
        let imgUrl;
        (async () => {
            const browser = await puppeteer.launch();

            const page = await browser.newPage();

            await page.goto('https://www.google.com/imghp');

            await page.type('input', nomeDoLivro);

            await page.keyboard.press('Enter');

            const element = await page.waitForSelector('.islrc div > img');

            await element.click();

            imgUrl = await page.evaluate(() => {
                return document.querySelector('.islrc div > img').src;
            });
            
            await browser.close();

        })()
        .then(async () => {
            await imgModel.create({nome: nomeDoLivro, url: imgUrl});
            enviarMensagem.mensagemAux('Livro cadastrado', 'sucesso');
            res.redirect('/logado');
        })
        .catch(err => console.log(err));
        
    }
}