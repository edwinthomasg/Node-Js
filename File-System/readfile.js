let fs = require('fs')
fs.readFileSync('code.js','utf8',function(err,data){
    console.log(data)
})
console.log("End")