const os = require('os')
console.log(os.arch()) /**returns 32 or 64bit */
console.log(os.cpus().length) /**6 core unit : no of core unit does cpu has */
console.log(os.homedir())
console.log(os.userInfo())
console.log("Edwin"+os.EOL+"Thomas")
// console.log(`string text line 1
// string text line 2`);
// console.log("edwin\nthomas")