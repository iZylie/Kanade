const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class SmugCommand extends Command {
	constructor() {
		super('smug', {
			aliases: ['smug'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'Smug at user, Smug as an emote if no user provided.',
		});
	}

	async exec(message, args) {
		const Smug = await neko.sfw.smug();
		if (args.member) {
			const SmugAtEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} scoffs ${args.member.user.username}.`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Smug.url,
				)
				.setImage(Smug.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(SmugAtEmbed);
		} else {
			const SmugEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Smugs.`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Smug.url,
				)
				.setImage(Smug.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(SmugEmbed);
		}
	}
}

module.exports = SmugCommand;
