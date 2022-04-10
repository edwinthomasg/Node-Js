function getUserName(){
    return new Promise((resolve,reject)=>{
        let name = 'Edie'
        resolve({name})
    })
 }
 function getUserAge(data,callback){
    return new Promise((resolve,reject)=>{
        let age = 21
        resolve({...data,age})
    }) 
 }
 function getCompanyName(data,callback){
    return new Promise((resolve,reject)=>{
        let company = 'aspire'
        resolve({...data,company})
    }) 
 }
 function print(data){
     console.log(data)
 }
 getUserName()
 .then(getUserAge)
 .then(getCompanyName)
 .then(print)