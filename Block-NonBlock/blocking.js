const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
function moreWork(){
    console.log("Rest of tasks to complete")
}
moreWork(); 
