process.on('beforeExit',()=>{
    console.log("My event")
})
process.on('exit',()=>{
    console.log("My event exited...")
})
process.on('uncaughtException',err=>{
    console.error(err)
    process.exit()
})
process.stdin.resume()
console.fun()
 /**whenever exception is not handled and brought to event loop
  * ,uncaught will be triggered and node will be in loop state
so to end that to prevent damage use process.exit() */