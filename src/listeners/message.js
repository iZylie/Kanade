const { Listener } = require("discord-akairo");
const Discord = require("discord.js");

class MessageListener extends Listener {
	constructor() {
		super("message", {
			emitter: "client",
			event: "message",
			category: "Client"
		});
	}
	exec(message) {}
}

// module.exports = MessageListener;
