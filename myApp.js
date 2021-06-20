var express = require('express');
var app = express();
app.use('/public',express.static(__dirname+ '/public'));
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/index.html`)
})
app.get('/',(req,res)=>{res.send('Hello Express')})
// app.get('/json',(req,res)=>res.json({message:process.env.MESSAGE_STYLE}))
app.get('/json',(req,res)=>{
    let messageStyle = process.env.MESSAGE_STYLE || 'ignore'
    let messageCase = {
        ignore :(msg)=>msg,
        uppercase :(msg)=>msg.toUpperCase(),
    }
    res.json({message:messageCase[messageStyle]("Hello json")})
})
app.get('/json',(req,res)=>res.json({message:"Hello json"}))
































 module.exports = app;
