import { ShewenyClient } from 'sheweny';
import { Command } from 'sheweny';
import { CommandInteraction, ApplicationCommandOptionType, EmbedBuilder } from 'discord.js';

module.exports = class HelpCommand extends Command {
    constructor(client: ShewenyClient) {
      super(client, {
        name: "help",
        type: "SLASH_COMMAND",
        description: "View the list of commands and related information.",
        options: [ // ApplicationCommandOptionType: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
            {
              name: "ephemeral",
              type: ApplicationCommandOptionType.Boolean,
              description: "If you want to display the command content just for you - select True (by default it is disabled).",
              required: false,
            },
        ],
    });
  }

  execute(interaction: CommandInteraction) {
    const embed = new EmbedBuilder()
      .setTitle('help')
      .setDescription('help')
      //.setColor('');

    interaction.reply({ embeds: [embed], ephemeral: false });
  }
}
