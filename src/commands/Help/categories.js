const {
  Command
} = require('discord-akairo');
const Discord = require('discord.js');

class CategoriesCommand extends Command {
  constructor() {
    super('categories', {
      aliases: ['categories', 'ctgrs'],
      description: {
        description: 'Lists all bot categories.',
        usage: '`k!categories` or `k!ctgrs`',
      },
    });
  }
  async exec(message) {
    const categoriesEmbed = new Discord.MessageEmbed()
      .setColor(29128)
      .setTitle('List of Categories')
      .setDescription(
        this.client.commandHandler.categories.map((m) => `• ${m}`).join('\n'),
      )
      .setFooter(
        'ℹ️ Type `k!cmds CategoryName` to get a list of commands in that category. eg `k!cmds help`',
      );
    message.channel.send(categoriesEmbed);
  }
}

module.exports = CategoriesCommand;
