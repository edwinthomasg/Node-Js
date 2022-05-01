const exp = require('express')

const eOb = exp()

eOb.set('view engine','ejs')
eOb.get('/',(req,res)=>{
    res.send("Start")
})
eOb.get('/about',(req,res)=>{
    res.render('about')
})
eOb.get('/home',(req,res)=>{
    res.render('home')
})

eOb.listen(3436,()=>console.log("Express running"))

/**Note : Views is a folder that contains all web pages to
 * render.Create views folder and place all .ejs file inside it
 */