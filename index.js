const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `!embed`) {
            const embed = new Discord.RichEmbed()
            .setTitle("This is your title, it can hold 256 characters")
            .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
            .setColor(0x00AE86)
            .setDescription("This is the main body of text, it can hold 2048 characters.")
            .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
            .setImage("http://i.imgur.com/yVpymuV.png")
            .setThumbnail("http://i.imgur.com/p2qNFag.png")
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
            .addField("This is a field title, it can hold 256 characters",
            "This is a field value, it can hold 1024 characters.")
            .addField("Inline Field", "They can also be inline.", true)
            .addBlankField(true)
            .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
 
  message.channel.send({embed});
}

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
