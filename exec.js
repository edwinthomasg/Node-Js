const {execFile} = require("child_process")
let date = new Date()
let branch = `feature/upload/${date.getDate()}-${date.getMonth()}-${date.getFullYear()}/${date.getTime()}`

execFile("./git.sh",[branch],(err, stdout, stderr) => {
    if(err)
    {
        console.log("err : ",err)
    }
    if(stderr)
    {
        console.log("std err : ",stderr)
    }
    if(stdout)
    {
        console.log("output : ",stdout)
    }
})

// const fs = require("fs")

// let promise = () => {
//     return new Promise((success, failure) => {
//         fs.writeFile("./created/file.txt", "hello world", (err, data) => {
//             if(err)
//             failure(false)
//             console.log("written successfully")
//             success(true)
//         })
//     })
// } 
// let exec = () => {
//     return new Promise((success, failure) => {
//         execFile("./file.sh",(err, stdout, stderr) => {
//             if(err)
//             {
//                 console.log("err : ",err)
//                 failure(false)
//             }
//              if(stderr)
//             {
//                 console.log("std err : ",stderr)
//                 failure(false)
//             }
//             if(stdout)
//             {
//                 console.log("output : ",stdout)
//                 success(true)
//             }
//         })
//     })
// }
// const createFile = async() => {
//     console.log("before file creation")
//     const res = await promise()
//     console.log("after file creation : ",res)
//     const ex = await exec()
//     console.log("Ex : ",ex)
//     return ex
// }
// let end = 3
// for(var i = 0; i < end; i++)
// {
//     createFile().then((data) => {
//       console.log("from create file : ",data)
//       console.log("-----------------------------------")
//     })
//     .catch(err => console.log(err))
    
// }

// async function someFunction(items) {
//     items.forEach( async(i) => {
//        const res = await someAPICall(i);
//        console.log('--->', res);
//     });
//   }
//   function someAPICall(param) {
//       return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//           resolve("Resolved" + param)
//         },param);
//       })
//   }
//   someFunction(['3000','8000','1000','4000']);

// function testPromise(time) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(`Processing ${time}`);
//         resolve(time);
//       }, time);
//     });
//   }
  
//   let result = [3000,2000,1000, 4000].reduce( (accumulatorPromise, nextID) => {
//     return accumulatorPromise.then(() => {
//       return testPromise(nextID);
//     });
//   }, Promise.resolve());
  
//   result.then(e => {
//     console.log("All Promises Resolved !!✨")
//   });



  
  
