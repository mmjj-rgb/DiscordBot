const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = require('./config.json');

const embed = new Discord.RichEmbed()

client.on('ready', () => {
        setInterval(() => {
          targetGuild = client.guilds.get('GUILD ID HERE')
          if(targetGuild) {
              client.user.setPresence({ game: { name: 'Jestem na : 'client.guilds.size + ' serwerach!', type: 'WATCHING' }, status: 'dnd'  })
                    .then(console.log)
                    .catch(console.error);
          }
    }, 1000 * 60 * 5);
});

 

client.on('message', message => {
    client.channels.cache.get('717435350200352811').send('Hello here!')
    if (message.content === 'config.prefixping') {

       message.reply('pong');

       } else if (message.content === 'xd') {

           message.reply(':banana:');

       }


});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
