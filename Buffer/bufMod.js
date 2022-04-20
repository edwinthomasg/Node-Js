import {Buffer} from "buffer"
let a = "beingcharlie"
let buf = Buffer.from(a)
buf.write("edwinthomas")
let slice = buf.slice(0,5)
console.log(slice.toString())
buf[0] = 72
console.log(slice.toString())
for(let value of buf)
console.log(value)
const buf = Buffer.from('edie')
const bufcopy = Buffer.from('charlie')
bufcopy.set(buf.subarray(1, 3), 1)

console.log(bufcopy.toString() )