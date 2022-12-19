require('dotenv').config();

const {connect}  = require('mongoose');

module.exports = connect(`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.8gnl5qr.mongodb.net/${process.env.dataBase}?retryWrites=true&w=majority`) 