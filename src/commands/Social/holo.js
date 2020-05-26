const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class holoCommand extends Command {
	constructor() {
		super('holo', {
			aliases: ['holo'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'Sends a radom holo image/gif.',
		});
	}

	async exec(message, args) {
		const holo = await neko.sfw.holo();
		const holoEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setAuthor(
				`${message.author.username}, there, a random holo image/gif!`,
				`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
				holo.url,
			)
			.setImage(holo.url)
			.setFooter(`Module: ${this.categoryID}`)
			.setFooter(
				`Module: ${this.categoryID} / Cooldown ${
					(this.cooldown / 1000) * 1
				} seconds`,
			);
		message.channel.send(holoEmbed);
	}
}

// module.exports = holoCommand;
