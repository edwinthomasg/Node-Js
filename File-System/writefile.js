var fs = require('fs')
fs.writeFile('code2.js','console.log("Hello")',function(err){
    console.log("Data Saved")
})
fs.writeFile('code.js','console.log("Overriding")',function(err){
    console.log("Data Saved")
}) /**it will simply erase all contents from the file it will replace it with new code */
fs.appendFile('code.js','console.log("Appended code")',function(err){
    console.log("File appended")
})
fs.writeFile('code3.js','console.log("New File")',()=>{
    console.log("Written")
})
console.log("Ouside File")