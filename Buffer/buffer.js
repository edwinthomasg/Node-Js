
// const arr = "[1,2,3]"
// const buf = Buffer.from(arr,"utf-8")
// console.log(buf)
// console.log(buf.length)

// let buffer = Buffer.alloc(10) /**allocates 10 bytes filled with zero's */
// console.log(buffer)
// buffer = Buffer.alloc(20,0b1010)
// console.log(buffer)
// buffer = Buffer.alloc(20,0x04)
// console.log(buffer)
// buffer = Buffer.alloc(20,0o07)
// console.log(buffer)
// buffer = Buffer.alloc(10,"as",'ascii')
// console.log(buffer)

// let bufArray = Buffer.from([1,2,3,4])
// console.log(bufArray)
// bufArray = Buffer.from('edwin')
// console.log(bufArray.toString()) /**it converts buffer format(bytes) to string */
// bufArray = Buffer.from(['edwin','thomas'])
// console.log(typeof bufArray)
// console.log(bufArray.length)

// let unsafeAlloc = Buffer.allocUnsafe(10)
// unsafeAlloc.write('edw')
// console.log(unsafeAlloc.toString())

// let buf2 = Buffer.from('thomas')
// let resBuf = Buffer.concat([unsafeAlloc,buf2])
// console.log(resBuf.toString())
// console.log(Buffer.poolSize)

// let unsafeBuffer = Buffer.allocUnsafe(8192/2)
// console.log(unsafeBuffer.toString())
// let testBuffer = Buffer.allocUnsafe(8192)
// console.log(testBuffer.toString())

let array = [1,2,3,4,5,6,7,8]
let name = 'edie'
let buff = Buffer.from(array)
console.log("Actual Buffer Value : ",buff)
let sliceBuf = buff.slice(0,4)
console.log("Sliced : ",sliceBuf)
console.log("After slicing : ",buff)
/**use fill method clear all existed values by fill(0) */

var x = Buffer.from('abcdef');
var y = x.slice(2,5);

console.log(y.toString());
console.log(x.toString());
