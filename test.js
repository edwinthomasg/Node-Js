// const { execFile } = require("child_process")

// // let ar = [1,2,3]
// // val = 20
// // ar.forEach((val)=>{
// //     console.log(val)
// // })
// // for(let val of ar)
// // console.log(val)

// // execFile("./file.sh", (err, stdout, stderr) => {
// //     if(err)
// //     console.log("Command Error : ",err)
// //     if(stderr)
// //     console.log("File error : ",stderr)
// //     console.log("output : ",stdout)
// // })

// const iterate = (start = 0, end = Infinity) => {
//     let index = 0
//     let nextIndex = start
//     const iterator = {
//         next(){
//             console.log("start : ",start)
//             console.log("nextIndex : ",nextIndex)
//             let result
//             if(nextIndex < 10)
//                 {
//                     result = { value: nextIndex, done: false}
//                     index++
//                     nextIndex++
//                     return result
//                 }
//             return { value: index, done: true }
//         }
//     }
//     return iterator
// }

// let itr = iterate(1,10)
// let res = itr.next()
// while(!res.done)
// {
//     console.log(res)
//     res = itr.next()
// }

function* gen(start, end){
    for(var i = 0; i < end; i++)
    {
        yield i
    }
    return i
}

// let generator = gen(1,5)
// let res = generator.next()

// while(!res.done)
// {
//     console.log(res)
//     res = generator.next()
// }

function* sample(){
    yield 1
    yield 2
}
let res = sample()
console.log(res.next())
console.log(res.next())
