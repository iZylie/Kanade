const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class PingCommand extends Command {
	constructor() {
		super('ping', {
			aliases: ['ping', 'latency'],
			category: 'Utility',
			description: 'Use this to see your ping!',
			cooldown: 5000,
		});
	}

	async exec(message) {
		const pingEmbed = new Discord.MessageEmbed()
			.setDescription(`Pong!`)
			.setColor(29128)
			.setFooter(
				`Module: ${this.categoryID}\nCooldown ${
					(this.cooldown / 1000) * 1
				} seconds`,
			);
		const sent = await message.channel.send(pingEmbed);
		const timeDiff =
			(sent.editedAt || sent.createdAt) -
			(message.editedAt || message.createdAt);
		const editEmbed = new Discord.MessageEmbed()
			.setDescription(`🔂 **RTT**: ${timeDiff} ms`)
			.setColor(29128)
			.setFooter(
				`Module: ${this.categoryID}\nCooldown ${
					(this.cooldown / 1000) * 1
				} seconds`,
			);
		sent.edit(editEmbed);
	}
}

module.exports = PingCommand;
