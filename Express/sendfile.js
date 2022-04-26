var express = require('express')
var app = express()
app.get('/',(req,res)=>{
    res.send("Home page")
})
app.get('/welcome',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.listen(3080,()=>{
    console.log("Server is listening")
})
