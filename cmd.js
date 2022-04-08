let arg = process.argv
// let arg = process.argv.slice(2) it will remove the 1st two values of an array
console.log(arg)
let res = arg.filter((value)=>value % 2 == 0)
console.log(res)
/* 
  arg returns an array with command line arguments and 1st two values will be
  1.Path of node command being executed
  2.Path of file being executed
  3.We can remove that info by using slice method
 */

 