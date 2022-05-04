var express = require('express')
var app = express()

app.set('view engine','ejs')
app.use('/home',express.static('public'))
app.get('/',(req,res)=>{
    res.send("Home")
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.listen(3040)
console.log("Server listening")

