function getUserName(){
    return new Promise((resolve,reject)=>{
        let name = 'Edie'
        resolve({name})
    })
 }
 function getUserAge(data){
    return new Promise((resolve,reject)=>{
        let age = 21
        resolve({...data,age})
    }) 
 }
 function getCompanyName(data){
    return new Promise((resolve,reject)=>{
        let company = 'aspire'
        resolve({...data,company})
    }) 
 }
 function print(data){
     console.log(data)
 }
//  getUserName()
//  .then(getUserAge)
//  .then(getCompanyName)
//  .then(print)
async function doTask(){
    const response1 = await getUserName()
    console.log(response1)
    const response2 = await getUserAge(response1)
    console.log(response2)
    const response3 = await getCompanyName(response2)
    print(response3)
}
doTask()