const { Command } = require("discord-akairo");
const constants = require("../../Util/constants");
const Discord = require("discord.js");

class CommandsCommand extends Command {
	constructor() {
		super("cmds", {
			aliases: ["cmds", "commands"],
			args: [
				{
					id: "category",
					type: "string"
				}
			],
			description: {
				description:
					"List all of the bot's commands from a certain module. You have to specify the full name.",
				usage: "`k!cmds categoryName`"
			}
		});
	}

	async exec(message, args) {
		let category = this.client.commandHandler.findCategory(args.category);
		const invalidCategory = new Discord.MessageEmbed()
			.setColor("ee281f")
			.setDescription(`**${message.author.tag}** That module doesn't exists.`);
		if (!category) {
			return message.channel.send(invalidCategory);
		}

		let commands = [];

		category.forEach(command => {
			let commandName = command.id;
			let commandAliases = (command.aliases || []).filter(
				alias => alias !== command.id
			);

			let commandFormatted = [
				`k!${commandName}`,
				`[${commandAliases.join(",")}]`
			];

			commands.push(commandFormatted);
		});
		const cmdsEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.addField(
				`${args.category.charAt(0).toUpperCase() + args.category.slice(1)}`,
				"```css\n" + constants.thingsFormatted(commands) + "```",
				true
			);
		return message.channel.send(cmdsEmbed);
	}
}

module.exports = CommandsCommand;
