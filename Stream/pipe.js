var fs = require('fs')

var readStream = fs.createReadStream('./random.txt','utf-8')
var writeStream = fs.createWriteStream('./newfile.txt')
    readStream.pipe(writeStream)
    console.log("File is written ...")
    
/**unlike readstream and writestream ,here we no need to wait for a event like data to occur without doing that we can directly pipe the file to be written in new file
 * can be used in servers too.
*/