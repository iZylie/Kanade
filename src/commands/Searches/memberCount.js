const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class MemberCountCommand extends Command {
	constructor() {
		super('membercount', {
			aliases: ['membercount', 'count', 'mc'],
			usage: 'k!membercount',
			cooldown: 3000,
			description: 'Get the server member count.',
		});
	}

	async exec(message) {
		const defaultChannel = this.client.channels.cache.find(
			(c) => c.id === '679484482172354570',
		);
		const ayala = this.client.guilds.cache.find(
			(g) => g.id === '679484346553729024',
		);
		let ayalaMembers = ayala.members.cache.filter((m) => !m.bot).size;
		let ayalaBots = ayala.members.cache.filter((u) => u.user.bot).size;
		let ayalaSizeExceptBots = ayalaMembers - ayalaBots;
		const memberCountEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setAuthor('Total Amount of Members', null, null)
			.setDescription(
				`Total Members: ${ayalaMembers}\nExcluding Bots: ${ayalaSizeExceptBots}`,
			)
			.setFooter(
				`Module: ${this.categoryID} / Cooldown ${
					(this.cooldown / 1000) * 1
				} seconds`,
			);
		if (message.channel.id !== defaultChannel.id) {
			if (message.member.roles.cache.has('689163217624367198')) {
				return message.channel.send(memberCountEmbed);
			} else {
				const wrongChannelEmbed = new Discord.MessageEmbed()
					.setColor(16711680)
					.setAuthor('Wrong Usage!')
					.setDescription(
						`You can't use \`${
							this.client.commandHandler.prefix + this.id
						}\` here, try ${defaultChannel}`,
					);
				message.channel.send(wrongChannelEmbed);
			}
		} else return message.channel.send(memberCountEmbed);
	}
}

module.exports = MemberCountCommand;
