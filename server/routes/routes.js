const express = require('express');
const router = express.Router();


router.get('/painel',(req,res)=>{
    let val = req.session.user;
    res.render('./view/main',{user:val});
});

module.exports = router;