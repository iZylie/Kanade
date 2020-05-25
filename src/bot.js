const { AkairoClient, CommandHandler } = require('discord-akairo');

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
			// Options for the command handler goes here.
			directory: './commands/',
			prefix: 'k!',
		});
		this.commandHandler.loadAll();
	}
}

const client = new MyClient();
client.login('NzE0MzU4MTM3ODU5MDgwMjIz.XstxNg.htlGxWTUqk05PERog-j6e6gCkbY');
