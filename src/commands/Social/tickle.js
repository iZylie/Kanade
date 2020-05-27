const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class TickleCommand extends Command {
	constructor() {
		super('tickle', {
			aliases: ['tickle'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'Tickle a user, Tickle yourself if no user provided.',
		});
	}

	async exec(message, args) {
		const Tickle = await neko.sfw.tickle();
		if (args.member) {
			const userToTickleEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Tickles ${args.member.user.username}!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Tickle.url,
				)
				.setImage(Tickle.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(userToTickleEmbed);
		} else {
			const TickleEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Tickles themselves, don't ask me how-`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Tickle.url,
				)
				.setImage(Tickle.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(TickleEmbed);
		}
	}
}

module.exports = TickleCommand;
