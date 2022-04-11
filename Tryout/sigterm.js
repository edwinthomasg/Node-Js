const exp = require('express')
const expOb = exp()
expOb.get('/',(req,res)=>{
    res.send("HI")
})
const server = expOb.listen(3000,()=>{
    console.log("Listening")
})
process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log("Ended Gracefully")
    })
})
// console.log(process.pid)
process.kill(process.pid, 'SIGTERM')