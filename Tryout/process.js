process.on('beforeExit',()=>{
    console.log("My event")
})
process.on('exit',()=>{
    console.log("My event exited")
})