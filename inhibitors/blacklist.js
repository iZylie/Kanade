const { Inhibitor } = require('discord-akairo');

class BlacklistInhibitor extends Inhibitor {
	constructor() {
		super('blacklist', {
			reason: 'blacklisted',
		});
	}

	exec(message) {
		// He's a meanie!
		const blacklist = ['518632912124379140'];
		return blacklist.includes(message.author.id);
	}
}

module.exports = BlacklistInhibitor;
