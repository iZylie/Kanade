const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class commandNameCommand extends Command {
	constructor() {
		super('commandName', {
			aliases: ['commandName', 'commandAliases'],
			category: 'commandModule',
			//? typing: true,
			//? description: '',
			//? ownerOnly: true,
		});
	}

	async exec(message) {}
}

module.exports = commandNameCommand;
