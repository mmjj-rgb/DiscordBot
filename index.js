const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = require('./config.json');

const embed = new Discord.RichEmbed()

client.on('ready', () => {
 	console.log('Ready!');
});

 

client.on('message', message => {
    if (message.content === 'config.prefixping') {

       message.reply('pong');

       } else if (message.content === 'xd') {

           message.reply(':banana:');

       }


});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
