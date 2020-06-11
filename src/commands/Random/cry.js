const Discord = require("discord.js");
const { Command } = require("discord-akairo");
const Neko = require("neko-love");
const client = new Neko.Client();
class CryCommand extends Command {
	constructor() {
		super("cry", {
			aliases: ["cry"],
			channel: "guild",
			cooldown: 10000,
			description: {
				description: "Sends a crying image/gif.",
				usage: "`k!cry`"
			}
		});
	}
	async exec(message) {
		client.cry().then(url => {
			const cryEmbed = new Discord.MessageEmbed()
				.setColor(29128)
				.setAuthor(
					`Oh no, ${message.author.username}, why are you crying? :c`,
					`${message.author.avatarURL({ dynamic: true, size: 2048 })}`,
					url
				)
				.setImage(url)
				.setFooter(
					`Category: ${this.categoryID} / Cooldown ${(this.cooldown / 1000) *
						1} seconds`
				);
			message.channel.send(cryEmbed);
		});
	}
}

module.exports = CryCommand;
