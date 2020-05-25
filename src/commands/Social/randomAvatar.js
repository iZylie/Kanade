const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class avatarCommand extends Command {
	constructor() {
		super('randomavatar', {
			aliases: ['randomavatar', 'ravatar'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'Sends a random avatar.',
		});
	}

	async exec(message, args) {
		const avatar = await neko.sfw.avatar();
		const avatarEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setAuthor(
				`${message.author.username}, there, a random avatar, you might like one of them!`,
				`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
				avatar.url,
			)
			.setImage(avatar.url)
			.setFooter(`Module: ${this.categoryID}`)
			.setFooter(
				`Module: ${this.categoryID} / Cooldown ${
					(this.cooldown / 1000) * 1
				} seconds`,
			);
		message.channel.send(avatarEmbed);
	}
}

module.exports = avatarCommand;
