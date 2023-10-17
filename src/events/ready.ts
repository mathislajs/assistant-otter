// https://sheweny.js.org/docs/structures/Event.html

import { Event } from 'sheweny';
import type { ShewenyClient } from 'sheweny';
import type { Client } from 'discord.js';

export class Ready extends Event {
  constructor(client: ShewenyClient) {
    super(client, 'ready', {
      description: 'Displays a console.log if the client was successfully connected or not.',
      once: true,
    });
  }
  execute(client: Client) {
    if (client.user) {
      console.log(`The client ${client.user.tag} has been successfully connected.`);
    } else {
      console.log('The client was not successfully connected.');
    }
  }
}
