const fs = require('fs');
const data = fs.readFile('blocking.js','utf8',(error,success)=>{
    if(error)
    throw error
    console.log(success)
});

function moreWork(){
    console.log("Rest of tasks to complete")
}
moreWork(); 
// console.log(__filename)