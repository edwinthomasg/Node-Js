var express = require('express')
var app = express()
var parser = require('body-parser')

app.use(parser.urlencoded({ extended: false }))
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send("Home")
})
app.get('/form',(req,res)=>{
    res.render('formreg')
})
app.post(   )
app.listen(3040)
console.log("Server listening")

