const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class HelpCommand extends Command {
	constructor() {
		super('help', {
			aliases: ['help', 'h'],
			args: [
				{
					id: 'command',
					type: 'commandAlias',
				},
			],
			cooldown: 3000,
			description: {
				description:
					'Either shows a help for a single command, or DMs you help link if no parameters are specified.',
				usage: '`k!h commandName` or `k!h`',
			},
		});
	}
	async exec(message, args) {
		const prefix = this.client.commandHandler.prefix;
		//* DM EMBED
		//#region DM EMBED
		const dmHelpEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.addField(
				'Useful help commands:',
				`\`${prefix}modules\` Lists all bot modules.\n\`${prefix}h commandName\` Shows some help about a specific command.\n\`${prefix}commands moduleName\` Lists all commands in a module`,
			)
			.setThumbnail(
				`${this.client.user.displayAvatarURL({ dynamic: true, size: 2048 })}`,
			);
		if (!args.command) return message.author.send(dmHelpEmbed);
		//#endregion
		//* k!help command EMBED IF NO ALIASES
		//#region k!help command EMBED IF NO ALIASES
		const helpCmdWithoutAliasesEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.addFields(
				{
					name: `\`${args.command.id}\``,
					value: `${args.command.description.description}`,
				},
				{
					name: 'Usage',
					value: `${args.command.description.usage}`,
				},
			)
			.setFooter(`Module: ${args.command.categoryID}`);
		if (args.command.aliases == args.command.id)
			return message.channel.send(helpCmdWithoutAliasesEmbed);
		//#endregion
		//* k!help command EMBED IF ALIASES
		//#region k!help command EMBED IF ALIASES
		const helpCmdWithAliasesEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.addFields(
				{
					name: `\`${args.command}\` **/** \`${args.command.aliases[1]}\``,
					value: `${args.command.description.description}`,
				},
				{
					name: 'Usage',
					value: `${args.command.description.usage}`,
				},
			)
			.setFooter(`Module: ${args.command.categoryID}`);
		if (args.command.aliases)
			return message.channel.send(helpCmdWithAliasesEmbed);
		//#endregion
	}
}

module.exports = HelpCommand;
