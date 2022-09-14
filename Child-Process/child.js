let {exec} = require('child_process')
exec('find /',(error,stdout,stderr)=>{
    if(error)
    console.log(`Error : ${error.message}`)
    if(error)
    console.log(`Error : ${error.message}`)
    console.log(`output : ${stdout}`)
})
// let {execFile} = require('child_process')
// const { stderr } = require('process')
// execFile('./some.sh',(error,stdout,stderr)=>{
//     if(error)
//     console.log(`Command Error : ${error.message}`)
//     if(stderr)
//     console.log(`Error : ${stderr.message}`)
//     console.log(stdout)
// })
// let {spawn} = require('child_process')
// let child = spawn('find',['/'])
// child.stdout.on('data',(data)=>{
//     console.log(`Received data : ${data}`)
// })
// child.stderr.on('data',(data)=>{
//     console.log(`Std Error : ${data}`)
// })
// child.on('error',(error)=>{
//     console.log(`Error : ${error}`)
// })
// child.on('exit',(code,signal)=>{
//     console.log("done")
// })