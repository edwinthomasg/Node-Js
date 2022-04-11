// process.stdin.on('readable',()=>{
//     let input = process.stdin.read()
//     console.log(input)
// })
process.stdin.pipe(process.stdout)