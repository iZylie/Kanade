const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class cuddleCommand extends Command {
	constructor() {
		super('cuddle', {
			aliases: ['cuddle'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'Cuddle a user, cuddle yourself if no user provided.',
		});
	}

	async exec(message, args) {
		const cuddle = await neko.sfw.cuddle();
		const userTocuddle = args.member;
		if (userTocuddle) {
			const userTocuddleEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} cuddles ${userTocuddle.user.username}!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					cuddle.url,
				)
				.setImage(cuddle.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(userTocuddleEmbed);
		} else {
			const cuddleEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} cuddles themselves, they must be lonely :c`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					cuddle.url,
				)
				.setImage(cuddle.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(cuddleEmbed);
		}
	}
}

module.exports = cuddleCommand;
