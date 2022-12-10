const {Sequelize} = require('sequelize');

const configConnection = new Sequelize('persons', 'pablo', '59202712Pa@', {
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