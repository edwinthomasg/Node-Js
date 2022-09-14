const { fork } = require('child_process')

const genChildProcess = () => {
    const child = fork('./ch.js')
    child.send('start-process')
    process.on('message',(data) => {
        console.log(`From child : ${data}`)
    })
    child.on('exit', (code) => {
        console.log(`exited with code ${code}`)
    })
    child.on('close',(code) => {
        console.log(`closed with ${code}`)
    })
}

genChildProcess()