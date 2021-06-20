var express = require('express');
var app = express();
app.use('/public',express.static(__dirname+ '/public'));
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
app.get('/:word/echo',(req,res)=>{
    let {word} = req.params
    res.json({echo:word})
})
app.get('/now',
    (req,res,next)=>{
        req.time = new Date().toString()
        next()
    },
    (req,res)=>{
        res.json({time:req.time})
    }
)
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
