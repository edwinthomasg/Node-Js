let repl = require('repl')
const local = repl.start()
local.on('exit',()=>{
    console.log("Ended Repl");
    process.exit()
})