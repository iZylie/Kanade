const { Command } = require('discord-akairo');

class HighestRoleCommand extends Command {
	constructor() {
		super('highestRole', {
			aliases: ['highestRole'],
			args: [
				{
					id: 'member',
					type: 'member',
					prompt: {
						start: 'Who would you like to get the highest role of?',
						retry: "That's not a valid member! Try again.",
					},
				},
			],
			channel: 'guild',
		});
	}

	exec(message, args) {
		return message.reply(args.member.highestRole.name);
	}
}

module.exports = HighestRoleCommand;
