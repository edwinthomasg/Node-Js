function run(){
    console.log("Run")
}
let clear = setTimeout(run,0) /**Means that it will execute rest of tasks
and then only it will print Run statement even its zero delay */
// clearTimeout(clear)
function other(){
    console.log("Other tasks")
}
other()