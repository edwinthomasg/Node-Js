/**Express supports better routing unlike http we need to use else if for routing 
 * It also supports template engines
*/
var express = require('express')
var app = express()
app.get('/',(req,res)=>{
    res.send("Home Page")
})
app.get('/about',(req,res)=>{
    res.send("About Page")
})
app.get('/contact',(req,res)=>{
    res.send("Contact Page")
    res.render('<h1>Hello</h1>')
})
app.get('/profile',(req,res)=>{
    res.send("Profile Page")
})
app.get('/profile/:id',(req,res)=>{
    res.send("Profile Page of id = "+req.params.id) /**route params : useful when extension is fixed in that we have sub extension*/
})
app.get('/profile/:name',(req,res)=>{
    res.send("Profile Page of id = "+req.params.name) /**route params : useful when extension is fixed in that we have sub extension*/
})
app.listen(8090,()=>{
    console.log("Listening")
})