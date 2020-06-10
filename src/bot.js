const {
	AkairoClient,
	CommandHandler,
	InhibitorHandler,
	ListenerHandler
} = require("discord-akairo");
require("dotenv").config();
class MyClient extends AkairoClient {
	constructor() {
		super(
			{
				ownerID: "488699894023061516"
			},
			{
				disableEveryone: true
			}
		);
		this.commandHandler = new CommandHandler(this, {
			directory: "./src/commands/",
			prefix: "k!",
			automateCategories: true,
			allowMention: true,
			blockClient: true,
			blockBots: true
		});
		this.inhibitorHandler = new InhibitorHandler(this, {
			directory: "./src/inhibitors/",
			automateCategories: true
		});
		this.listenerHandler = new ListenerHandler(this, {
			directory: "./src/listeners/",
			automateCategories: true
		});
		this.listenerHandler.setEmitters({
			commandHandler: this.commandHandler,
			inhibitorHandler: this.inhibitorHandler,
			listenerHandler: this.listenerHandler
		});
		this.listenerHandler.loadAll();
		this.inhibitorHandler.loadAll();
		this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
		this.commandHandler.useListenerHandler(this.listenerHandler);
		this.commandHandler.loadAll();
	}
}
const client = new MyClient();
client.login();
