const { Command } = require('discord-akairo');

class PingCommand extends Command {
	constructor() {
		super('ping', {
			aliases: ['latency'],
		});
	}

	async exec(message) {
		const sent = await message.reply('Pong!');
		const timeDiff =
			(sent.editedAt || sent.createdAt) -
			(message.editedAt || message.createdAt);
		sent.edit([
			'Pong!',
			`🔂 **RTT**: ${timeDiff} ms`,
			`💟 **Heartbeat**: ${Math.round(this.client.ping)} ms`,
		]);
	}
}

module.exports = PingCommand;
