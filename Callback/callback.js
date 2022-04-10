function getUserName(callback){
   let name = 'edwin'
   callback({name},getCompanyName)
}
function getUserAge(data,callback){
    let age = 21
    callback({...data,age},print)
}
function getCompanyName(data,callback){
    let company = 'aspire'
    callback({...data,company})
}
function print(data){
    console.log(data)
}
getUserName(getUserAge)

// function task(callback){
//     callback()
// }
// function cbTask(){
//     console.log("Callback Execution")
// }
// task(cbTask)