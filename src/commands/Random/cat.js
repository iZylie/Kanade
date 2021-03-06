const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const client = require("nekos.life");
const neko = new client();

class catCommand extends Command {
	constructor() {
		super("cat", {
			aliases: ["cat", "meow"],
			channel: "guild",
			cooldown: 10000,
			description: {
				description: "Sends a cat image/gif.",
				usage: "`k!cat`"
			}
		});
	}

	async exec(message) {
		const cat = await neko.sfw.meow();
		const catEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setAuthor(
				`How cute, isn't it?`,
				`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
				cat.url
			)
			.setImage(cat.url)
			.setFooter(
				`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
					1} seconds`
			);
		message.channel.send(catEmbed);
	}
}

module.exports = catCommand;
