const {
  Command
} = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class waifuCommand extends Command {
  constructor() {
    super('waifu', {
      aliases: ['waifu'],
      channel: 'guild',
      cooldown: 10000,
      description: {
        description: 'Sends a random waifu.',
        usage: '`k!waifu`',
      },
    });
  }

  async exec(message, args) {
    const waifu = await neko.sfw.waifu();
    const waifuEmbed = new Discord.MessageEmbed()
      .setColor(29128)
      .setAuthor(
        `${message.author.username}, there, a random waifu!`,
        `${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
        waifu.url,
      )
      .setImage(waifu.url)
      .setFooter(`Module: ${this.categoryID}`)
      .setFooter(
        `Module: ${this.categoryID} / Cooldown ${
					(this.cooldown / 1000) * 1
				} seconds`,
      );
    message.channel.send(waifuEmbed);
  }
}

module.exports = waifuCommand;
