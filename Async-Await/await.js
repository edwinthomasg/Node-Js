async function run(){
    await setTimeout(()=>{console.log("Inner")},2*1000)
    console.log("Hello")
}
run()