const exp = require('express')

const eOb = exp()
eOb.set('view engine','ejs')
eOb.get('/',(req,res)=>{
    res.render("index")
})
eOb.get('/',(req,res)=>{
    res.render("About")
})
eOb.listen(3456,()=>console.log("Express running"))