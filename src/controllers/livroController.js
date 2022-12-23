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
        .then(() => downloadImage());

        async function downloadImage() {

            const creatArchive = fs.createWriteStream(`${nomeDoLivro.split(' ').join('')}.png`, {autoClose: true});
    
            try {
                const response = await axios({
                    method: 'GET',
                    url: imgUrl,
                    responseType: 'stream'
                });

                response.data.pipe(creatArchive);

                creatArchive.on('finish', () => {
                    const imgObj = {
                        nome: nomeDoLivro,
                        img: {
                            data: fs.readFileSync(`${nomeDoLivro.split(' ').join('')}.png`),
                            contentType: 'image/png'
                        }
                    }
                    
                    imgModel.create(imgObj, (err, item) => {
                        
                        if(err) console.log(err);
                        
                        else {
                            item.save();
                            // fs.unlink(`${paht.resolve(__dirname, '..', '..'), 'Ohomemdegiz.png'}`, () => {
                            fs.unlink(`${paht.resolve(__dirname, '..', '..'), `${nomeDoLivro.split(' ').join('')}.png`}`, () => {
                                try {
                                    console.log('Imagem apagada');
                                }catch(er) {
                                    console.log('Imagem não apagada');
                                }
                
                            });
                
                        }
                    
                    });
                
                });

                console.log('Imagem baixada e upload concluído');


                await res.redirect('/logado');
            } catch(err) {
                console.log(err);
            }
        }
    }
}