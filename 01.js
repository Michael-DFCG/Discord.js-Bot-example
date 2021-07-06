const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.token);

// or 

const token = require("./config.json");

client.login(token);
