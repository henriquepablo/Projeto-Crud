const imgModel = require('../../src/database/models/imageModel');

const puppeteer = require('puppeteer');

const axios = require('axios');

const fs = require('fs');

const paht = require('path');

exports.cadastrarLivro = (req, res) => {
    const nomeDoLivro = req.body.book;
    
    if(!nomeDoLivro) res.render('logado', {mensagem: 'Informe o nome do livro', type: 'atencao'});
    
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
            res.redirect('/logado');
        })
        .catch(err => console.log(err));
        
    }
}