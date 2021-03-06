const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const client = require("nekos.life");
const neko = new client();

class PokeCommand extends Command {
	constructor() {
		super("poke", {
			aliases: ["poke"],
			args: [
				{
					id: "member",
					type: "memberMention"
				}
			],
			channel: "guild",
			cooldown: 20000,
			description: {
				description: "Poke a user, poke yourself if no user provided.",
				usage: "`k!poke` or `k!poke @user`"
			}
		});
	}

	async exec(message, args) {
		const Poke = await neko.sfw.poke();
		if (args.member) {
			const userToPokeEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Pokes ${args.member.user.username}!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Poke.url
				)
				.setImage(Poke.url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(userToPokeEmbed);
		} else {
			const PokeEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Pokes themselves, I think it's fun...?`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Poke.url
				)
				.setImage(Poke.url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(PokeEmbed);
		}
	}
}

module.exports = PokeCommand;
