const ws = require('ws')
const wss = new ws.Server({port: 3000});



wss.on('connection', (client)=>{
    console.log("New client connected")

    client.onmessage = function(msg)
    {
        wss.clients.forEach((cl)=>{
            if(client!=cl)
            {
                cl.send(msg.data)
            }
        })

    }
})