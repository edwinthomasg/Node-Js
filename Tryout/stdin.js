process.stdin.on('data',data => {
    process.stdout.write(data)
    // process.exit() unless terminating keep on getting inputs from user
})
// process.stdin.on('readable',data => {
//    data = process.stdin.read()
//     console.log(data.toString()) after executing it terminate
//     // process.exit() 
// })