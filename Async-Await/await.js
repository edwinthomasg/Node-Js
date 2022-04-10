// const fs = require('fs')
// async function run(){
//     await fs.readFile('async.js','utf8',(err,data)=>console.log(data))
//     console.log("Hello")
// }
// run()
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  
  f1();