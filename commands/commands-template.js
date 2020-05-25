const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class commandNameCommand extends Command {
	constructor() {
		super('commandName', {
			aliases: ['commandName', 'commandAliases'],
		});
	}

	async exec(message) {}
}

module.exports = commandNameCommand;
