const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const client = require("nekos.life");
const neko = new client();

class cuddleCommand extends Command {
	constructor() {
		super("cuddle", {
			aliases: ["cuddle"],
			args: [
				{
					id: "member",
					type: "memberMention"
				}
			],
			channel: "guild",
			cooldown: 20000,
			description: {
				description: "Cuddle a user, cuddle yourself if no user provided.",
				usage: "`k!cuddle` or `k!cuddle @user`"
			}
		});
	}

	async exec(message, args) {
		const cuddle = await neko.sfw.cuddle();
		if (args.member) {
			const cuddleTo = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} cuddles ${args.member.user.username}!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					cuddle.url
				)
				.setImage(cuddle.url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(cuddleTo);
		} else {
			const cuddleEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} cuddles themselves, they must be lonely :c`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					cuddle.url
				)
				.setImage(cuddle.url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(cuddleEmbed);
		}
	}
}

module.exports = cuddleCommand;
