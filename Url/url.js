const url = require('url')
let weburl = 'https://localhost:3090/nodejs/met_path_isabsolute.asp?name=edi'
let parse = url.parse(weburl)
console.log(parse.hostname)
console.log(parse.host)
console.log(parse.href)
console.log(parse.path)
console.log(parse.protocol)
console.log(parse.port)
console.log(parse.query)
console.log(parse.search)