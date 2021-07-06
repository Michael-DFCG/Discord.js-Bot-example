const prefix = "!"


//or in 01.js 


client.on('message', message => {
  if (message.content === `${prefix}pong) {
    message.channel.send("pong")
  }
})
