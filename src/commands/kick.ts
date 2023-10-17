import { ShewenyClient } from 'sheweny';
import { Command } from 'sheweny';
import { CommandInteraction, GuildBan } from 'discord.js';

module.exports = class KickCommand extends Command {
    constructor(client: ShewenyClient) {
      super(client, {
        name: "kick",
        type: "SLASH_COMMAND",
        description: "View the list of commands and related information.",
        userPermissions: ['KickMembers'],
        clientPermissions: ['KickMembers'],
    });
  }
  execute(interaction: CommandInteraction) {
    interaction.reply({ content: "This is an example of a Slash command. Learn more about building a command with Sheweny: https://sheweny.js.org/doc/structures/Command.html", ephemeral: true });
  }
}
