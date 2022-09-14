import fetch from 'node-fetch'

// async function run(){
//     console.log("Start")
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => console.log(data.json()))
//     // res.json()
//     // console.log(data)
//     .then(() => console.log("end"))
//     // console.log("End")
// }
// run()


async function run(){
    console.log("Start")
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data = await res.json()
    console.log("data : ",data)
    console.log("End")
}
run() 
console.log("process id : ",process.pid)
// here start -> end -> fetch  asynchronous
