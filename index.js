const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/public'));


app.get('/',(req,res)=>{res.render('./view/index')});

app.listen('3000',(Error)=>{     
    if(Error){
        console.log(Error);
    }else{
        console.log('Server ON!');
    }
});