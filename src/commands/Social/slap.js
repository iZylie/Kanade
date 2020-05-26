const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class SlapCommand extends Command {
	constructor() {
		super('Slap', {
			aliases: ['Slap'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'Slap a user, Slap yourself if no user provided.',
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
					Slap.url,
				)
				.setImage(Slap.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(userToSlapEmbed);
		} else {
			const SlapEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Slaps themselves, I hope they get better soon-`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Slap.url,
				)
				.setImage(Slap.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(SlapEmbed);
		}
	}
}

module.exports = SlapCommand;
