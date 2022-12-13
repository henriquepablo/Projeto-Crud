const {Sequelize, DataTypes} = require('sequelize');

const useBcrypt = require('sequelize-bcrypt');

const sequelize = new Sequelize('persons', 'pablo', '59202712Pa@', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('Users', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});

User.sync();

useBcrypt(User, {
    field: 'password',
    rounds: 10,
    compare: 'authenticate'
});

module.exports = User;