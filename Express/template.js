var express = require('express')
var app = express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.send("Welcome page")
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/profile/:id',(req,res)=>{
    var data = {
                location:'chennai',
                company:'aspire',
                languages:['c','c++','java']
               }
    res.render('profile',{personid: req.params.id,
        data:data})
})
app.listen(3070,()=>{
    console.log("Server is listening")
})
/**In ejs file to output some data use <%= data %>
 * other than output use <% statement %>
 */