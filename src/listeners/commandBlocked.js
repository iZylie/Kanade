const {
  Listener
} = require('discord-akairo');

class CommandBlockedListener extends Listener {
  constructor() {
    super('commandBlocked', {
      emitter: 'commandHandler',
      event: 'commandBlocked',
    });
  }

  exec(message, command, reason) {
    if (reason == 'being blacklisted') {
      message.channel.send(
        `${message.author.username} was blocked from using \`${command.id}\` command because of ${reason}!`,
      );
    }
  }
}

module.exports = CommandBlockedListener;
