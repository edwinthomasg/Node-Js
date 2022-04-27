const zlib = require('zlib')
const gzip = zlib.createUnzip()
const fs = require('fs')
const os = require('os')

const read = fs.createReadStream(os.userInfo().homedir+'/Desktop/sample.pdf.gz')
const write = fs.createWriteStream(os.userInfo().homedir+'/Desktop/decomp.pdf')

read.pipe(gzip).pipe(write)