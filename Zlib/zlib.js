const zlib = require('zlib')
const fs = require('fs')
const os = require('os')
const gzib = zlib.createGzip()

const read =  fs.createReadStream(os.userInfo().homedir+'/Desktop/sample.pdf','utf-8')
const write = fs.createWriteStream(os.userInfo().homedir+'/Desktop/sample.pdf.gz')
console.log(os.userInfo())
read.pipe(gzib).pipe(write)