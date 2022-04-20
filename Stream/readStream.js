const fs = require('fs')
var readStream = fs.createReadStream(__dirname+'/random.txt','utf8')
// var writeStream = fs.createWriteStream(__dirname+'/written.txt')
readStream.on('data',(chunk)=>{ 
    console.log("chunk received")
    // writeStream.write(chunk)
})
/**whenever we are using streams it will use buffer which is temporary storage from there we can get it as data chunk
 * very much helpful in video streaming,large file etc.. */