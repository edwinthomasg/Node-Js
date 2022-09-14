const show = () => {
    console.log("Child Module here ...")
    return true
}

process.on('message', (msg) => {
    console.log("From parent : ",msg)
    for(var i = 0; i < 5; i++)
    {
        const success = show()
        process.send(success)
    }
    process.exit(1)
})