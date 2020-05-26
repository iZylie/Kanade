const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const { allModules } = require('../../constants');

class ModulesCommand extends Command {
	constructor() {
		super('modules', {
			aliases: ['modules', 'mdls'],
			description: 'Lists all bot modules.',
		});
	}
	async exec(message) {
		const modulesEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setTitle('List of modules:')
			.setDescription(allModules)
			.setFooter(
				'ℹ️ Type `k!cmds ModuleName` to get a list of commands in that module. eg `k!cmds games`',
			);
		message.channel.send(modulesEmbed);
	}
}

module.exports = ModulesCommand;
