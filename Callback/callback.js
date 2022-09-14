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

const arr = [1,2,3,4,5]
const cp = [10,20,...arr,...arr]
console.log(cp)

//deep copy vs shallow copy
let a = 10
let b = a
console.log("b : ",b)
let o1 = {
    name : 'edwin'
}
let o2 = o1
o2.name = 'joey'
console.log("o2 : ",o2)
console.log("o1 : ",o1)

let [x,y,z,] = [...arr]
console.log(x,y,z)

const obj1 = { name: 'edwin', x: 42 };
const obj2 = { name: 'akash', y: 13 , z: 10};

const clonedObj = { ...obj1 };
console.log(clonedObj)

const mergedObj = { ...obj2, ...obj1 };
console.log(mergedObj)

let promise = new Promise((success, fail) => {
    success('edwin')
})
.then(data => console.log(data))