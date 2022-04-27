 async function input(){
    return 10
}
input()
        .then((number)=> number*number)
        .then((result)=>console.log(result))
