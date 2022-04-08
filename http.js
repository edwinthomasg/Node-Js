const http = require('http')
const hs = http.createServer((req,res)=>{
    res.end("Bye bye")
})
hs.listen(4678,()=>{
    console.log("Server is running")
})