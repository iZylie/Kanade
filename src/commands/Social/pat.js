const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const client = require("nekos.life");
const neko = new client();

class PatCommand extends Command {
	constructor() {
		super("pat", {
			aliases: ["pat"],
			args: [
				{
					id: "member",
					type: "memberMention"
				}
			],
			channel: "guild",
			cooldown: 20000,
			description: {
				description: "Pat a user, pat yourself if no user provided.",
				usage: "`k!pat` or `k!pat @user`"
			}
		});
	}

	async exec(message, args) {
		const Pat = await neko.sfw.pat();
		if (args.member) {
			const userToPatEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} pets ${args.member.user.username}!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Pat.url
				)
				.setImage(Pat.url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(userToPatEmbed);
		} else {
			const PatEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} pats themselves, I don't know what to say.`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Pat.url
				)
				.setImage(Pat.url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(PatEmbed);
		}
	}
}

module.exports = PatCommand;
