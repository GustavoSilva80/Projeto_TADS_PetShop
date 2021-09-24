const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/public'));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set(bodyParser.json());

//Banco de Dados
const connection = require('./server/database/database')
const funcionarios = require('./server/model/funcionarios');

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso');
    }).catch((Error)=>{
        console.log(Error);
    });
//Session
const session = require('express-session');


app.use(session({
    secret:'sdlaslkdjasldjsajdasjdlasdmasl', cookie:{maxAge:60000}, resave:false, saveUninitialized:false    
}));

app.use(function(req,res,next){
    res.locals.user = req.session.user;
    next();
});
//Rotas
const funcionariosController = require('./server/controller/FuncionariosController');
const login = require('./server/login/login');
const rotas = require('./server/routes/routes');

app.use('/',rotas);
app.use('/',funcionariosController);
app.use('/',login);
app.get('/',(req,res)=>{res.render('./view/index')});

app.listen('3000',(Error)=>{     
    if(Error){
        console.log(Error);
    }else{
        console.log('Server ON!');
    }
});