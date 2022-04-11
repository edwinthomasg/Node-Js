function prime(NUMBER){
    flag = true
    for(let i = 2; i<=NUMBER/2; i++){
        if(NUMBER % i == 0)
        {
            console.log("Non prime")
            return flag = false
         }
    }
}
prime(process.env.NUMBER)
if(flag)
console.log("Prime")