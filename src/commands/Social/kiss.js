const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class kissCommand extends Command {
	constructor() {
		super('kiss', {
			aliases: ['kiss', 'mwah'],
			args: [
				{
					id: 'member',
					type: 'memberMention',
				},
			],
			channel: 'guild',
			cooldown: 20000,
			description: 'Kiss a user, kiss yourself if no user provided.',
		});
	}

	async exec(message, args) {
		const kiss = await neko.sfw.kiss();
		if (args.member) {
			const userTokissEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} is kissing ${args.member.user.username}! *blushes*`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					kiss.url,
				)
				.setImage(kiss.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(userTokissEmbed);
		} else {
			const kissEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} is kissing themselves, they love themselves too much, I guess?`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					kiss.url,
				)
				.setImage(kiss.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(kissEmbed);
		}
	}
}

module.exports = kissCommand;
