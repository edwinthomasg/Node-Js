const events = require('events')
const fs = require('fs')
const eventOb = new events()
eventOb.on('myEvent',()=>{
    console.log("File read")
})
eventOb.on('close',()=>{
    console.log("Close")
})
fs.readFile('async.js','utf8',()=>{
    eventOb.emit('myEvent')
    eventOb.emit('close')
})

/**event emitters are the custom events.we can have nested emit */