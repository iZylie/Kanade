const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const constants = require('../../Util/constants');

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
			.setTitle('List of Categories')
			.setDescription(
				this.client.commandHandler.categories.map((m) => `• ${m}`).join('\n'),
			)
			.setFooter(
				'ℹ️ Type `k!cmds CategoryName` to get a list of commands in that category. eg `k!cmds help`',
			);
		message.channel.send(modulesEmbed);
	}
}

module.exports = ModulesCommand;
