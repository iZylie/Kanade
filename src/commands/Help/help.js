const { Command } = require("discord-akairo");
const Discord = require("discord.js");

class HelpCommand extends Command {
	constructor() {
		super("help", {
			aliases: ["help", "h"],
			args: [
				{
					id: "command",
					type: "commandAlias"
				}
			],
			cooldown: 3000,
			description: {
				description: "Either shows a help for a single command, or DMs you.",
				usage: "`k!h commandName` or `k!h`"
			}
		});
	}
	async exec(message, args) {
		const prefix = this.client.commandHandler.prefix;
		const zyla = this.client.users.cache.find(
			u => u.id === "488699894023061516"
		);
		const dmHelpEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setTitle("Who am I?")
			//.setURL("https://discord.js.org/")
			.setAuthor(
				"Hello, my name is Kanade!",
				`${this.client.user.displayAvatarURL()}`
			)
			.setDescription(
				`Hello, my name is Kanade Tachibana and I am a bot made for Ayala Discord. I can do many commands and even give you hugs. I am being worked on all the time by **${zyla.tag}** so if there is anything that I could be better at please inform my creator!`
			)
			.setThumbnail(
				`${this.client.guilds.cache
					.find(g => g.id === "679484346553729024")
					.iconURL({ dynamic: true, size: 256 })}`
			)
			.addFields(
				{
					name: "Basic Commands",
					value: "You can see how you can start using my commands down below."
				},
				//EMPTY FIELD { name: "\u200B", value: "\u200B" },
				{
					name: "**help [h]**",
					value:
						"Either get some information about me and basic commands or helpful information about a command!"
					//inline: true
				},
				{
					name: "**categories [ctgrs]**",
					value:
						"View a list of all categories, read below to know how to see commands inside a category!"
					//inline: true
				},
				{
					name: "**commands [cmds]**",
					value:
						"View a list all of the bot's commands from a certain category. You have to specify the full name, ~~for now~~."
					//inline: true
				}
			)
			//.setImage("https://i.imgur.com/wSTFkRM.png")
			//.setTimestamp()
			.setFooter(
				`Made by: ${zyla.tag}`,
				`${zyla.displayAvatarURL({ dynamic: true })}`
			);

		if (!args.command) return message.author.send(dmHelpEmbed);

		const helpCmdWithoutAliasesEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.addFields(
				{
					name: `\`${args.command.id}\``,
					value: `${args.command.description.description}`
				},
				{
					name: "Usage",
					value: `${args.command.description.usage}`
				}
			)
			.setFooter(`Category: ${args.command.categoryID}`);

		if (args.command.aliases == args.command.id)
			return message.channel.send(helpCmdWithoutAliasesEmbed);

		const helpCmdWithAliasesEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.addFields(
				{
					name: `\`${args.command}\` **/** \`${args.command.aliases[1]}\``,
					value: `${args.command.description.description}`
				},
				{
					name: "Usage",
					value: `${args.command.description.usage}`
				}
			)
			.setFooter(`Category: ${args.command.categoryID}`);

		if (args.command.aliases)
			return message.channel.send(helpCmdWithAliasesEmbed);
	}
}

module.exports = HelpCommand;
