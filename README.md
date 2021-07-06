# Discord.js-Bot-example

Select files numered!

select what you like in the 01 file

```js
// using config.json
const { token, prefix } = require("./config.json")
client.login(token)
//=======================================
// or using env
client.login(process.env.token)
```

## remember to put 01 + 02 files in a file called index.js

```js
const Discord = require('discord.js');

const client = new Discord.Client();

// we need this or bot will not work 

// login 

client.login(process.env.token);

// or 02.js + 01.js

const { token, prefix } = require("./config.json");

const prefix = "!"

//or in 01.js 

client.on('message', message => {

  if (message.content === `${prefix}pong) {

    message.channel.send("pong")

  }

})

client.login(token);

