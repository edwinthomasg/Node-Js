import fetch from 'node-fetch'

// async function run(){
//     console.log("Start")
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await res.json()
//     console.log(data)
//     console.log("End")
// }
// run()


async function run(){
    console.log("Start")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data)=>{
        console.log("Fetch")
    })
    
    console.log("End")
}
run() 
// here start -> end -> fetch  asynchronous
