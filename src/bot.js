const {
	AkairoClient,
	CommandHandler,
	InhibitorHandler,
	ListenerHandler,
} = require('discord-akairo');
class MyClient extends AkairoClient {
	constructor() {
		super(
			{
				ownerID: '488699894023061516', // or ['123992700587343872', '86890631690977280']
			},
			{
				disableEveryone: true,
			},
		);
		this.commandHandler = new CommandHandler(this, {
			directory: './src/commands/',
			prefix: 'k!',
			allowMention: true,
			blockBots: true,
		});
		this.inhibitorHandler = new InhibitorHandler(this, {
			directory: './src/inhibitors/',
		});
		this.listenerHandler = new ListenerHandler(this, {
			directory: './src/events/',
		});
		this.commandHandler.loadAll();
		this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
		this.inhibitorHandler.loadAll();
		this.commandHandler.useListenerHandler(this.listenerHandler);
		this.listenerHandler.loadAll();
		this.listenerHandler.setEmitters({
			commandHandler: this.commandHandler,
			inhibitorHandler: this.inhibitorHandler,
			listenerHandler: this.listenerHandler,
		});
	}
}

const client = new MyClient();
client.login('NzE0MzU4MTM3ODU5MDgwMjIz.Xst97Q.iVzszgZv2CQ3xUNGDy482jEOpYA');
