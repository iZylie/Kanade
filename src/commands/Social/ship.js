const { Command } = require('discord-akairo');
const Discord = require('discord.js');

class ShippingCommand extends Command {
	constructor() {
		super('ship', {
			aliases: ['ship', 'match'],
			channel: 'guild',
			cooldown: 20000,
			description: {
				description: 'Ships two people!',
				usage: '`k!ship @user` or `k!match @firstPerson @secondPerson`',
			},
			args: [
				{
					id: 'firstMember',
					type: 'memberMention',
				},
				{
					id: 'secondMember',
					type: 'memberMention',
				},
			],
		});
	}
	async exec(message, args) {
		if (!args.firstMember || !args.secondMember) return;

		const love = Math.random() * 100;
		const loveIndex = Math.floor(love / 10);
		const loveLevel = '💖'.repeat(loveIndex) + '💔'.repeat(10 - loveIndex);
		const shippingEmbed = new Discord.MessageEmbed()
			.setColor('dd2e44')
			.setTitle('Shipping...')
			.setDescription(
				`${args.firstMember} loves ${args.secondMember} this much!`,
			)
			.addField(`Their love ratio is: ${loveIndex}/10`, `${loveLevel}`);
		message.channel.send(shippingEmbed);
	}
}

module.exports = ShippingCommand;
