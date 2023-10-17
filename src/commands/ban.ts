import { ShewenyClient } from 'sheweny';
import { Command } from 'sheweny';
import { CommandInteraction, ApplicationCommandOptionType } from 'discord.js';

module.exports = class BanCommand extends Command {
    constructor(client: ShewenyClient) {
      super(client, {
        name: "ban",
        type: "SLASH_COMMAND",
        description: "Ban a user from the server.",
        userPermissions: ['BanMembers'],
        clientPermissions: ['BanMembers'],
        options: [ // ApplicationCommandOptionType: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType#Index
            {
              name: "user",
              type: ApplicationCommandOptionType.User,
              description: "The user to ban (search for the username or paste the ID).",
              required: true,
            },
            {
              name: "reason",
              type: ApplicationCommandOptionType.String,
              description: "The reason for the ban (if you add markdown to your text, it will be integrated).",
              required: false,
            },
        ],
    });
  }
  execute(interaction: CommandInteraction) {
    interaction.reply({ content: "This is an example of a Slash command. Learn more about building a command with Sheweny: https://sheweny.js.org/doc/structures/Command.html", ephemeral: false });
  }
}
