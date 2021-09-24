const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/public'));

//Banco de Dados
const connection = require('../database/database');

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso');
    }).catch((Error)=>{
        console.log(Error);
    });
//Rotas

app.get('/',(req,res)=>{res.render('./view/index')});

app.listen('3000',(Error)=>{     
    if(Error){
        console.log(Error);
    }else{
        console.log('Server ON!');
    }
});