const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = require('./config.json');

const embed = new Discord.RichEmbed()

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'config.prefixping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
