const repl = require('repl')
repl.start({
    ignoreUndefined:true, /* example let a and press enter you will see undefined below to that, it can be disabled by using this property */
    replMode:repl.REPL_MODE_STRICT
})