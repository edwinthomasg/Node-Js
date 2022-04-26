const fs = require('fs')
var readStream = fs.createReadStream(__dirname+'/random.txt','utf8')
// var writeStream = fs.createWriteStream(__dirname+'/written.txt')
readStream.on('data',(chunk)=>{ 
    console.log("chunk received")
    // writeStream.write(chunk)
})
/**whenever we are using streams it will use buffer which is temporary storage from there we can get it as data chunk
 * very much helpful in video streaming,large file etc.. */
/**Difference bw readfile vs stream
 * In streams we can get data in a chunk manner so no need to wait for entire data to get ready for transfer to the user
 * Whereas in readFile we need to wait for entire file to be ready to fetch and available to user.
 * So streams are very much useful because as soon as the chunk is ready we can send it to user
 */