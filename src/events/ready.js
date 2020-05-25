const { Listener } = require('discord-akairo');
const Discord = require('discord.js');

class ReadyListener extends Listener {
	constructor() {
		super('ready', {
			emitter: 'client',
			event: 'ready',
			type: 'once',
		});
	}

	exec() {
		const Ayala = this.client.guilds.cache.find(
			(g) => g.id === '679484346553729024',
		);
		let AyalaMembers = Ayala.members.cache.filter((e) => !e.bot).size;
		//todo let AyalaBots = Ayala.members.cache.filter((b) => b.user.bot).size;
		console.log(`I'm online in ${Ayala} with ${AyalaMembers} people!`);
	}
}

module.exports = ReadyListener;
