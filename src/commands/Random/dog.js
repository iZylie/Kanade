const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const client = require("nekos.life");
const neko = new client();

class dogCommand extends Command {
	constructor() {
		super("dog", {
			aliases: ["dog", "woof"],
			channel: "guild",
			cooldown: 10000,
			description: { description: "Sends a dog image/gif.", usage: "`k!dog`" }
		});
	}

	async exec(message) {
		const dog = await neko.sfw.woof();
		const dogEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setAuthor(
				`How cute, isn't it?`,
				`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
				dog.url
			)
			.setImage(dog.url)
			.setFooter(`Module: ${this.categoryID}`)
			.setFooter(
				`Module: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
					1} seconds`
			);
		message.channel.send(dogEmbed);
	}
}

module.exports = dogCommand;
