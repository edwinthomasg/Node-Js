let http = require('http')
let fs = require('fs')
http.createServer((req,res)=>{
    fs.readFile('code2.js','utf-8',(err,data)=>{
        if(err)
        console.log(err)
        res.write(data)
        res.end()
    })
    
}).listen(8080)