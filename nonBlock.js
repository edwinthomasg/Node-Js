const fs = require('fs');
const data = fs.readFile('/file.md',(success,error)=>{
    if(error)
    throw error
    console.log(success)
});

function moreWork(){
    console.log("Rest of tasks to complete")
}
moreWork(); 