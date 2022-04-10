count = 0
let clear = setInterval(()=>{
    if(count < 5)
    console.log("Hello")
    else
    clearInterval(clear)
     count++
    },2*1000)
