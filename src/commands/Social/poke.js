const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class PokeCommand extends Command {
	constructor() {
		super('Poke', {
			aliases: ['Poke'],
			args: [
				{
					id: 'member',
					type: 'member',
				},
			],
			channel: 'guild',
			cooldown: 10000,
			description: 'Poke a user, Poke yourself if no user provided.',
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
					Poke.url,
				)
				.setImage(Poke.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(userToPokeEmbed);
		} else {
			const PokeEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`${message.author.username} Pokes themselves, I think it's fun...?`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					Poke.url,
				)
				.setImage(Poke.url)
				.setFooter(`Module: ${this.categoryID}`)
				.setFooter(
					`Module: ${this.categoryID} / Cooldown ${
						(this.cooldown / 1000) * 1
					} seconds`,
				);
			message.channel.send(PokeEmbed);
		}
	}
}

module.exports = PokeCommand;
