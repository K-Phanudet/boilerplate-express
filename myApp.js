var express = require('express');
var app = express();
app.use('/public',express.static(__dirname+ '/public'));
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/index.html`)
})
app.get('/',(req,res)=>{res.send('Hello Express')})


































 module.exports = app;
