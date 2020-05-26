const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const { modules } = require('../../constants.js');

class CommandsCommand extends Command {
	constructor() {
		super('commands', {
			aliases: ['commands', 'cmds'],
			args: [
				{
					id: 'command',
					type: modules,
				},
			],
		});
	}
	async exec(message, args) {
		modules.forEach((module) => {
			if (args.command == module) {
				console.log(module);
			} else return;
		});
	}
}

module.exports = CommandsCommand;
