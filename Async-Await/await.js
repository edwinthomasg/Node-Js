import fetch from 'node-fetch'

  fetch('https://github.com/').then((data)=>{
    console.log(data.json)
  })

 