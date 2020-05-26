const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class factCommand extends Command {
	constructor() {
		super('fact', {
			aliases: ['fact'],
			channel: 'guild',
			cooldown: 10000,
			description: 'Sends a random fact.',
		});
	}

	async exec(message) {
		const fact = await neko.sfw.fact();
		const factEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setAuthor(
				`${message.author.username}, here's a random fact for you!`,
				`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
			)
			.setDescription(fact.fact)
			.setFooter(`Module: ${this.categoryID}`)
			.setFooter(
				`Module: ${this.categoryID} / Cooldown ${
					(this.cooldown / 1000) * 1
				} seconds`,
			);
		message.channel.send(factEmbed);
	}
}

module.exports = factCommand;
