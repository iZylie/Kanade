const { Command } = require("discord-akairo");
const Discord = require("discord.js");

class OfflineCommand extends Command {
	constructor() {
		super("offline", {
			aliases: ["offline", "off"],
			ownerOnly: true,
			description: {
				description: "Sends the magical message to the kanade updates channel.",
				usage: "`k!offline` or `k!off`"
			}
		});
	}
	exec(message) {
		const ayala = this.client.guilds.cache.find(
			g => g.id === "679484346553729024"
		);
		const updatesChannel = this.client.channels.cache.find(
			c => c.id === "714154998249816125"
		);
		const sendEmbed = new Discord.MessageEmbed()
			.setColor("ee281f")
			.setDescription(`Zyla shut me down, I'll return with updates/fixes.`)
			.setFooter(
				"Type `k!help` to learn more about me!",
				"https://bit.ly/2MJP6xh"
			);
		updatesChannel.send(sendEmbed);
	}
}

module.exports = OfflineCommand;
