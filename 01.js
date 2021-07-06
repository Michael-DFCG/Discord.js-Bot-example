const Discord = require('discord.js');
const client = new Discord.Client();
// we need this or bot will not work 
// login 

client.login(process.env.token);

// or 02.js + 01.js

const { token, prefix } = require("./config.json");

client.login(token);
