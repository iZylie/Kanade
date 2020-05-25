const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class feedCommand extends Command {
	constructor() {
		super('feed', {
			aliases: ['feed'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'Feed a user, feed yourself if no user provided.',
		});
	}

	async exec(message, args) {
		const feed = await neko.sfw.feed();
		const userTofeed = args.member;
		if (userTofeed) {
			const userTofeedEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} feeds ${userTofeed.user.username}!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					feed.url,
				)
				.setImage(feed.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(userTofeedEmbed);
		} else {
			const feedEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} feeds themselves, they must be hungry!`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					feed.url,
				)
				.setImage(feed.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(feedEmbed);
		}
	}
}

module.exports = feedCommand;
