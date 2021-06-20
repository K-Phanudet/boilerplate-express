var express = require('express');
var app = express();
app.use('/public',express.static(__dirname+ '/public'));
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/index.html`)
})
app.get('/',(req,res)=>{res.send('Hello Express')})
app.get('/json',(req,res)=>{
    let msg = "Hello json"
    newMsg = process.env.MESSAGE_STYLE == 'uppercase' ? msg.toUpperCase() : msg
    res.json({message:newMsg})
})
app.get('/json',(req,res)=>res.json({message:"Hello json"}))
































 module.exports = app;
