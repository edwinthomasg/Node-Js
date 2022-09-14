const fs = require('fs')
fs.copyFile('srcfile.js','copiedfile.js',()=>{
    console.log("Copied")
})
fs.readFile('copiedfile.js','utf8',function(err,data){
    console.log(data)
})
fs.rmdir('./folder',()=>{
    console.log("Removed")
})
fs.copyFile('./code.js','abc.js',() => console.log("Done"))