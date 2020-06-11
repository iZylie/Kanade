const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const Neko = require("neko-love");
const client = new Neko.Client();

class PunchCommand extends Command {
	constructor() {
		super("punch", {
			aliases: ["punch"],
			args: [
				{
					id: "member",
					type: "memberMention"
				}
			],
			channel: "guild",
			cooldown: 20000,
			description: {
				description: "Punch a user, punch yourself if no user provided.",
				usage: "`k!punch` or `k!punch @user`"
			}
		});
	}

	async exec(message, args) {
		client.punch().then(url => {
			if (args.member) {
				const userToPunchEmbed = new Discord.MessageEmbed()
					.setColor(29128)
					.setAuthor(
						`${message.author.username} is punching ${args.member.user.username}, everyone else run away!`,
						`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
						url
					)
					.setImage(url)
					.setFooter(
						`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
							1} seconds`
					);
				message.channel.send(userToPunchEmbed);
			} else {
				const punchEmbed = new Discord.MessageEmbed()
					.setColor(29128)
					.setAuthor(
						`${message.author.username}, you really want to punch yourself? I'm not sure why, but here's your gif!`,
						`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
						url
					)
					.setImage(url)
					.setFooter(
						`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
							1} seconds`
					);
				message.channel.send(punchEmbed);
			}
		});
	}
}

module.exports = PunchCommand;
