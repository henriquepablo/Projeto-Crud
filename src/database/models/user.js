require('dotenv').config();

const {Sequelize, DataTypes} = require('sequelize');

const useBcrypt = require('sequelize-bcrypt');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
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