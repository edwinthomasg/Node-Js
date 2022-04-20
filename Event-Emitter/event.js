const event = require('events')
const eventOb = new event()
eventOb.on('myEvent',()=>{
    console.log("Hello")
})
eventOb.on('myEvent',()=>{
    console.log("HI")
})
eventOb.emit('myEvent')