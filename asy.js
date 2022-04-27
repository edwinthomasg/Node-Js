// var fs = require('fs')

// fs.readFile('arrowcs.js','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
// console.log("Hello")
const fs=require('fs');
function file(filename,callback)
{
    if(typeof filename!='string')
    {
        // return process.nextTick(callback,new TypeError('be string'));
        console.log("errr")
       
    }
    fs.stat(filename,(err,data)=>
    {
        if(err)
         throw err;
        callback(null,data.size);
    })
}
file(__filename,(err,size)=>
{
    if (err) throw err;
    console.log("data...",size);
})
console.log("hii")
console.log("hello")