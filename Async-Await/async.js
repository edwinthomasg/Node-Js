import fet from 'node-fetch'
fet.Fetch(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
        return data.json()
    }).then((parsedData)=>{
        console.log(parsedData)
    })
})
