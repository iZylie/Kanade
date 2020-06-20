const { Command } = require('discord-akairo');
const Discord = require('discord.js');
//const Canvas = require('canvas'); // You can't make images without this.
const { Canvas } = require('canvas-constructor'); // You can't make images without this.
const fetch = require('node-fetch');
const fs = require('fs');
const imageUrlRegex = /\?size=2048$/g;

class ShippingCommand extends Command {
	constructor() {
		super('ship', {
			aliases: ['ship', 'match'],
			channel: 'guild',
			cooldown: 20000,
			description: {
				description:
					'~~Ships two people!~~ (Only sender of the message and the mentioned person, for now.)',
				usage: '`k!ship @user` (For now this is the only way to use it.)',
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
		if (!args.firstMember && !args.secondMember) return;
		if (!args.secondMember) {
			if (args.firstMember.id !== message.author.id) {
				const authorResult = await fetch(
					message.author
						.displayAvatarURL({ format: 'png' })
						.replace(imageUrlRegex, '?size=128'),
				);
				if (!authorResult.ok) throw new Error('Failed to get the avatar.');
				const authorAvatar = await authorResult.buffer();
				const mentionedAvatarResult = await fetch(
					args.firstMember.user
						.displayAvatarURL({ format: 'png' })
						.replace(imageUrlRegex, '?size=128'),
				);
				if (!mentionedAvatarResult.ok)
					throw new Error('Failed to get the avatar.');
				const mentionedAvatar = await mentionedAvatarResult.buffer();

				const authorNameFirstHal = message.author.username.substring(
					0,
					message.author.username.length / 2,
				);

				const firstMemberNameLastHalf = args.firstMember.user.username.substring(
					args.firstMember.user.username.length / 2,
					args.firstMember.user.username.length,
				);

				const shippedName = authorNameFirstHal + firstMemberNameLastHalf;

				const canvas = new Canvas(1200, 600)
					.setColor('#FFB4F4')
					//.setColor('#000000')
					.addRect(0, 0, 1200, 600)
					.setShadowColor('rgba(22, 22, 22, 1)')
					.setShadowOffsetY(5)
					.setShadowBlur(10)
					.addCircularImage(authorAvatar, 250, 300, 225)
					.addCircularImage(mentionedAvatar, 940, 300, 225)
					.save()
					.createBeveledClip(10, 140, 120, 35, 10)
					.createBeveledClip(20, 276, 256, 64, 10)
					.setColor('#23272A')
					.fill()
					.restore()
					.setColor('#FFFFFF')
					.setTextFont('75px Yu Gothic')
					.addText(message.author.username, 175, 585)
					.addText(args.firstMember.user.username, 815, 585)
					.addText(shippedName, 490, 300) //y was 475
					.toBuffer();
				const attachment = new Discord.MessageAttachment(canvas, 'ship.png');
				const embed = new Discord.MessageEmbed()
					.setColor('ffb4f4')
					.setAuthor(
						`Shipping ${message.author.username} with ${args.firstMember.user.username}...`,
						this.client.user.displayAvatarURL(),
					)
					.attachFiles(attachment)
					.setImage('attachment://ship.png');
				message.channel.send(embed);
			} else {
				const embed = new Discord.MessageEmbed()
					.setColor('FF0000')
					.setDescription(
						`Sorry **${message.author.tag}**, can't ship you with yourself.\nWe all know everyone loves themselves.`,
					);
				message.channel.send(embed);
			}
		} else {
			return;
		}
	}
}

// module.exports = ShippingCommand;
