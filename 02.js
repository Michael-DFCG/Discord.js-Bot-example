const prefix = "!"

client.on('message', message => {
  if (message.content === `${prefix}pong) {
    message.channel.send("pong")
  }
})
