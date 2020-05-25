const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class PingCommand extends Command {
	constructor() {
		super('ping', {
			aliases: ['ping', 'latency'],
			category: 'Utility',
			typing: true,
			description: '',
			ownerOnly: true,
			channel: 'guild',
		});
	}

	async exec(message) {
		if (this.channelID === 'guild') {
			message.reply("You can't use this command outside of Ayala!");
		}
		const pingEmbed = new Discord.MessageEmbed()
			.setDescription(`Pong!`)
			.setColor(29128);
		const sent = await message.reply(pingEmbed);
		const timeDiff =
			(sent.editedAt || sent.createdAt) -
			(message.editedAt || message.createdAt);
		const editEmbed = new Discord.MessageEmbed()
			.setDescription(`Pong!\n🔂 **RTT**: ${timeDiff} ms`)
			.setColor(29128);
		sent.edit(editEmbed);
	}
}

module.exports = PingCommand;
