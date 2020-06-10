const { Command } = require("discord-akairo");
const Discord = require("discord.js");

class OnlineCommand extends Command {
	constructor() {
		super("online", {
			aliases: ["online", "on"],
			ownerOnly: true,
			description: {
				description: "Sends the message to the kanade updates channel.",
				usage: "`k!online` or `k!on`"
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
			.setColor("71cd40")
			.setDescription(
				`I'm 24/7 online and ready to serve ${
					ayala.members.cache.filter(u => !u.user.bot).size
				} people in ${ayala} again!\n~~Until Zyla shuts me down.~~`
			)
			.setFooter(
				"Type `k!help` to learn more about me!",
				"https://bit.ly/2MJP6xh"
			);
		updatesChannel.send(sendEmbed);
	}
}

module.exports = OnlineCommand;
