var express = require('express')
var app = express()
app.set('view engine','ejs')
app.get('/profile',(req,res)=>{
    // console.log(req.query)
    res.render('profile',{qs:req.query})
})
app.listen(3676,()=>{
    console.log("Listening")
})