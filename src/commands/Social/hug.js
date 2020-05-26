const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class hugCommand extends Command {
	constructor() {
		super('hug', {
			aliases: ['hug'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'hug a user, hug yourself if no user provided.',
		});
	}

	async exec(message, args) {
		const hug = await neko.sfw.hug();
		if (args.member) {
			const userTohugEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} hugs ${args.member.user.username}!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					hug.url,
				)
				.setImage(hug.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(userTohugEmbed);
		} else {
			const hugEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} hugs themselves, I don't know how-`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					hug.url,
				)
				.setImage(hug.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(hugEmbed);
		}
	}
}

module.exports = hugCommand;
