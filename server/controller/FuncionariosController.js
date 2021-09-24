const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Funcionarios = require('../model/funcionarios');


router.post('/CadastroFuncionario',(req,res)=>{
    let email = req.body.email;
    let userName = req.body.user;
    let password = req.body.password;

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password , salt);

    Funcionarios.create({
        email : email,
        userName : userName,
        password : hash
    }).then(res.redirect('/'));

});


module.exports = router;