require('dotenv').config();
const {Sequelize} = require('sequelize');

const configConnection = new Sequelize(process.env.database, process.env.user, process.env.password, {
    host: 'localhost',
    dialect: 'mysql'
});

exports.connection = async() => {
    try {
        await configConnection.authenticate();
        console.log('Conected');
    } catch (error) {
        console.log(error);
    }  
} 