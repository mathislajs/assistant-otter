import { ShewenyClient } from 'sheweny';
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const client = new ShewenyClient({
    intents: ['32767'],
    admins: ['938588350942707783'],
    joinThreadsOnCreate: true,
    managers: {
      commands: {
        directory: './commands',
        prefix: 'otter',
        applicationPermissions: true,
        default: {
          userPermissions: ['UseApplicationCommands'],
        },
      },
      events: {
        directory: './events',
      },
    },
  });

client.login(TOKEN);