console.log(arguments)

/**In node js, module is nothing but a file or folder that contains code to run in node.
 * Console statement here is treated internally as
 * function(exports,module,require,__filename,__dirname){4
 * console.log(arguments)
 * always return module.exports
 * It is said to be wrapping function 
 * In browser it is different , it will throw undefined
 * }
 */