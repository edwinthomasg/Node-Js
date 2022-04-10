// function task(callback){
//     callback()
// }
// function cbFun(){
//     console.log(name) /**here name is not defined i.e it works in synchronous*/
// }
// task(cbFun)
// const name = 'edwin'

function task(callback){
    callback()
}
function cbFun(){
    setTimeout(()=> console.log(name),2*1000) /**here we make callback as asynchronus */
   
}
task(cbFun)
const name = 'edwin'