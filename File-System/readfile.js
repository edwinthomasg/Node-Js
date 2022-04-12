let fs = require('fs')
fs.readFile('code.js','utf8',function(err,data){
    console.log(data)
})
// console.log("End")
// fs.createReadStream('code.js','utf8',(err,data)=>console.log(data))
