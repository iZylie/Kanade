const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class PingCommand extends Command {
	constructor() {
		super('ping', {
			aliases: ['latency'],
			description: 'Pong!',
			usage: 'ping',
			ownerOnly: true,
			cooldown: 5,
		});
	}

	exec(message) {
		const pingEmbed = new Discord.MessageEmbed().setTitle('test');
		message.channel.send(pingEmbed);
	}
}

module.exports = PingCommand;
