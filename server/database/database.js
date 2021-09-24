const Sequelize = require('sequelize');

const connection = new Sequelize('nome_do_banco','root','senha_do_banco',{
    host:'localhost',
    dialect:'mysql2',
    timezone: '-03:00'
});


module.exports = connection;