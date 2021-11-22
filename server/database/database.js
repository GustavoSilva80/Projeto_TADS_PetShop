const Sequelize = require('sequelize');

const connection = new Sequelize('projeto','root','sqL1010//-',{
    host:'localhost',
    dialect:'mysql',
    timezone: '-03:00'
});


module.exports = connection;