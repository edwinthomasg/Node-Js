var path = require('path')

var Path = '/home/aspirenav654/Documents/Node-Js/Zlib/zlib.js'
console.log(path.basename(Path)) /**returns end path*/
console.log(path.dirname(Path)) /**returns whole path before basename*/
var join = path.join('user','profile','info') /**joins the strings and returns path */
console.log(join) 
var parse = path.parse(Path)
console.log(parse.ext)
var normalize = path.normalize('//home///aspirenav654//Documents/Node-Js/Zlib/zlib.js')
console.log(normalize) /** removes redundant */
var rel = path.relative(normalize,'/home/aspirenav654/Desktop/Js/Zlib/zlib.js')
console.log(rel)
console.log(path.resolve()) /**current dir */
console.log(path.isAbsolute('/home/aspirenav654/Desktop/Js/Zlib/zlib.js')) /**
returns false. It will check whether the given path is absolute or not */