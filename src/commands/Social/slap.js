const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const client = require("nekos.life");
const neko = new client();

class SlapCommand extends Command {
	constructor() {
		super("slap", {
			aliases: ["slap"],
			args: [
				{
					id: "member",
					type: "memberMention"
				}
			],
			channel: "guild",
			cooldown: 20000,
			description: {
				description: "Slap a user, slap yourself if no user provided.",
				usage: "`k!slap` or `k!slap @user`"
			}
		});
	}

	async exec(message, args) {
		const Slap = await neko.sfw.slap();
		if (args.member) {
			const userToSlapEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Slaps ${args.member.user.username}!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Slap.url
				)
				.setImage(Slap.url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(userToSlapEmbed);
		} else {
			const SlapEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Slaps themselves, I hope they get better soon-`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Slap.url
				)
				.setImage(Slap.url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(SlapEmbed);
		}
	}
}

module.exports = SlapCommand;
