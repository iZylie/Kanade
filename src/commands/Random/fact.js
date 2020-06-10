const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const client = require("nekos.life");
const neko = new client();

class factCommand extends Command {
	constructor() {
		super("fact", {
			aliases: ["fact"],
			channel: "guild",
			cooldown: 10000,
			description: {
				description: "Sends a random fact.",
				usage: "`k!fact`"
			}
		});
	}

	async exec(message) {
		const fact = await neko.sfw.fact();
		const factEmbed = new Discord.MessageEmbed()
			.setColor(29128)
			.setAuthor(
				`${message.author.username}, here's a random fact for you!`,
				`${message.author.avatarURL({ dynamic: true, size: 2048 })}`
			)
			.setDescription(fact.fact)
			.setFooter(
				`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
					1} seconds`
			);
		message.channel.send(factEmbed);
	}
}

module.exports = factCommand;
